const mongoose = require("mongoose");
require("dotenv").config();
const connectionString = process.eventNames.MONGO_URI;
mongoose.set("strictQuery", false);

//connection to mongoose
mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//console.log the connection status
mongoose.connection.on("connected", () => {
  console.log("mongose connected to ", connectionString);
});

mongoose.connection.on("disconnected", () => {
  console.log("mongose disconnected from ", connectionString);
});

mongoose.connection.on("error", (error) => {
  console.log("mongose error ", error);
});

//access db models
module.exports.Book = require("./book");
module.exports.User = require("./user");
