import { createContext, useEffect, useState } from "react";
import { CartContextData, CartProviderProps } from "../types/Cart";
import { Product } from "../types/Product";

export const CartContext = createContext<CartContextData>({
    cart: [],
    addToCart: () => {},
    removeFromCart: () => {},
    clearCart: () => {},
    getCartCount: () => 0,
});

export const CartProvider = ({ children }: CartProviderProps) => {

    const [ cart, setCart ] = useState<Product[]>(() => {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]); 

    const addToCart = (product: Product) => {
        setCart((prevCart) => [...prevCart, product]);
    }

    const removeFromCart = (productId: number) => {
        setCart((prevCart) => prevCart.filter((product) => product.id !== productId))
    }

    const clearCart = () => {
        setCart([]);
    }

    const getCartCount = () => {
        return cart.length;
    }
 
    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, getCartCount }}>
            {children}
        </CartContext.Provider>
    )
}