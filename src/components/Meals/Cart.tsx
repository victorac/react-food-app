import { useContext } from "react";
import CartContext from "../Store/CartProvider";
import MenuContext from "../Store/MenuProvider";
import Modal from "../ui/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

interface Props {
  show: boolean;
  onDismiss(): void;
}

const Cart: React.FC<Props> = ({ show, onDismiss }) => {
  const cartContext = useContext(CartContext);
  const menuContext = useContext(MenuContext);
  const cart = cartContext.cart;
  const menu = menuContext.menu;
  const totalPrice = Object.keys(cart).map(id => Number(menu[id].price) * cart[id]).reduce((acc, val) => acc+val, 0 );
  const orderHandler = () => {};
  return (
    <Modal show={show} onDismiss={onDismiss} className={`${classes.cart}`}>
      {Object.keys(cart).map(id => {
        return <CartItem key={`${id}-cartItem`} id={id} title={menu[id].title} price={menu[id].price} quantity={cart[id].toString()} onUpdateQuantity={cartContext.updateCart}/>
      })}
      <div className={`${classes.total}`}>
        <span>Total</span>
        <span>${totalPrice.toFixed(2)}</span>
      </div>
      <div className={`${classes.actions}`}>
        <button onClick={onDismiss} className={`${classes.actionButton} ${classes.closeButton}`}>close</button>
        <button onClick={orderHandler} className={`${classes.actionButton} ${classes.orderButton}`}>order</button>
      </div>
    </Modal>
  );
};

export default Cart;
