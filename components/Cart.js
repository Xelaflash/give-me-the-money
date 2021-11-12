// Styles import
import styled from 'styled-components';
import { COLORS } from '../styles/constants';

// Utils imports
import { useCart } from '../utils/cartState';
// import formatMoney from '../utils/formatMoney';

// import { Checkout } from "./Checkout";

// const redirectToCheckout = async () => {
//   ...
// };

export default function Cart({ cartItems, removeFromCart }) {
  const { cartOpen, closeCart } = useCart();
  return (
    <CartStyles open={cartOpen}>
      <header>
        <Supreme>Your Cart</Supreme>
        <CloseButton type="button" onClick={closeCart} id="close-cart">
          &times;
        </CloseButton>
      </header>
      {/* TODO: style cart  + Add sum of CartItems*/}
      <ul>
        {cartItems.map((item, index) =>
          <li key={index}>
            <p>{item.product.title}</p>
            <p>{item.product.price} </p>
            <button type="button" onClick={() => removeFromCart(index)}>Remove from cart</button>
          </li>
        )}
      </ul>
      {!cartItems.length && <span>No products in cart.</span>}
      <form action="/create-checkout-session" method="POST">
        <button type="submit">Checkout</button>
      </form>
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
  /* display: grid; */
  /* grid-template-rows: auto 1fr auto; */
  ${(props) => props.open && `transform: translateX(0);`};
  header {
    margin-bottom: 2rem;
    text-align: center;
    width: max-content;
    margin: auto;
  }
  /* footer {
    border-top: 10px double ${COLORS.secondary};
    margin-top: 2rem;
    padding-top: 2rem;
    /* display: grid;
    grid-template-columns: auto auto; */
  /* align-items: center;
    font-size: 3rem;
    font-weight: 900;
    p {
      margin: 0;
    }
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    overflow: scroll;
  } */
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
