import { Product } from "./Product";

export interface CartContextData {
    cart: Product[];
    addToCart: (product: Product) => void;
    removeFromCart: (productId: number) => void;
    clearCart: () => void;
    getCartCount: () => number;
}

export interface CartProviderProps {
    children: React.ReactNode;
}