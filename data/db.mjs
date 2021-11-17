import Knex from 'knex';
import knexfile from '../knexfile.mjs';

const environment = process.env.NODE_ENV || 'development';
const config = knexfile[environment];
const connection = Knex(config);
export default connection;
