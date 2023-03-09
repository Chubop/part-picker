import { createClient } from '@supabase/supabase-js';

// Initialize the Supabase client with your project URL and API key
const supabase = createClient(
  process.env.REACT_APP_SUPABASE_URL,
  process.env.REACT_APP_SUPABASE_ANON_KEY
)

export default supabase;