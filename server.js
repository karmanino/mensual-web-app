var path = require("path");
var express = require("express");
var https = require("https");
var _a = require("mongodb"), MongoClient = _a.MongoClient, ServerApiVersion = _a.ServerApiVersion;
var app = express();
app.listen(process.env.PORT || 3000);
app.use(express.json());
app.get("/", function (req, res) {
    app.use(express.static(__dirname + "/app/dist/crypto-tracking-app"));
    res.sendFile(path.join(__dirname + "/app/dist/crypto-tracking-app/index.html"));
});
