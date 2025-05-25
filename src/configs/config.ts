import dotenv from 'dotenv';
dotenv.config();

const { MONGODB_URI, SECRET_KEY, ENCRYPTION_IV, PORT } = process.env;

if (!MONGODB_URI || !SECRET_KEY || !ENCRYPTION_IV) {
  throw new Error('Missing required environment variables');
}

export default {
  MONGODB_URI,
  SECRET_KEY,
  ENCRYPTION_IV,
  PORT: PORT || 5000,
};
