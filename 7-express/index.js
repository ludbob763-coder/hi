const express = require("express");
const port = 3000;

const app = express();

app.listen(port, () => {
  console.log("Servern startad. Port: " + port);
});

app.get("/", (req, res) => {
  console.log("Någon surfade till /");
  res.send(`
    <h1>Hej</h1>
    <p>Superkul<p>
    ooo`);
});
