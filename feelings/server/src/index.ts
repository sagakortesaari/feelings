import { MikroORM } from "mikro-orm";
//import express from "express";
import config from "./mikro-orm-config";
import { Feelings } from "./entities/Feelings";

async function main() {
    console.log("hiii :)");
    const orm = await MikroORM.init(config);

    //const app = express();

    /*
    app.use((req, res, next) => {
        RequestContext.create(orm.em, next);
    }); */

    const feelings = await orm.em.find(Feelings, {});
    console.log(feelings);
}

main();
