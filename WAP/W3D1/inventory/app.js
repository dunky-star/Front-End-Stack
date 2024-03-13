const express = require("express");
const app = express();
const path = require("path");
const router = require("./router");

app.listen(3000, () => {
  console.log("Your Server is running on 3000");
});
//Read the parameters from post request
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/product", router);
