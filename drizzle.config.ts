// import 'dotenv/config';

import { defineConfig } from 'drizzle-kit';
import * as dotenv from 'dotenv'

dotenv.config({
    path: '.env.local'
})

export default defineConfig({
    schema: './app/db/schema.ts',
    out: './migrations',
    dialect: 'sqlite',
    driver: 'turso',
    dbCredentials: {
        url: process.env.DATABASE_URL!,
        authToken: process.env.DATABASE_TOKEN!,
    },
});