import http, { IncomingMessage, Server, ServerResponse } from "http"
import config from "./config/config";


const server: Server = http.createServer((req: IncomingMessage, res: ServerResponse) => {
    console.log("Server is runing...");

    if (req.url == "/" && req.method == "GET") {
        res.writeHead(200, { 'content-type': 'applacation/json' });
        res.end(JSON.stringify({
            message: "Hell node.js",
            path: req.url,
        }))
    };

    if (req.url == "/api" && req.method == "GET") {
        res.writeHead(200, { 'content-type': 'applacation/json' });
        res.end(JSON.stringify({
            message: "Your Api is Ready",
            path: req.url,
        }))
    }

    if (req.url == "/user" && req.method == "POST") {

        // const user = {
        //     id: 12,
        //     name: "abc"
        // }
        // res.writeHead(200, { 'content-type': 'applacation/json' })
        // res.end(JSON.stringify(user))

        let body = ''


        req.on("data", (chunk) => {
            body += chunk.toString()
        });
        req.on("end", () => {
            const parseBody = JSON.parse(body)
            console.log(parseBody)
        });

        res.end(JSON.stringify({
            message: "Data send..."
        }))

    }
});




server.listen(config.port, () => {
    console.log(`server is runign on port ${config.port}`)
})