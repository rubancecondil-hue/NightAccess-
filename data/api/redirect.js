export default function handler(req, res) {
  const slug = req.query.slug;

  if (slug === "google") {
    return res.redirect("https://google.com");
  }

  res.status(404).send("Link not found");
}
