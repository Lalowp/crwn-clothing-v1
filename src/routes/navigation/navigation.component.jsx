import { Fragment, useContext } from "react";
import { Outlet } from "react-router-dom";
import { ReactComponent as CrwnLogo} from '../../assests/crown.svg';
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { CartContext } from "../../contexts/dropdown.context";
import { NavigationContainer, LogoContainer, NavLinksContainer, NavLink } from "./navigation.style.jsx";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext);
    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to='/'>
                    <CrwnLogo className="logo"></CrwnLogo>
                </LogoContainer>
                <NavLinksContainer>
                    <NavLink to='/shop'>
                        Shop
                    </NavLink>
                    {
                        currentUser ? (
                            <NavLink as='span' onClick={signOutUser}>Sign out</NavLink>
                        ) : (
                            <NavLink to='/auth'>
                            Sign In
                            </NavLink>
                        )
                    }
                    <CartIcon></CartIcon>
                </NavLinksContainer>
                {isCartOpen && <CartDropdown></CartDropdown>}
            </NavigationContainer>
            <Outlet />
        </Fragment>
    );
};

export default Navigation;