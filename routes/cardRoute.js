import express from "express";
import {
  addToCart,
  updateCart,
  getUserCart,
} from "../controllers/cardControllers.js";
import authUser from "../middleware/authUser.js";

const cartRouter = express.Router();

cartRouter.post("/add", authUser, addToCart);
cartRouter.post("/update", authUser, updateCart);
cartRouter.post("/getUser", authUser, getUserCart);

export default cartRouter;
