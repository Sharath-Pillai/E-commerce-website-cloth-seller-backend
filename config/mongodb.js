import mongoose from "mongoose";

const connectDB = async () => {
 
  mongoose.connection.on("connected", () => {
    console.log("db connected");
  });
  mongoose.connection.on("error", (err) => {
    console.log("db connection error:", err);
  });
  mongoose.connection.on("disconnected", () => {
    console.log("db disconnected");
  });

  try {
    await mongoose.connect(
      `${process.env.MONGO_CONNECTION_URL}/E-commereceBROTOTYPE`,
    );
  } catch (error) {
    console.error("Database connection failed", error);
  }
};

export default connectDB;
