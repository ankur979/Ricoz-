const mongoose = require("mongoose");

const configs = async () => {
  try {
    const mongoAtlasUrl = process.env.NODE_ENV_MONGODB_URL;

    await mongoose.connect(
      mongoAtlasUrl,
      { useNewUrlParser: true, useUnifiedTopology: true }
    );

    console.log("Mongoose is connected");

    const dbConnection = mongoose.connection;
    dbConnection.on("error", (err) => console.log(`Connection error ${err}`));
    dbConnection.once("open", () => console.log("Connected to DB!"));
  } catch (e) {
    console.log("Could not connect to MongoDB:", e.message);
  }
};

module.exports = configs;
