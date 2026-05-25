import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import connectCoudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";
import cartRouter from "./routes/cartRoute.js";
import OrderRouter from "./routes/orderRoute.js";
import chatbotRouter from "./routes/chatbotRoute.js";

//App config
const app = express();
const port = process.env.PORT || 5000;
connectDB();
connectCoudinary();

//middlewares
app.use(express.json());
app.use(
  cors({
    origin: [
      "https://e-commerceclothselleradmin.vercel.app",
      "https://e-commerce-website-cloth-sellerfron.vercel.app",
      "http://localhost:5173",
      "http://localhost:5174",
    ],
    credentials: true,
  }),
);

//API endpoints
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", OrderRouter);
app.use("/api/chatbot", chatbotRouter);

app.get("/", (req, res) => {
  res.send("Api check ok");
});
// app.get("/about", (req, res) => {
//   res.send("About Page");
// });

app.listen(port, () => {
  console.log(`connected to port: ${port}`);
});
