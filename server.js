const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
app.use(cors());

app.get("/", (req, res) => {
  headers = { "cache-control": "no-cache" };
  body = { status: "available" };
  res.status(200).json(body);
});

app.use(express.static(path.join(__dirname, "frontend")));

const PORT = process.env.PORT || 3001;

app.listen(PORT, console.log(`Im inside now!${PORT}`));
