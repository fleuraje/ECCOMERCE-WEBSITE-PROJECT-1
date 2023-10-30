import { createContext, useState, useEffect } from "react";

export const Cartcontext = createContext()
    
    
    
export const CartProvider = ({ children }) => {
}
 
const [cartItems, setCartitems] = useState([])

const addToCart = (item) => {
    const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);

    if(isItemInCart) {
        setCartitems(
            cartItems.map((cartItem) =>
            cartItems.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1}
            : cartItem
        )
        );

    } else {
        setCartitems([...cartItems, {...item, quantity: 1 }]);
    }
};


const removeFromCart = (item) => {
    const isItemInCart = cartItems.fing((cartItem) => cartItem.id === item.id);

    if (isItemInCart.quantity === 1) {
        setCartitems(cartItems.filter((cartItem) => cartItem.id !== item.id));
    } else {
        setCartitems(
            cartItems.map((cartItem) =>
            cartItem.id === item.id
            ? {...cartItem, quantity: cartItem.quantity -1}
            : cartItem
        )
    }
}



