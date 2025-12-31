export default function handler(req, res) {
  const slug = req.query.slug;

  if (slug === "google") {
    res.writeHead(302, { Location: "https://google.com" });
    res.end();
    return;
  }

  res.status(404).send("Link not found");
}
