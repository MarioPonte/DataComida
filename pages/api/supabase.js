import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
const supabase = createClient('https://tqfqjugaasyxfpbfboaw.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRxZnFqdWdhYXN5eGZwYmZib2F3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njk1Nzk4MzAsImV4cCI6MTk4NTE1NTgzMH0.QzIUuSye0ph8vv0p3NhG_EkY0Ac0IM5SSou6IrZ1Bl0')

export default supabase;