import Modal from "../ui/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

interface Props {
  show: boolean;
  onDismiss(): void;
}

const Cart: React.FC<Props> = ({ show, onDismiss }) => {
  const orderHandler = () => {};
  return (
    <Modal show={show} onDismiss={onDismiss} className={`${classes.cart}`}>
      <h1>Hello there!</h1>
      <CartItem title="hello!" price="9.99" quantity="2" onUpdateQuantity={()=> {}}></CartItem>
      <div className={`${classes.actions}`}>
        <button onClick={onDismiss} className={`${classes.actionButton} ${classes.closeButton}`}>close</button>
        <button onClick={orderHandler} className={`${classes.actionButton} ${classes.orderButton}`}>order</button>
      </div>
    </Modal>
  );
};

export default Cart;
