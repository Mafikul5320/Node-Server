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
    }
});


server.listen(config.port, () => {
    console.log(`server is runign on port ${config.port}`)
})