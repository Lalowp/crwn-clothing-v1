import { useContext } from 'react';
import { CartContext } from '../../contexts/dropdown.context';
import { ShoppingIcon, CartIconContainer, ItemCount } from './cart-icon.style';

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
    const value = useContext(CartContext);

    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

    return(
        <CartIconContainer onClick={toggleIsCartOpen}>
            <ShoppingIcon className='shopping-icon'></ShoppingIcon>
            <ItemCount as='span' className='item-count'>{cartCount}</ItemCount>
        </CartIconContainer>
    );
};

export default CartIcon;