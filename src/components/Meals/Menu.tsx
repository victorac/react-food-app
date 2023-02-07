import { useContext } from "react";
import CartContext from "../Store/CartProvider";

interface Props {
    
}



const Menu: React.FC<Props> = () => {
    const update = () => {
        context.updateCart("1", 2);
    }
    const context = useContext(CartContext);
    return <div>
        <button onClick={update}>Hello</button>
    </div>
}

export default Menu;