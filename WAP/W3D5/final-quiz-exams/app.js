const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();

//Custome imports
const homeRoute = require("./routes/route");

// Middleware to parse cookies and request body
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Templating engine
app.set("view engine", "ejs");
app.set("views", "views");

// Custom route
app.use(homeRoute);

app.use((req, res, next) => {
  res.status(404).render("404", { pageTitle: "Not found page" });
});
app.use((err, req, res, next) => {
  console.log(err.toString());
  res.status(505).send("<h1>Oops! An error occurred</h1>");
});
app.listen(3000, () => console.log("Server started and running on port 3000"));
