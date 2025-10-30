export const runtime = 'edge';

import { NextApiRequest, NextApiResponse } from "next";
import path from "path";
import fs from "fs";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const { slug } = req.query;

    if (!slug || !Array.isArray(slug)) {
        return res.status(404).send("Not Found");
    }

    const filePath = path.join(process.cwd(), "public", ".well-known", ...slug);

    fs.readFile(filePath, "utf8", (err, data) => {
        if (err) {
            return res.status(404).send("Not Found");
        }
        res.setHeader("Content-Type", "application/json");
        res.status(200).send(data);
    });
}
