import { createContext, useContext, useState } from "react";
import { CartInfo, CartItem, MealCart } from "../../types";

const CartContext = createContext({
  cart: {} as MealCart,
  updateCart: (id: string, quantity: number) => {},
});

interface Props {
  children: React.ReactNode;
}

export const CartProvider: React.FC<Props> = ({ children }) => {
  const [cart, setCart] = useState<MealCart>({});

  const removeItem = (cart: CartInfo, id: string) => {
    const updatedCart: CartInfo = {};
    for (const i in cart) {
      if (i !== id) {
        updatedCart[i] = { ...cart[i] };
      }
    }
    return updatedCart;
  };

  const updateItem = (cart: CartInfo, item: CartItem) => {
    const updatedCart: CartInfo = {};
    for (const i in cart) {
      updatedCart[i] = { ...cart[i] };
    }
    updatedCart[item.id] = { ...item };
    return updatedCart;
  };

  const updateCart = (id: string, quantity: number) => {
    const item = { ...cart[id] };
    item.quantity += quantity;
    if (item.quantity <= 0) {
      setCart((prevCart) => removeItem(prevCart, id));
    } else {
      setCart((prevCart) => updateItem(prevCart, item));
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart: cart,
        updateCart: updateCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
