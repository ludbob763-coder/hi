const express = require("express");
const port = 3000;
const app = express();

app.listen(port, () => {
  console.log(`Servern startad. Port: ` + port);
});

app.get(`/`, (req, res) => {
  console.log(`En klient är online`);
  res.send(`Välkommen till kapitel 8!`);
});

app.get(`/about`, (req, res) => {
  console.log(`En klient är online`);
  res.send(`Välkommen till kapitel 8!`);
});
