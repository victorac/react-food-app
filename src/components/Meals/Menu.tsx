import { useContext, useState } from "react";
import CartContext from "../Store/CartProvider";
import MenuContext from "../Store/MenuProvider";
import Button from "../ui/Button";
import classes from "./Menu.module.css";

interface Props {}

const Menu: React.FC<Props> = () => {
  const [formAmount, setFormAmount] = useState<Record<string, string>>({});
  const menu = useContext(MenuContext).menu;
  const update = () => {};
  const context = useContext(CartContext);
  const amountChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const id = event.target.id.split("-")[0];
    setFormAmount((prevFormAmount) => {
      const newAmountForm = { ...prevFormAmount };
      newAmountForm[id] = event.target.value;
      return newAmountForm;
    });
  };

  const addItemHandler = (id: string) => {
    context.updateCart(id, Number(formAmount[id]));
  };

  return (
    <div className={`${classes.menu}`}>
      <ul>
        {Object.keys(menu).map((id) => {
          return (
            <li key={`${id}-li`}>
              <div className={`${classes.item}`}>
                <div className={`${classes.itemInfo}`}>
                  <span className={`${classes.title}`}>{menu[id].title}</span>
                  <span className={`${classes.description}`}>
                    {menu[id].description}
                  </span>
                  <span className={`${classes.price}`}>{menu[id].price}</span>
                </div>
                <div className={`${classes.itemAction}`}>
                  <div>
                    <label>Amount</label>
                    <input
                      className={`${classes.actionInput}`}
                      id={`${id}-amount`}
                      type="number"
                      min={0}
                      step={1}
                      onChange={amountChangeHandler}
                    />
                  </div>
                  <button type="button" onClick={() => addItemHandler(id)}>
                    + Add
                  </button>
                </div>
              </div>
              <hr className="solid" />
            </li>
          );
        })}
      </ul>
      <button onClick={update}>Hello</button>
    </div>
  );
};

export default Menu;
