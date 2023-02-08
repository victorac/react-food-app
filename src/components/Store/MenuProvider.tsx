import { createContext } from "react";
import { FoodItem } from "../../types";

interface MenuInfo {
  [index: string]: FoodItem;
}

const DUMMY_MENU: MenuInfo = {
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

const MenuContext = createContext({
  menu: DUMMY_MENU,
});

interface Props {
  children: React.ReactNode;
}

export const MenuProvider: React.FC<Props> = ({ children }) => {
  return (
    <MenuContext.Provider value={{ menu: DUMMY_MENU }}>
      {children}
    </MenuContext.Provider>
  );
};

export default MenuContext;
