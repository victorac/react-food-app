import classes from "./CartLink.module.css";

interface Props {
    
}

const CartLink: React.FC<Props> = () => {
    return <button className={`${classes.cartLink}`}>
        Your Cart
    </button>
}

export default CartLink;