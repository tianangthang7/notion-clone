import type { Config } from "drizzle-kit";
import * as dotenv from 'dotenv'

dotenv.config({ path: '.env' })
if (!process.env.DATABASE_URL) {
    console.log(
        'Cannot find database url'
    )
}

export default {
    schema: './src/lib/supabase/schema.ts',
    out: './migrations',
    dbCredentials: {
        url: process.env.DATABASE_URL || '',
        database: "postgres",
        port: 5432,
        host: "aws-0-us-east-1.pooler.supabase.com",
        user: "postgres.wmqpzzijxzmqhdbldxez",
        password: "98R7ZIzOyAYZpsEp"
    },
    dialect: 'postgresql',
} as Config;