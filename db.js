import { createClient } from "@supabase/supabase-js";
import { config } from "dotenv";
config()

const supabase = createClient(process.env.DB_URL,process.env.BD_PUBLIC_key)
export default supabase

