import classes from "./CartItem.module.css";

interface Props {
  id: string;
  title: string;
  price: string;
  quantity: string;
  onUpdateQuantity(id: string, value: number): void;
}

const CartItem: React.FC<Props> = ({
  id,
  title,
  price,
  quantity,
  onUpdateQuantity,
}) => {
  const updateItemQuantity = (value: number) => {
    onUpdateQuantity(id, value);
  };

  return (
    <div>
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
        <div className={`${classes.itemActions}`}>
          <button
            className={`${classes.itemAction}`}
            onClick={() => updateItemQuantity(-1)}
          >
            -
          </button>
          <button
            className={`${classes.itemAction}`}
            onClick={() => updateItemQuantity(1)}
          >
            +
          </button>
        </div>
      </div>
      <hr className="solid" />
    </div>
  );
};

export default CartItem;
