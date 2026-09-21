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
  console.log(`Klienten är i /about.`);
  res.send(
    `Du surfade till /about. Här borde du kunna läsa mer om oss. Vi löser det sen.`,
  );
});
app.get(`/contact`, (req, res) => {
  console.log(`Klienten är i /contact.`);
  res.send(
    `Du surfade till /contact. Här borde du kunna läsa om hur du hittar till oss. Vi löser det sen.`,
  );
});
app.get(`/sexy-students`, (req, res) => {
  res.redirect(`/`);
});
app.get(`/sexy-teachers`, (req, res) => {
  res.status(403).send(`In your dreams`);
});
app.get(`/name/:username`, (req, res) => {
  const username = req.params.username;
  res.send(`You be Rizzlord ${username}`);
});
app.get(`/monster/add/list`, (req, res) => {
  const monsters = ["Hercules", "Terra", "Muskul"];

  const sortOrder = req.query.sort;

  let sortedMonsters = [...monsters];

  if (sortOrder === "asc") {
    sortedMonsters.sort();
  } else if (sortOrder === "desc") {
    sortedMonsters.sort().reverse();
  }

  res.send(sortedMonsters.join(", "));
});
app.get(`/monster/add/:num`, (req, res) => {
  const num = req.params.num;
  res.send(`${num} monster har lagts till`);
});
