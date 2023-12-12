import express, { Express, Request, Response } from "express"
import * as path from "path"

const app: Express = express()

app.use(express.static(path.join(__dirname, "/rocket-monitor/build")))

app.get("/", (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, "/rocket-monitor/build/index.html"));
})

app.listen(3000,  () => {
    console.log("listening on 3000")
});
