import dotenv from 'dotenv';

dotenv.config();

export default{
    port: process.env.PORT,
    mongoUrl: process.env.MONGO_URL,
    persistence: process.env.PERSISTENCE,
    environment: process.env.NODE_ENV,
}