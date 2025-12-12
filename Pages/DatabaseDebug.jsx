import React, { useState, useEffect } from 'react';
import { destinationService, testDatabaseConnection } from '../lib/database.js';
import { supabase } from '../lib/supabase.js';

export default function DatabaseDebug() {
  const [results, setResults] = useState({});
  const [loading, setLoading] = useState(false);

  const runTests = async () => {
    setLoading(true);
    const testResults = {};

    try {
      // Test 1: Environment variables
      testResults.envVars = {
        url: import.meta.env.VITE_SUPABASE_URL,
        hasKey: !!import.meta.env.VITE_SUPABASE_ANON_KEY,
        keyLength: import.meta.env.VITE_SUPABASE_ANON_KEY?.length
      };

      // Test 2: Supabase client initialization
      testResults.supabaseClient = {
        exists: !!supabase,
        type: typeof supabase
      };

      // Test 3: Database connection test
      testResults.connectionTest = await testDatabaseConnection();

      // Test 4: Direct destinationService call
      testResults.destinationService = await destinationService.getAll();

      // Test 5: Raw Supabase call to destinations2 with all columns
      try {
        const { data: rawData, error: rawError } = await supabase
          .from('destinations2')
          .select('*')
          .limit(5);
        testResults.rawSupabaseAll = { data: rawData, error: rawError, count: rawData?.length };
      } catch (err) {
        testResults.rawSupabaseAll = { error: err };
      }

      // Test 5b: Try with specific column names that we expect
      try {
        const { data: specificData, error: specificError } = await supabase
          .from('destinations2')
          .select('"ID", "Name", "Continent", "Latitude", longitude, "Description"')
          .limit(3);
        testResults.rawSupabaseSpecific = { data: specificData, error: specificError, count: specificData?.length };
      } catch (err) {
        testResults.rawSupabaseSpecific = { error: err };
      }

      // Test 5b: Try original destinations table
      try {
        const { data: origData, error: origError } = await supabase
          .from('destinations')
          .select('*')
          .limit(5);
        testResults.originalDestinations = { data: origData, error: origError };
      } catch (err) {
        testResults.originalDestinations = { error: err };
      }

      // Test 6: Check if destinations2 table exists
      try {
        const { error: schemaError } = await supabase
          .from('destinations2')
          .select('*', { count: 'exact', head: true });
        testResults.destinations2TableExists = { exists: !schemaError, error: schemaError };
      } catch (err) {
        testResults.destinations2TableExists = { exists: false, error: err };
      }

      // Test 6b: Check if original destinations table exists
      try {
        const { error: origSchemaError } = await supabase
          .from('destinations')
          .select('*', { count: 'exact', head: true });
        testResults.destinationsTableExists = { exists: !origSchemaError, error: origSchemaError };
      } catch (err) {
        testResults.destinationsTableExists = { exists: false, error: err };
      }

      // Test 7: Get exact row count from destinations2
      try {
        const { count, error: countError } = await supabase
          .from('destinations2')
          .select('*', { count: 'exact', head: true });
        testResults.destinations2RowCount = { count, error: countError };
      } catch (err) {
        testResults.destinations2RowCount = { error: err };
      }

    } catch (error) {
      testResults.globalError = error;
    }

    setResults(testResults);
    setLoading(false);
  };

  useEffect(() => {
    runTests();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Database Debug Console</h1>
        
        {loading ? (
          <div className="text-blue-400">Running tests...</div>
        ) : (
          <div className="space-y-6">
            {Object.entries(results).map(([testName, result]) => (
              <div key={testName} className="bg-gray-800 p-4 rounded-lg">
                <h2 className="text-xl font-semibold mb-2 text-green-400">
                  {testName}
                </h2>
                <pre className="text-sm overflow-auto bg-black p-3 rounded">
                  {JSON.stringify(result, null, 2)}
                </pre>
              </div>
            ))}
          </div>
        )}
        
        <button 
          onClick={runTests}
          disabled={loading}
          className="mt-6 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded font-semibold"
        >
          {loading ? 'Running Tests...' : 'Re-run Tests'}
        </button>
      </div>
    </div>
  );
}