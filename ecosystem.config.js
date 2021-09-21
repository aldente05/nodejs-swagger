const {Op} = require('sequelize');

module.exports = {
    apps: [{
        name: 'SWAGGER Service',
        script: 'swagger.js',
        instances: 1,
        exec_mode: "fork",
        watch: true,
        error_file: "./logs/err.log",
        out_file: "./logs/out.log",
        merge_logs: true,
        log_date_format: "YYYY-MM-DD HH:mm Z",
        ignore_watch: [".idea", "node_modules", ".git", "uploads", "logs", "data", "export", "scratch", "swagger_output.json"],
        env_development: {
            LISTEN_PORT: 3200,
            NODE_ENV: 'development',
            STORAGE: './uploads',
            CONFIG_DB: JSON.stringify({
                username: 'root',
                password: 'root',
                database: 'local_db',
                host: '127.0.0.1',
                port: '5432',
                dialect: 'postgres',
                pool: {
                    max: 1,
                    min: 0,
                    acquire: 30000,
                    idle: 1000
                },
                logging: false,
                operatorsAliases: {
                    $and: Op.and,
                    $or: Op.or,
                    $eq: Op.eq,
                    $gt: Op.gt,
                    $lt: Op.lt,
                    $lte: Op.lte,
                    $like: Op.like
                }
            })
        },
        env_staging: {
            LISTEN_PORT: 3300,
            NODE_ENV: 'staging',
            STORAGE: './uploads',
            CONFIG_DB: JSON.stringify({
                username: 'root',
                password: 'root',
                database: 'local_db',
                host: '127.0.0.1',
                port: '5432',
                dialect: 'postgres',
                pool: {
                    max: 1,
                    min: 0,
                    acquire: 30000,
                    idle: 1000
                },
                logging: false,
                operatorsAliases: {
                    $and: Op.and,
                    $or: Op.or,
                    $eq: Op.eq,
                    $gt: Op.gt,
                    $lt: Op.lt,
                    $lte: Op.lte,
                    $like: Op.like
                }
            })
        },
        env_production: {
            LISTEN_PORT: 3300,
            NODE_ENV: 'production',
            STORAGE: './uploads',
            CONFIG_DB: JSON.stringify({
                username: 'root',
                password: 'root',
                database: 'local_db',
                host: '127.0.0.1',
                port: '5432',
                dialect: 'postgres',
                pool: {
                    max: 1,
                    min: 0,
                    acquire: 30000,
                    idle: 1000
                },
                logging: false,
                operatorsAliases: {
                    $and: Op.and,
                    $or: Op.or,
                    $eq: Op.eq,
                    $gt: Op.gt,
                    $lt: Op.lt,
                    $lte: Op.lte,
                    $like: Op.like
                }
            })
        }
    }]
};
