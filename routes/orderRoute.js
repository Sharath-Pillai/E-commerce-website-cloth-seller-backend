import express from "express";
import {
  placeOrderCOD,
  placeOrderStripe,
  placeOrderRazorpay,
  allAdminOrders,
  userOrders,
  updateOrderStatus,
  verifyStripe,
  verifyRazorpay,
} from "../controllers/orderController.js";
import adminAuth from "../middleware/adminAuth.js";
import authUser from "../middleware/authUser.js";
const OrderRouter = express.Router();

//payment features
OrderRouter.post("/COD", authUser, placeOrderCOD);
OrderRouter.post("/stripe", authUser, placeOrderStripe);
OrderRouter.post("/razorpay", authUser, placeOrderRazorpay);
//admin features
OrderRouter.post("/alladminorders", adminAuth, allAdminOrders);
OrderRouter.post("/updatestatus", adminAuth, updateOrderStatus);
//user features
OrderRouter.post("/userorders", authUser, userOrders);

//verify payment
OrderRouter.post("/verifyStripe", authUser, verifyStripe);
OrderRouter.post("/verifyRazorpay", authUser, verifyRazorpay);



export default OrderRouter;
