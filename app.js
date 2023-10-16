const express = require("express");
const path = require("path");
const PORT = 3030;
const app = express();

app.get("/", (req, res) => res.sendFile(path.join(__dirname, "views", "home.html")))

app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, console.log("Server running in http://localhost:" + PORT))
