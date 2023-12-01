import { Sequelize} from "sequelize";
import  connectionStrings  from '../config/config.js';

// const db = new Sequelize('database_app', 'root', '',{
//     host: 'localhost',
//     dialect: 'mysql'
// });
console.log(connectionStrings)
const db = new Sequelize(connectionStrings.mysql.database,
    connectionStrings.mysql.user,
    connectionStrings.mysql.pass, {
    host: connectionStrings.mysql.url,
    dialect: 'mysql'/* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
});

// db.authenticate()
// .then(() => {
//     console.log('Conexión a la base de datos establecida correctamente');
// })
// .catch((error) => {
//     console.error('Error al conectar a la base de datos:', error);
// });

export default db;