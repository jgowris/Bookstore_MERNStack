const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
require("dotenv").config();
const db = require("./models");

const userCtrl = require("./controllers/users");
const bookCtrl = require("./controllers/books");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  express.static(path.join(path.dirname(__dirname), "frontend", "build"))
);

app.use("/book", bookctrl);
app.use("/user", userCtrl);
app.get("*", (req, res) => {
  res.sendFile(
    path.join(path.dirname(--dirname), "frontend", "builder", "index.html")
  );
});

app.listen(process.eventNames.PORT, () => {
  console.log("App is running om localhost: ${process.env.PORT");
});
