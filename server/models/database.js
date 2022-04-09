const mongoose = require("mongoose");
mongoose.connect(process.env.Mongodb_uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error with database"));
db.once("open", function () {
  console.log("connected");
});
require("./Recipe");
