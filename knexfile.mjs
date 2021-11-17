import dotenv from 'dotenv'

dotenv.config();

export default {
  test: {
    client: 'pg',
    connection: {
      connectionString: process.env.TEST_DATABASE_URL
        || 'postgresql://example_app_db_test_user:jamesbond@localhost:54320/example_app_test_db',
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
      connectionString: process.env.DATABASE_URL
        || 'postgresql://example_app_db_user:jamesbond@localhost:54320/example_app_db',
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
