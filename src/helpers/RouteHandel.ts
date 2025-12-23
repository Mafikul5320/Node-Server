import { IncomingMessage, ServerResponse } from "http";

type RouteHandeler = (req: IncomingMessage, res: ServerResponse) => void;
const routes: Map<string, Map<string, RouteHandeler>> = new Map()


function addRoutes(method: string, path: string, handler: RouteHandeler) {
    if (!routes.has(method)) routes.set(method, new Map());

    routes.get(method)!.set(path, handler)
};

export default addRoutes;