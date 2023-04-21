const db = require("../models");
const express = require("express");
const router = express.Router();
const jwt = require("jwt-simple");
const config = require("../config/config");

//index route
router.get("/", async (req, res) => {
  const allBooks = await db.Book.find({});
  res.json(allBooks);
});

//create route
router.post("/", async (req, res) => {
  const createBook = await db.Book.create(req.body);
  res.json(createBook);
});

//show route
router.get("/:id", async (req, res) => {
  const book = await db.Book.findById(req.params.id);
  res.json(book);
});

//delete route
router.delete("/:id", async (req, res) => {
  await db.Book.findByIdAndDelete(req.params.id);
  res.json({ status: 200 });
});

//Edit Route
router.get("/:id", async (req, res) => {
  const book = await db.Book.findById(req.params.id);
  console.log(book._id);
  res.json(book);
});

//Update Route
router.put("/:id", async (req, res) => {
  const updatedBook = await db.Book.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(updatedBook);
});

// create Review Route
router.put("/:id/review", async (req, res) => {
  const book_review = await db.crystal.findByIdAndUpdate(
    req.params.id,
    { $push: { review: req.body } },
    { new: true }
  );
  res.json(book_review);
});

module.exports = router;
