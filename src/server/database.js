import { readFile } from 'node:fs/promises';
import { Pool } from 'pg';

export function createDatabasePool(connectionString) {
  if (!connectionString) {
    return null;
  }

  const isLocalDatabase =
    connectionString.includes('localhost') || connectionString.includes('127.0.0.1');

  return new Pool({
    connectionString,
    ssl: isLocalDatabase ? false : { rejectUnauthorized: false },
  });
}

export async function initializeDatabase(pool) {
  const schemaSql = await readFile(new URL('../../schema.sql', import.meta.url), 'utf8');
  await pool.query(schemaSql);
}
