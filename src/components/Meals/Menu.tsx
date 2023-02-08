import { useContext, useState } from "react";
import CartContext from "../Store/CartProvider";
import MenuContext from "../Store/MenuProvider";
import Button from "../ui/Button";

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
    <div>
      <ul>
        {Object.keys(menu).map((id) => {
          return (
            <li key={`${id}-li`}>
              <div>
                <div>{menu[id].title}</div>
                <div>{menu[id].description}</div>
                <div>{menu[id].price}</div>
              </div>
              <div>
                <label>Amount</label>
                <input
                  id={`${id}-amount`}
                  type="number"
                  min={0}
                  step={1}
                  onChange={amountChangeHandler}
                ></input>
                <button type="button" onClick={() => addItemHandler(id)}>
                  + Add
                </button>
              </div>
            </li>
          );
        })}
      </ul>
      <button onClick={update}>Hello</button>
    </div>
  );
};

export default Menu;
