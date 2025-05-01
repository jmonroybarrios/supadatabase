import { createClient } from "@supabase/supabase-js";


export const supabase= createClient(
    "https://tinhebpswopqcorimhgh.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRpbmhlYnBzd29wcWNvcmltaGdoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYwNjIxMDgsImV4cCI6MjA2MTYzODEwOH0.tFk4K9eheYn8mrFR_jXOQxpNgy_rBWH6HWdZrvxTFD8"
    )