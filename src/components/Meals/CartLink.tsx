import { useContext } from "react";
import CartContext from "../Store/CartProvider";
import classes from "./CartLink.module.css";

interface Props {
    
}

const CartLink: React.FC<Props> = () => {
    const context = useContext(CartContext);
    const total = (Object.values(context.cart)).reduce((acc, value) => acc + value, 0);
    return <button className={`${classes.cartLink}`}>
        <div className={`${classes.cartButton}`}>
            <span>Your Cart</span>
            <div className={`${classes.badge}`}>
                {total}
            </div>
        </div>
        
    </button>
}

export default CartLink;