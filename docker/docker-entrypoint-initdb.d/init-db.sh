#!/bin/bash
set -e

echo "create example_app_db_user and example_app_db"
psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
    CREATE ROLE example_app_db_user WITH
      LOGIN
      CREATEDB
      CREATEROLE
      INHERIT
      NOREPLICATION
      PASSWORD 'jamesbond'
      CONNECTION LIMIT -1;
    CREATE DATABASE example_app_db;
    GRANT ALL PRIVILEGES ON DATABASE example_app_db TO example_app_db_user;
EOSQL

echo "create example_app_db_test_user user and example_app_test_db"
psql -v ON_ERROR_STOP=1 <<-EOSQL
    CREATE ROLE example_app_db_test_user WITH
      LOGIN
      CREATEDB
      CREATEROLE
      INHERIT
      NOREPLICATION
      PASSWORD 'jamesbond'
      CONNECTION LIMIT -1;
    CREATE DATABASE example_app_test_db;
    GRANT ALL PRIVILEGES ON DATABASE example_app_test_db TO example_app_db_test_user;
EOSQL
