const express = require("express");

const router = express.Router();

let array = [
  { depDate: "2024-03-15", dest: "Fairfield", seats: 3 },

  { depDate: "2024-03-16", dest: "Chicago", seats: 2 },
];

router.get("/", (req, res, next) => {
  let flight = req.cookies.flight || {};

  // Render the page with Flight information and cart data
  res.render("home", {
    products: array,
    flight,
    path: "/",
    pageTitle: " Home page",
  });
});

router.post("/searchFlight", (req, res, next) => {
  const departureDate = req.body.departureDate;
  const destination = req.body.destination;
  console.log(`departure date: ${departureDate}`);
  let flight = req.cookies.flight || {};

  for (let arr of array) {
    if (arr.depDate === departureDate) {
      console.log(`Departure date from array ${arr.depDate}`);
      // Store flight in cookie
      flight[departureDate] = departureDate;
      flight[destination] = destination;
      res.cookie("flight", flight);
      res.redirect("/bookFight");
    } else {
      res.send("<h1>No result found</h1>");
    }
  } // End of 'For' Loop
});

router.get("/bookFlight", (req, res, next) => {
  let flight = req.cookies.flight || {};
  res.render("bookflight", {
    arr: array,
    flight,
    path: "/bookFlight",
    pageTitle: " Book Flight",
  });
});

router.post("/bookFlight", (req, res, next) => {
  console.log(req.flight);
  res.send("Success");
});

module.exports = router;
