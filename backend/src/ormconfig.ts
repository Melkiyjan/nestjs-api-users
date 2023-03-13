import { DataSource } from "typeorm";
import * as dotenv from 'dotenv'

const env = dotenv.config({path: './../.env'}).parsed as any;

export default new DataSource({
    migrationsTableName: 'migrations',
    type: 'postgres',
    port: parseInt(env.DB_PORT),
    username: env.DB_USERNAME,
    password: env.DB_PASSWORD,
    database: env.DB_DATABASE,
    logging: false,
    entities: ['dist/**/**.entity.js'],
    migrations: ['dist/migrations/**/*.js'],
    subscribers: ['dist/subscriber/**/*.js'],
});
