import http, { IncomingMessage, Server, ServerResponse } from "http"
import config from "./config/config";
import { RouteHandeler, routes } from "./helpers/RouteHandel";
import "./router"

const server: Server = http.createServer((req: IncomingMessage, res: ServerResponse) => {
    console.log("Server is runing...");
    const method = req.method?.toUpperCase() || "";
    const path = req.url || "";
    const MethodMap = routes.get(method);
    const handler: RouteHandeler | undefined = MethodMap?.get(path);
    if (handler) {
        handler(req, res)
    } else {
        res.writeHead(404, { 'content-type': 'applacation/json' });
        res.end(JSON.stringify({
            sucess: false,
            message: "Route not found",
            path,
        }))
    }

    // if (req.url == "/" && req.method == "GET") {
    //     res.writeHead(200, { 'content-type': 'applacation/json' });
    //     res.end(JSON.stringify({
    //         message: "Hell node.js",
    //         path: req.url,
    //     }))
    // };


    // if (req.url == "/api" && req.method == "GET") {
    //     res.writeHead(200, { 'content-type': 'applacation/json' });
    //     res.end(JSON.stringify({
    //         message: "Your Api is Ready",
    //         path: req.url,
    //     }))
    // }

    // if (req.url == "/user" && req.method == "POST") {

    //     // const user = {
    //     //     id: 12,
    //     //     name: "abc"
    //     // }
    //     // res.writeHead(200, { 'content-type': 'applacation/json' })
    //     // res.end(JSON.stringify(user))

   
});




server.listen(config.port, () => {
    console.log(`server is runign on port ${config.port}`)
})