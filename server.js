import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import Cart from './models/cartModel.js';
import User from './models/userModel.js';

const app = express();
const PORT = 5000;

// ✅ MongoDB connection URI
const MONGO_URI = "mongodb+srv://sarwat:sarwat09@cluster0.y4og21s.mongodb.net/eventbooking?retryWrites=true&w=majority&appName=Cluster0";

// ✅ Middleware
app.use(cors());
app.use(express.json());

// ✅ Connect to MongoDB
mongoose.connect(MONGO_URI)
  .then(() => console.log('✅ Connected to MongoDB successfully'))
  .catch((error) => console.error(' MongoDB connection error:', error));

// ✅ Default route
app.get('/', (req, res) => {
  res.send(' Server is working');
});

//  CART ROUTES

// POST: Add item to cart
app.post('/api/cart', async (req, res) => {
  try {
    const { eventName, quantity, totalPrice  } = req.body;
    const newCartItem = new Cart({ eventName, quantity, totalPrice});
    await newCartItem.save();
    res.status(201).json({ message: "Item added to cart successfully!" });
  } catch (error) {
    console.error("Error saving to cart:", error);
    res.status(500).json({ error: "Failed to save item to cart" });
  }
});

// DELETE: Remove item from cart by event name
app.delete('/api/cart/:eventName', async (req, res) => {
  try {
    const { eventName } = req.params;
    await Cart.deleteOne({ eventName });
    res.status(200).json({ message: 'Item removed from cart' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to remove item from cart' });
  }
});

//  USER ROUTES

// POST: Register new user
app.post('/api/users/signup', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ error: 'User already exists with this email' });
    }

    const newUser = new User({ name, email, password });
    const savedUser = await newUser.save();

    res.status(201).json(savedUser);
  } catch (error) {
    console.error(' Error saving user:', error);
    res.status(500).json({ error: 'Failed to create user' });
  }
});

//  POST: Login user
app.post('/api/users/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email });

    if (!user || user.password !== password) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    res.status(200).json({ message: "Login successful", user });
  } catch (error) {
    console.error(" Error during login:", error);
    res.status(500).json({ message: "Login failed" });
  }
});

// GET: Fetch all users
app.get('/api/users', async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch users' });
  }
});

//  Start server
app.listen(PORT, () => {
  console.log(` Server is running on http://localhost:${PORT}`);
});
