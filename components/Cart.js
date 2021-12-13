import { useRef, useEffect } from 'react';
// libs
import { useShoppingCart } from 'use-shopping-cart';
// Styles import
import styled from 'styled-components';
import { COLORS, WEIGHTS } from '../styles/constants';
// Utils imports
import { useCart } from '../utils/cartState';
//  Component
import CartItem from './CartItem';
import { Checkout } from './Checkout';

export default function Cart() {
  const { cartOpen, closeCart } = useCart();
  const { cartCount, clearCart, cartDetails, formattedTotalPrice } = useShoppingCart();

  const ref = useRef();

  useEffect(() => {
    if (!ref.current) {
      return;
    }
    const checkIfClickedOutside = (e) => {
      // If the cart is open and the clicked target is not within the cart,
      // then close the cart
      if (cartOpen && !ref.current.contains(e.target)) {
        closeCart();
      }
    };
    document.addEventListener('mousedown', checkIfClickedOutside);
    document.addEventListener('touchstart', checkIfClickedOutside);
    return () => {
      // Cleanup the event listener
      document.removeEventListener('mousedown', checkIfClickedOutside);
      document.removeEventListener('touchstart', checkIfClickedOutside);
    };
  }, [cartOpen, closeCart]);

  const cartItems = Object.values(cartDetails);

  return (
    <CartStyles open={cartOpen} ref={ref}>
      <header>
        <Supreme>Your Cart</Supreme>
        <CloseButton type='button' onClick={closeCart} id='close-cart'>
          &times;
        </CloseButton>
      </header>
      <ul>
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </ul>
      {cartCount === 0 ? (
        <Filler>
          <span>No products in cart...(yet 😇)</span>
        </Filler>
      ) : null}
      {cartCount !== 0 ? (
        <ClearCartBtn type='button' onClick={clearCart}>
          Clear Cart
        </ClearCartBtn>
      ) : null}
      <footer>
        <p>
          TOTAL: <span>{formattedTotalPrice}</span>
        </p>
        <Checkout />
      </footer>
    </CartStyles>
  );
}

const Supreme = styled.h3`
  background: ${COLORS.primary};
  color: ${COLORS.white};
  display: inline-block;
  padding: 8px;
  transform: skew(-3deg);
  margin: 0;
  font-size: 2rem;
`;

const Filler = styled.div`
  height: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    font-weight: ${WEIGHTS.bold};
    font-size: 1.2rem;
  }
`;

const CartStyles = styled.div`
  padding: 20px;
  background: ${COLORS.secondary};
  color: ${COLORS.veryPaleGreen};
  position: fixed;
  height: 100%;
  top: 0;
  right: 0;
  width: 40%;
  min-width: 500px;
  bottom: 0;
  transform: translateX(100%);
  transition: all 0.3s;
  box-shadow: 0 0 10px 3px rgba(255, 255, 255, 0.2);
  z-index: 5;
  overflow: auto;
  ${(props) => props.open && `transform: translateX(0);`};
  header {
    margin-bottom: 2rem;
    text-align: center;
    width: max-content;
    margin: auto;
  }
  ul {
    margin-top: 1.5rem;
  }
  footer {
    border-top: 10px double ${COLORS.primary};
    margin-top: 1rem;
    padding: 2rem 2rem 0 2rem;
    font-size: 2.2rem;
    font-weight: 900;
    p {
      display: flex;
      justify-content: flex-end;
      margin: 0;
      span {
        padding-left: 5rem;
      }
    }
  }
`;

const CloseButton = styled.button`
  background: ${COLORS.primary};
  color: ${COLORS.white};
  font-size: 3rem;
  border: 0;
  position: absolute;
  z-index: 2;
  right: 0;
  top: -2px;
  padding: 4px 12px;
  line-height: 1;
`;

const ClearCartBtn = styled.button`
  background: ${COLORS.primary};
  color: ${COLORS.white};
  font-size: 1rem;
  padding: 4px 12px;
  font-weight: ${WEIGHTS.normal};
  border: none;
  box-shadow: 3px 2px 2px 0px rgba(38, 120, 95, 0.7);
  margin: 10px auto;
`;
