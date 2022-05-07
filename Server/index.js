const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../Public/index.html"));
});

const port = process.env.PORT || 4005;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
