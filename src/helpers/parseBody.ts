import { promises } from "dns";
import { IncomingMessage } from "http";

async function Parsebody(req: IncomingMessage): Promise<any> {
    return new Promise((resolve, reject) => {
        let body = '';
        req.on("data", (chunk) => {
            body += chunk.toString()
        });
        req.on("end", () => {

            try {
                resolve(body ? JSON.stringify(body) : {})
            } catch (err: any) {
                reject(err)
            }


        });

        req.on("error", reject)

    })
}

export default Parsebody;