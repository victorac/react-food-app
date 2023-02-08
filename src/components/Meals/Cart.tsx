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
  const orderHandler = () => {};
  return (
    <Modal show={show} onDismiss={onDismiss} className={`${classes.cart}`}>
      {/* <h1>Hello there!</h1> */}
      {Object.keys(cart).map(id => {
        return <CartItem id={id} title={menu[id].title} price={menu[id].price} quantity={cart[id].toString()} onUpdateQuantity={cartContext.updateCart}/>
      })}
      {/* <CartItem id="1" title="hello!" price="9.99" quantity= onUpdateQuantity={cartContext.updateCart}></CartItem> */}
      <div className={`${classes.actions}`}>
        <button onClick={onDismiss} className={`${classes.actionButton} ${classes.closeButton}`}>close</button>
        <button onClick={orderHandler} className={`${classes.actionButton} ${classes.orderButton}`}>order</button>
      </div>
    </Modal>
  );
};

export default Cart;
