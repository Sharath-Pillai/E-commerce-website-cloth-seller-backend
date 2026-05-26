import mongoose from "mongoose";

let isConnected = false;

const connectDB = async () => {
  if (isConnected || mongoose.connection.readyState >= 1) {
    isConnected = true;
    return;
  }

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

    const db = await mongoose.connect(process.env.MONGO_CONNECTION_URL);
    isConnected = db.connections[0].readyState === 1;
    console.log("Connected DB:", mongoose.connection.name);

  } catch (error) {
    console.log("Database Connection Failed:", error);
  }
};

export default connectDB;
