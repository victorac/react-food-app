import { useContext, useState } from "react";
import ReactDOM from "react-dom";
import CartContext from "../Store/CartProvider";
import Cart from "./Cart";
import classes from "./CartLink.module.css";

interface Props {}

const CartLink: React.FC<Props> = () => {
  const context = useContext(CartContext);
  const total = Object.values(context.cart).reduce(
    (acc, value) => acc + value,
    0
  );
  const [showCart, setShowCart] = useState(false);
  return (
    <>
      <Cart show={showCart} onDismiss={() => setShowCart(false)} />
      <button
        className={`${classes.cartLink}`}
        onClick={() => setShowCart(true)}
      >
        <div className={`${classes.cartButton}`}>
          <span>Your Cart</span>
          <div className={`${classes.badge}`}>
            <span>{total}</span>
          </div>
        </div>
      </button>
    </>
  );
};

export default CartLink;
