
import { createClient } from '@supabase/supabase-js'
export const supabaseUrl = "https://zwdizoizrbsxuvirigka.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp3ZGl6b2l6cmJzeHV2aXJpZ2thIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU4OTkzMDgsImV4cCI6MjAyMTQ3NTMwOH0.wjQwpQuefnDuk23r7m3214mWw7tCnlOzsEBlvB8FQJo"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;