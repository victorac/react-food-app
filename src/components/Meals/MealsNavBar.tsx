import Navbar from "../ui/Navbar";
import NavGroup from "../ui/NavGroup";
import CartLink from "./CartLink";
import classes from "./MealsNavBar.module.css";

interface Props {}

const MealsNavBar: React.FC<Props> = () => {
  return (
    <Navbar className={`${classes.mealsNavBar}`}>
      <span>Food shop!</span>
      <NavGroup>
        <CartLink />
      </NavGroup>
    </Navbar>
  );
};

export default MealsNavBar;
