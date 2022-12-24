const path = require("path");
const express = require("express");
const https = require("https");
const { MongoClient, ServerApiVersion } = require("mongodb");
const app = express();
app.listen(process.env.PORT || 3000);

app.use(express.json());

app.get("/", function (req: any, res: any) {
  app.use(express.static(__dirname + "/app/dist/crypto-tracking-app"));
  res.sendFile(
    path.join(__dirname + "/app/dist/crypto-tracking-app/index.html")
  );
});
