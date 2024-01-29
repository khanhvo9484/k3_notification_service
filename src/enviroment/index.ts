import * as dotenv from 'dotenv';
export const ENVIROMENT = process.env.NODE_ENV || 'development';
// Get enviroment path
export const enviromentPath = `.env.${ENVIROMENT}`;
dotenv.config({
  path: enviromentPath,
});

export const PORT = process.env.PORT || 3001;
export const DATABASE_URL = process.env.DATABASE_URL;
// Redis
