import Parsebody from "../helpers/parseBody";
import addRoutes from "../helpers/RouteHandel";
import sendJson from "../helpers/sendJson";

addRoutes("GET", "/", (req, res) => {
    sendJson(res, 200, {
        message: "hellow Node js server..",
        path: req.url,
    })
})

addRoutes("POST", "/api", async (req, res) => {
    const body = await Parsebody(req);
    sendJson(res, 200, {body})
})