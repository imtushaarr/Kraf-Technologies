import { createClient } from '@supabase/supabase-js';

// Replace with your Supabase credentials
const supabaseUrl = "https://cnekbyrvhzyqbcimwjhb.supabase.co"; 
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNuZWtieXJ2aHp5cWJjaW13amhiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE2MzQ3MzYsImV4cCI6MjA1NzIxMDczNn0.O8GQeEQ9-Zg1DKRSglhJfI2LrJss-o-QzzTQCPulrYg"; // Add your API Key

export const supabase = createClient(supabaseUrl, supabaseAnonKey);