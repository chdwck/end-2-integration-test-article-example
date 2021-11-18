export default {
  test: {
    client: 'pg',
    connection: {
      connectionString: 'postgresql://example_app_db_test_user:jamesbond@localhost:54320/example_app_test_db',
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
      connectionString: 'postgresql://example_app_db_user:jamesbond@localhost:54320/example_app_db',
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
