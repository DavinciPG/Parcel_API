import express, { Express, Request, Response } from "express";

import parcelController from "./parcelmachines"

const app: Express = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3006');
    next();
});

app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
});

app.use('/', parcelController);

app.listen(3000,() => {
    console.log(`[server]: Server is running at http://localhost:3000`);
});