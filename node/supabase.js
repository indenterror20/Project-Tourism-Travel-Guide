import {createClient}from '@supabase/supabase-js'
import 'dotenv.config'

const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_ANON_KEY
)

//Database test (if database is connected)
const {data, error} = await supabase.from('users').select('*').limit(1);

if(error){
    console.log('database is not working');
} else{
    console.log('database connected');
}

export default supabase