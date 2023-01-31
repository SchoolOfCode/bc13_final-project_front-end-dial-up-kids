import { createClient } from '@supabase/supabase-js'

let supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ||"env bug"
let supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||"env bug"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase