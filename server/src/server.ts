import { MikroORM } from "mikro-orm";
import express from "express";
import config from "./mikro-orm.config";
import { Feelings } from "./entities/Feelings";
import cors from "cors";

async function main() {
    const orm = await MikroORM.init(config);

    const app = express();
    app.use(express.json());
    app.use(
        cors({
            origin: [
                "http://localhost:3000",
                "https://howareyoufeeling.sagak.se",
            ],
        })
    );

    app.post("/feeling", async (req, res) => {
        orm.em.persistAndFlush(
            orm.em.create(Feelings, {
                feeling: req.body.feeling,
            })
        );

        res.send("inserted feeling");
    });

    app.get("/getFeelings", async (_, res) => {
        res.send(await orm.em.find(Feelings, {}));
    });

    app.listen(8080, () => {
        console.log(`Example app listening at http://localhost:8080`);
    });
}

main();
