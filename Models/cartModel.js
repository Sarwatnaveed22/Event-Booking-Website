// models/cartModel.js
import mongoose from "mongoose";

const cartSchema = new mongoose.Schema(
  {
    eventName: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    totalPrice: {
      type: Number,
      required: true,
    },
    // location: { type: String, required: true },
    // description: { type: String, required: true },
    // date:{ type: String, required: true },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", 
    },
    eventId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Event", 
    },
  },
  { timestamps: true }
);

const Cart = mongoose.model("Cart", cartSchema);

export default Cart;
