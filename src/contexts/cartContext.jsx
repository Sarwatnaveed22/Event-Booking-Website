// src/contexts/cartContext.jsx

import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

export const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    const stored = localStorage.getItem('cartItems');
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/cart");
        setCartItems(response.data);
      } catch (err) {
        console.error("❌ Failed to fetch cart from backend:", err);
      }
    };
    fetchCart();
  }, []);

 const addToCart = async (item) => {
  try {
    const response = await axios.post("http://localhost:5000/api/cart", {
  eventName: item.eventName,
  location: item.location,
  description: item.description,  // add description
  date: item.date,                // add date
  quantity: item.quantity,
  price: item.price,
  totalPrice: item.quantity * parseFloat(item.price),
  image: item.image || null,

    });

   if (response.status === 201) {
  const existingItem = cartItems.find(i => i.name === item.eventName);
  if (existingItem) {
    const updatedCart = cartItems.map(i =>
      i.name === item.eventName
        ? {
            ...i,
            quantity: i.quantity + item.quantity,
            totalPrice: (i.quantity + item.quantity) * i.price,
            location: item.location,
            description: item.description,
            date: item.date,
          }
        : i
    );
    setCartItems(updatedCart);
  } else {
    const newItem = {
      name: item.eventName,
      price: parseFloat(item.price),
      quantity: item.quantity,
      totalPrice: item.quantity * parseFloat(item.price),
      image: item.image || null,
      location: item.location,
      description: item.description,
      date: item.date,
    };
    setCartItems([...cartItems, newItem]);
  }
}

  } catch (error) {
    console.error("❌ Error adding to backend cart:", error);
    throw error;  // Throw so caller knows failure
  }
};


  const removeFromCart = async (eventName) => {
    try {
      await axios.delete(`http://localhost:5000/api/cart/${eventName}`);
      setCartItems(prevItems => prevItems.filter(item => item.name !== eventName)); // ✅ name se match karna
    } catch (error) {
      console.error('Error removing item from cart in DB:', error);
    }
  };

  const updateQuantity = (eventName, newQuantity) => {
    const updatedCart = cartItems.map(item =>
      item.name === eventName // ✅ name ka use consistently
        ? {
            ...item,
            quantity: newQuantity,
            totalPrice: newQuantity * item.price
          }
        : item
    );
    setCartItems(updatedCart);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
}
