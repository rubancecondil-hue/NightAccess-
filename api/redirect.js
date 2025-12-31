import fs from "fs";
import path from "path";

export default function handler(req, res) {
  try {
    const slug = req.query.slug;

    const filePath = path.join(process.cwd(), "data", "links.json");
    const links = JSON.parse(fs.readFileSync(filePath, "utf8"));

    if (!links[slug]) {
      res.status(404).send("Link not found");
      return;
    }

    res.writeHead(302, { Location: links[slug] });
    res.end();
  } catch (error) {
    res.status(500).send("Server error");
  }
}
