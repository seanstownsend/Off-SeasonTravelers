import { createClient } from '@supabase/supabase-js'

// Supabase configuration using environment variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://vevsotquweownzzjaivp.supabase.co'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZldnNvdHF1d2Vvd256emphaXZwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTkwMDQ1MDEsImV4cCI6MjA3NDU4MDUwMX0.E8_g4K0SV18SwtBoMUKZFWkztShElGsJe6vdati2qhE'

// Create Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Helper function to check if Supabase is configured
export const isSupabaseConfigured = () => {
  return supabaseUrl !== 'YOUR_SUPABASE_URL' && supabaseAnonKey !== 'YOUR_SUPABASE_ANON_KEY'
}