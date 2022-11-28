import { createClient } from "@supabase/supabase-js";

const PROJECT_URL = "https://tqfqjugaasyxfpbfboaw.supabase.co";
const PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRxZnFqdWdhYXN5eGZwYmZib2F3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njk1Nzk4MzAsImV4cCI6MTk4NTE1NTgzMH0.QzIUuSye0ph8vv0p3NhG_EkY0Ac0IM5SSou6IrZ1Bl0";
const supabase = createClient(PROJECT_URL, PUBLIC_KEY);

export function foodService(){
    return {
        getAllFoods() {
            return supabase.from("foods")
                .select("*")
                .order("created_at", { ascending: false });
        }
    }
}