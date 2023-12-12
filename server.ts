import * as express from "express";
import * as path from "path";

const app = express()

app.use(express.static(path.join(__dirname, "/rocket-monitor/build")))

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, "/rocket-monitor/build/index.html"));
})

app.listen(3000, function () {
    console.log("listening on 3000")
});
