const express = require("express");
const port = 3000;
const app = express();

app.set("view engine", "pug");
app.set("views", "views");

app.use(express.static("public"));

app.get("/", (req, res) => {
  const data = {
    title: "Pug It",
    name: "Johannes",
    message:
      "Det här är en dynamisk sida renderad med Pug! #hej Aron är gö bra o jag älskar honom HAHA :) :D",
  };
  res.render("home", data);
});

app.get("/lists", (req, res) => {
  res.render("lists");
});

app.get("/pug-resort", (req, res) => {
  res.render("pug-resort");
});

app.get("/creative", (req, res) => {
  res.render("creative");
});

app.listen(port, () => {
  console.log(`Servern startad. Port: ` + port);
});
