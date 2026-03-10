import express, {NextFunction, Response, Request} from "express";
import "express-async-errors";
import "reflect-metadata";
import "./database/index";

import {router} from "./routes";
const app = express();
app.use(express.json());

app.use(router);

app.use(
    (err: Error, request: Request, response: Response, next: NextFunction) => {
        if (err instanceof Error) {
            response.status(400).send(err.message)
        }else{
            response.status(500).send("Erro Interno");
        }
    })

console.log("Start at 3000"); 
app.listen(3000);