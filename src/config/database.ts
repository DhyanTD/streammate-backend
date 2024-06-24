import { DataSource } from 'typeorm';
import { User } from '../app/user/user.entity';
import dotenv from 'dotenv';
import 'dotenv/config';

dotenv.config();

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT) || 5432,
    username: process.env.DB_USERNAME || 'postgres',
    password: process.env.DB_PASSWORD || 'mysecretpassword',
    database: process.env.DB_NAME || 'streammate',
    synchronize: true, 
    logging: false,
    entities: [User],
    migrations: [],
    subscribers: [],
});
