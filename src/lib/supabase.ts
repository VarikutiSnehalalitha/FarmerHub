import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://otrhfrdcdaqtwyvbynea.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im90cmhmcmRjZGFxdHd5dmJ5bmVhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTE3OTYzMjEsImV4cCI6MjEwNzM3MjMyMX0.nBrna41I4ggonx_cEy4z5De7COHEk3LkaydP9_0SowM';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);
