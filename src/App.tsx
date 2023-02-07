import { useState } from "react";
import ReactDOM from "react-dom";
import "./App.css";
import Cart from "./components/Meals/Cart";
import MealsNavBar from "./components/Meals/MealsNavBar";
import Menu from "./components/Meals/Menu";
import { FoodItem } from "./types";

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

function App() {
  return (
    <div>
      <MealsNavBar />
      {ReactDOM.createPortal(<Cart />, document.getElementById("modal-root")!)}
      <Menu />
    </div>
  );
}

export default App;
