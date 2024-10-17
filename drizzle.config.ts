import { defineConfig } from "drizzle-kit";
import { loadEnvConfig } from "@next/env";

// Load environment variables
//const dev = process.env.NODE_ENV !== "production";
//loadEnvConfig("./", dev);

export default defineConfig({
  schema: "lib/db/schema.ts",
  out: "lib/db/drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: 'postgres://default:L3gfFzdU4KyB@ep-wandering-surf-99229463.eu-central-1.aws.neon.tech:5432/verceldb?sslmode=require',
  },
  verbose: true,
  strict: true,
});
