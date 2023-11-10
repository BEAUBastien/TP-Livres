const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("API de gestion des livres");
});

app.listen(8080, () => {
  console.log("Server started");
});
