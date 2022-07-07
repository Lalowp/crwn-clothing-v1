import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import { useContext } from 'react';
import { CartContext } from '../../contexts/dropdown.context';
import { useNavigate } from 'react-router-dom';
import { CartDropdownContainer, EmptyMessage, CartItems } from './cart-dropdown.style';

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate();

    const toCheckoutHandler = () => {
        navigate('/checkout');
    };

    return (
        <CartDropdownContainer>
            <CartItems>
                {cartItems.length ? (
                    cartItems.map((cartItem) => (
                        <CartItem key={cartItem.id} cartItem={cartItem}></CartItem>
                    ))
                ) : (
                    <EmptyMessage as='span'>Your cart is empty</EmptyMessage>
                )}
            </CartItems>
            <Button onClick={ toCheckoutHandler }>Checkout</Button>
        </CartDropdownContainer>
    );
}

export default CartDropdown;