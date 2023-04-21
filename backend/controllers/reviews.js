const db = require("../models");
const express = require("express");
const router = express.Router();
const jwt = require("jwt-simple");
const config = require("../config/config");

//Index route (all reviews for a specificed book)
router.get("/book/:id", (req, res) => {
  db.Book.findById(
    req.params.id,
    { name: true, reviews: true, _id: false },
    (err, book) => {
      res.json(book);
    }
  );
});

//Delete route (delete review for a specific book)
router.delete("/:id", (req, res) => {
  db.Book.findOneAndUpdate(
    { "reviews._id": req.params.id },
    { $pull: { reviews: { _id: req.params.id } } },
    { new: true },
    (err, book) => {
      res.json(book);
    }
  );
});

module.exports = router;
