const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
mongoose.connect(process.env.Mongodb_uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.createConnection();
db.on("error", console.error.bind(console, "connection error with database"));
db.once("open", function () {
  console.log("connected");
});
require("./Recipe");

