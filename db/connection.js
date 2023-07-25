import mongoose from "mongoose";

const databaseUrl = "mongodb://127.0.0.1:27017/brooklyn-nets";

mongoose.set("returnOriginal", false);

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(databaseUrl);
    console.log("Connected to MongoDB!");
  } catch (err) {
    console.log(`Error connecting to MongoDB: ${err.message}`);
  }
};

connectToMongoDB();

mongoose.connection.on("disconnected", () => {
  console.log("Disconnected from MongoDB!");
});

mongoose.connection.on("error", (err) => {
  console.log(`MongoDB connection error: ${err}`);
});

export default mongoose.connection;
