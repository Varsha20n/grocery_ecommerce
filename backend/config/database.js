const mongoose = require("mongoose");

const connectDatabase = () => {
  console.log("Attempting to connect to MongoDB...");
  console.log("DB_URI:", process.env.DB_URI);
  mongoose
    .connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    .then((data) => {
      console.log(`Mongodb connected with server: ${data.connection.host}`);
    })
    .catch((err) => {
      console.log("MongoDB Connection Error:", err.message);
    });
};

module.exports = connectDatabase;
