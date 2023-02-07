import classes from "./NavGroup.module.css";

interface Props {
    children: React.ReactNode
}

const NavGroup: React.FC<Props> = ({children}) => {
    return <div className={`${classes.navGroup}`}>
        {children}
    </div>
}

export default NavGroup;