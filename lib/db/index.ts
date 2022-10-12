import { DB } from '@/lib/db/types';
import { Kysely } from 'kysely';
import { PlanetScaleDialect } from 'kysely-planetscale';

// "Poison" this util so it (and any other code that imports it) can never be
// accidently exposed to the client
import 'server-only';

export const db = new Kysely<DB>({
  dialect: new PlanetScaleDialect({
    host: process.env.DATABASE_HOST,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
  }),
});
