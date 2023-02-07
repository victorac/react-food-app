import { useState } from "react";
import ReactDOM from "react-dom";
import "./App.css";
import Cart from "./components/Meals/Cart";
import Menu from "./components/Meals/Menu";
import Navbar from "./components/ui/Navbar";

type FoodItem = {
  id: string;
  title: string;
  description: string;
  price: string;
};

interface MenuInterface {
  [index: string]: FoodItem;
}

const DUMMY_MENU: MenuInterface = {
  f1: {
    id: "f1",
    title: "Sushi",
    description: "It's raw meat with something else",
    price: "199.99",
  },
  f2: {
    id: "f2",
    title: "Schnitzel",
    description: "German specialty!",
    price: "59.99",
  },
  f3: {
    id: "f3",
    title: "Burger",
    description: "Meat and bread good!",
    price: "19.99",
  },
};

type CartItem = FoodItem & { quantity: number };

interface CartInterface {
  [index: string]: CartItem;
}

const removeItem = (cart: CartInterface, id: string) => {
  const updatedCart: CartInterface = {};
  for (const i in cart) {
    if (i !== id) {
      updatedCart[i] = { ...cart[i] };
    }
  }
  return updatedCart;
};

const updateItem = (cart: CartInterface, item: CartItem) => {
  const updatedCart: CartInterface = {};
  for (const i in cart) {
    updatedCart[i] = { ...cart[i] };
  }
  updatedCart[item.id] = { ...item };
  return updatedCart;
};

function App() {
  const x = { a: 1 };

  const [cart, setCart] = useState<CartInterface>({});

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
    <div>
      <Navbar />
      {ReactDOM.createPortal(<Cart />, document.getElementById("modal-root")!)}
      <Menu />
    </div>
  );
}

export default App;
