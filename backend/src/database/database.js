import { Sequelize } from 'sequelize';
import 'dotenv/config'

const database = process.env.DB_DATABASE;
const username = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const host = process.env.DB_HOST;
const port = process.env.DB_PORT;

const sequelize = new Sequelize(database, username, password, {
  host: host,
  dialect: 'postgres',
  port: port,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  
});
export default sequelize