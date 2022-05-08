const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
// include and initialize the rollbar library with your access token
var Rollbar = require("rollbar");
var rollbar = new Rollbar({
  accessToken: "a65031504a4d4c429fd52e782dabf5e9",
  captureUncaught: true,
  captureUnhandledRejections: true,
});

// record a generic message and send it to Rollbar
rollbar.log("Hello world!");

let users = [];

app.post("/api/create", (req, res) => {
  const { name } = req.body;
  if (name.charAt(0) === name.charAt(0).toUpperCase()) {
    users.push(name);
    rollbar.log("User Added Successfully", { User: name });
    res.status(200).send(users);
  } else {
    rollbar.error(
      "User Tried adding a User without the first Character being Uppercase"
    );
    res.status(400).send(users);
  }
});

app.get("/css", (req, res) => {
  res.sendFile(path.join(__dirname, "../Public/main.css"));
});

app.use("/js", express.static(path.join(__dirname, "../Public/main.js")));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../Public/index.html"));
});

const port = process.env.PORT || 4005;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
