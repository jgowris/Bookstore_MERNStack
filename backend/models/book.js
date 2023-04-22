const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  published: { type: String },
  isbn: { type: String, required: true },
  abstract: { type: String },
  language: { type: String },
  classification: {
    type: String,
    enum: ["fiction", "non-fiction"]
  },
  sub_classification: { type: String, enum: ["adult", "kids", "teens"] },
  status: {
    type: String,
    enum: ["available", "in_circulation", "unknown"],
    default: "available",
  },
  copies: { type: String },
  image: { type: String, default: "/images/no_img.png" },
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
