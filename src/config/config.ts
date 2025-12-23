import dotenv from "dotenv";
dotenv.config()


const config = {
    env: process.env.NODE_ENV ? Number(process.env.NODE_ENV) : 5000,
    port: process.env.PORT
};

export default config;
