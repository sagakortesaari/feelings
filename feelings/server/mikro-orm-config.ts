import { Options } from "@mikro-orm/core";
import { Feelings } from "./entities/Feelings";

const config: Options = {
    entities: [Feelings],
    dbName: process.env.DB_NAME,
    type: "mysql",
    host: process.env.DB_HOST,
    port: Number.parseInt(process.env.DB_PORT!),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    debug: true,
};

export default config;
