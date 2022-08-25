const express = require("express");

const app = express();

app.get("/", (req, res) => {
  headers = { "cache-control": "no-cache" };
  body = { status: "available" };
  res.status(200).json(body);
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, console.log(`Im inside now!${PORT}`));
