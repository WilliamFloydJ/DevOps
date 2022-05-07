const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();
app.use(cors());

// include and initialize the rollbar library with your access token
var Rollbar = require("rollbar");
const req = require("express/lib/request");
const res = require("express/lib/response");
const { create } = require("domain");
var rollbar = new Rollbar({
  accessToken: "a65031504a4d4c429fd52e782dabf5e9",
  captureUncaught: true,
  captureUnhandledRejections: true,
});

// record a generic message and send it to Rollbar
rollbar.log("Hello world!");

app.get("/create", (req, res) => {
  try {
    create();
  } catch (error) {
    console.error(error);
  }
});

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../Public/index.html"));
});

const port = process.env.PORT || 4005;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
