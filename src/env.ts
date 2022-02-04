import dotenv from 'dotenv';

dotenv.config()

interface Env {
  db: {
    name: string;
    port: number;
    host: string;
    username: string;
    password: string;
  }
}

const env: Env = {
  db: {
    name: process.env.DATABASE_NAME.toString(),
    port: Number(process.env.DATABASE_PORT.toString()),
    host: process.env.DATABASE_HOST.toString(),
    username: process.env.DATABASE_USERNAME.toString(),
    password: process.env.DATABASE_PASSWORD.toString(),
  }
}

export default env;
