import { createClient } from "@supabase/supabase-js";
const SUPABASE_KEY = process.env.BIKE_TEST_SUPABASE_URL;
const SUPABASE_URL = process.env.BIKE_TEST_SUPABASE_ANON_KEY;
let SUPABASE_CLIENT = null;
try {
  SUPABASE_CLIENT = createClient(SUPABASE_URL, SUPABASE_KEY);
} catch (e) {
  alert(e.message + " See config.js");
}
export default SUPABASE_CLIENT;