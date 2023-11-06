const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL, {
      dbName: "SportyRollDB",
    });
  } catch (err) {
    console.log(err);
  }
};
module.exports = connectDB;
