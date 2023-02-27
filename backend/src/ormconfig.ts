import { DataSource } from "typeorm";

export const connectionSource = new DataSource({
    migrationsTableName: 'migrations',
    type: process.env.DB_CONNECTION,
    port: process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    logging: false,
    name: 'default',
    entities: ['src/**/**.entity{.ts,.js}'],
    migrations: ['src/migrations/**/*{.ts,.js}'],
    subscribers: ['src/subscriber/**/*{.ts,.js}'],
});

await connectionSource.initialize();

