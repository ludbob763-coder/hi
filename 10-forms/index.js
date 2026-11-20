const express = require("express");
const morgan = require("morgan");
const app = express();
const port = 3000;

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("publ|ic"));

app.set("view engine", "pug");
app.set("views", "views");

app.get("/", (req, res) => {
  res.send("Formulär!");
});

app.get("/form/", (req, res) => {
  res.render("form");
});

app.post("/form/", (req, res) => {
  res.send(`<h1>Tack!</h1>
    <p>Formuläret har mottagits!</p>
    <a href="/form/">Fyll i formuläret igen</a>
    `);
});

app.get("/register/", (req, res) => {
  res.render("registerform");
});

app.post("/register/", (req, res) => {
  res.send(`Formuläret skickat, ` + `<a href="/register/">Klicka här för att fylla i formuläret igen.</a>`);
});

app.listen(port, () => {
  console.log("Vaken på port " + port);
});
