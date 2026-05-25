import express from "express";
import {
  loginUser,
  registerUser,
  adminLogin,
  getUserData,
  addToWishlist,
  removeFromWishlist,
} from "../controllers/userController.js";
import authUser from "../middleware/authUser.js";

const userRouter = express.Router();
userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.post("/admin", adminLogin);
userRouter.get("/data", authUser, getUserData);
userRouter.post("/wishlist/add", authUser, addToWishlist);
userRouter.post("/wishlist/remove", authUser, removeFromWishlist);

export default userRouter;
