var mongoose = require("mongoose");

function connectDB() {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("DB Connected");
    })
    .catch((e) => {
      console.log("Something went WRONG", e);
    });
}
module.exports = connectDB;
