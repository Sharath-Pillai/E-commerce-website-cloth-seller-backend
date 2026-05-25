import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () => {
      console.log("DB Connected");
    });

    mongoose.connection.on("error", (err) => {
      console.log("DB Error:", err);
    });

    mongoose.connection.on("disconnected", () => {
      console.log("DB Disconnected");
    });

    await mongoose.connect(process.env.MONGO_CONNECTION_URL);
    console.log("Connected DB:", mongoose.connection.name);

  } catch (error) {
    console.log("Database Connection Failed:", error);
  }
};

export default connectDB;
