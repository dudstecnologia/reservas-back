module.exports = {
    database: process.env.DATABASE,
    username: DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DRIVER,
}