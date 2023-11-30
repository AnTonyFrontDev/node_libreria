import { Sequelize} from "sequelize";

// const db = new Sequelize('database_app', 'root', '',{
//     host: 'localhost',
//     dialect: 'mysql'
// });

const db = new Sequelize('dblibreria', 'root', 'mysql08102004', {
    host: 'localhost',
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