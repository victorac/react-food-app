import classes from "./CartItem.module.css";

interface Props {
  title: string;
  price: string;
  quantity: string;
  onUpdateQuantity(id: string, value: number): void;
}

const CartItem: React.FC<Props> = ({ title, price, quantity }) => {
  return (
    <div className={`${classes.cartItem}`}>
      <div className={`${classes.cartItemInfo}`}>
        <div className={`${classes.itemInfo}`}>
          <span className={`${classes.title}`}>{title}</span>
          <span className={`${classes.price}`}>${price}</span>
        </div>
        <div className={`${classes.badge}`}>
          <span> x{quantity} </span>
        </div>
      </div>
      <div className={`${classes.itemAction}`}></div>
    </div>
  );
};

export default CartItem;
