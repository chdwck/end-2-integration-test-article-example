import dotenv from 'dotenv'

dotenv.config();

export default {
  test: {
    client: 'pg',
    connection: {
      connectionString: process.env.TEST_DATABASE_URL,
      ssl: false
    },
    migrations: {
      tableName: 'knex_migrations',
      extension: 'mjs',
      loadExtensions: ['.mjs'],
      directory: './migrations'
    }
  },
  development: {
    client: 'pg',
    connection: {
      connectionString: process.env.DATABASE_URL,
      ssl: false
    },
    migrations: {
      tableName: 'knex_migrations',
      extension: 'mjs',
      loadExtensions: ['.mjs'],
      directory: './migrations'
    }
  },
};
