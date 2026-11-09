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

app.get("/", (req, res) => {});
