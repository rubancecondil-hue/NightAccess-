export default function handler(req, res) {
  const slug = req.query.slug;

  const links = {
    google: "https://google.com",
    yt: "https://youtube.com",
    insta: "https://instagram.com"
  };

  if (!links[slug]) {
    res.status(404).send("Link not found");
    return;
  }

  res.writeHead(302, { Location: links[slug] });
  res.end();
}
