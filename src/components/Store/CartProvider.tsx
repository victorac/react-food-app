import { createContext, useState } from "react";
import { CartInfo } from "../../types";

const CartContext = createContext({
  cart: {} as CartInfo,
  updateCart: (id: string, quantity: number) => {},
});

interface Props {
  children: React.ReactNode;
}

export const CartProvider: React.FC<Props> = ({ children }) => {
  const [cart, setCart] = useState<CartInfo>({});
  const updateCart = (id: string, quantity: number) => {
    setCart((prevCart) => {
      if ((prevCart[id] ?? 0) + quantity <= 0) {
        delete prevCart[id];
        return { ...prevCart };
      }
      const newCart = {} as CartInfo;
      newCart[id] = (prevCart[id] ?? 0) + quantity; 
      return {
        ...prevCart,
        ...newCart,
      };
    });
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

export default CartContext;
