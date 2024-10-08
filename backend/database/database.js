import { Sequelize } from 'sequelize';

const database = "app_mascotas";
const username = "postgres";
const password = "123456";
const host = "localhost";
const port = "5432";

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