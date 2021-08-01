import { MikroORM, RequestContext } from "mikro-orm";
import express from "express";
import config from "./mikro-orm.config";
import { Feelings } from "./entities/Feelings";

async function main() {
    const orm = await MikroORM.init(config);

    const app = express();
    app.use(express.json());

    app.use((req, res, next) => {
        if (req.headers.authorization == process.env.API_PASS) {
            RequestContext.create(orm.em, next);
        } else {
            res.send("invalid");
        }
    });

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

    app.listen(3000, () => {
        console.log(`Example app listening at http://localhost:3000`);
    });
}

main();
