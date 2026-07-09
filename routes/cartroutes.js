import express from 'express';
import cartModel from './Models/cartModel.js';

const router = express.Router();

// GET /api/cart  --> sab cart items laana
router.get('/', async (req, res) => {
  try {
    const cartItems = await cartModel.find();
    res.status(200).json(cartItems);
  } catch (err) {
    console.error('Error fetching cart:', err);
    res.status(500).json({ message: 'Server error.' });
  }
});

// POST /api/cart/add  --> naya item add karna
router.post('/add', async (req, res) => {
  try {
    const { eventName, quantity, totalPrice, location, description, date } = req.body;

    // Basic validation
    if (!eventName || !quantity || !totalPrice) {
      return res.status(400).json({ message: 'EventName, quantity, and totalPrice are required.' });
    }

    const newCartItem = new cartModel({
      eventName,
      quantity,
      totalPrice,
      location,
      description,
      date,
    });

    await newCartItem.save();

    res.status(201).json({ message: 'Item added to cart successfully!' });
  } catch (err) {
    console.error('Error adding to cart:', err);
    res.status(500).json({ message: 'Server error.' });
  }
});

// DELETE /api/cart/:id  --> kisi cart item ko delete karna by id
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await cartModel.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(404).json({ message: 'Item not found.' });
    }
    res.status(200).json({ message: 'Item removed from cart.' });
  } catch (err) {
    console.error('Error deleting cart item:', err);
    res.status(500).json({ message: 'Server error.' });
  }
});

export default router;
