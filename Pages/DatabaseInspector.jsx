import React, { useState, useEffect } from "react";
import { nationalParksService } from "../lib/database.js";
import { supabase } from "../lib/supabase.js";

export default function DatabaseInspector() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [tableTests, setTableTests] = useState({});

  useEffect(() => {
    loadData();
  }, []);

  const testTableVariants = async () => {
    const tableNames = ['nationalparks', 'NationalParks', 'national_parks', 'parks'];
    const results = {};

    for (const tableName of tableNames) {
      try {
        console.log(`🔍 Testing table: ${tableName}`);
        const { data, error, count } = await supabase
          .from(tableName)
          .select('*', { count: 'exact' })
          .limit(5);
        
        results[tableName] = {
          success: !error,
          error: error?.message,
          count: count,
          sampleData: data?.slice(0, 2) || []
        };
      } catch (err) {
        results[tableName] = {
          success: false,
          error: err.message,
          count: 0,
          sampleData: []
        };
      }
    }

    return results;
  };

  const loadData = async () => {
    try {
      console.log('🔍 Database Inspector: Testing different table names...');
      const tableResults = await testTableVariants();
      setTableTests(tableResults);

      console.log('🔍 Database Inspector: Using nationalParksService...');
      const result = await nationalParksService.getAll();
      console.log('🔍 Database Inspector: Raw result:', result);
      
      setData(result);
      setError(null);
    } catch (err) {
      console.error('🔍 Database Inspector: Error:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Database Inspector</h1>
        
        {loading && <div className="text-blue-600 mb-4">Loading...</div>}
        
        {error && (
          <div className="bg-red-50 border border-red-200 p-4 rounded mb-4">
            <h3 className="font-semibold text-red-800">Error:</h3>
            <p className="text-red-700">{error}</p>
          </div>
        )}

        {/* Table Tests */}
        <div className="bg-white border rounded p-4 mb-6">
          <h3 className="font-semibold mb-4">Table Accessibility Tests:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(tableTests).map(([tableName, result]) => (
              <div key={tableName} className={`p-3 rounded border ${result.success ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
                <div className="font-medium">{tableName}</div>
                <div className="text-sm">
                  {result.success ? (
                    <>
                      <div className="text-green-700">✅ Accessible</div>
                      <div>Count: {result.count}</div>
                      {result.sampleData.length > 0 && (
                        <div className="mt-2">
                          <div className="font-medium">Sample data:</div>
                          {result.sampleData.map((item, idx) => (
                            <div key={idx} className="text-xs bg-white p-1 rounded mt-1">
                              {JSON.stringify(item, null, 1).substring(0, 100)}...
                            </div>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <div className="text-red-700">❌ {result.error}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Service Result */}
        {data && (
          <div className="space-y-6">
            <div className="bg-white border rounded p-4">
              <h3 className="font-semibold mb-2">nationalParksService Result:</h3>
              <div className="bg-gray-100 p-3 rounded text-sm overflow-auto">
                <pre>{JSON.stringify(data, null, 2)}</pre>
              </div>
            </div>
            
            {data.data && data.data.length > 0 && (
              <div className="bg-white border rounded p-4">
                <h3 className="font-semibold mb-2">Parks Found ({data.data.length}):</h3>
                <div className="space-y-3">
                  {data.data.map((park, index) => (
                    <div key={index} className="bg-gray-50 p-3 rounded">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div><strong>ID:</strong> {park.ID}</div>
                        <div><strong>Name:</strong> {park.Name}</div>
                        <div><strong>State:</strong> {park.State}</div>
                        <div><strong>Latitude:</strong> {park.Latitude}</div>
                        <div><strong>Longitude:</strong> {park.Longitude}</div>
                        <div><strong>Description:</strong> {park.Description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}