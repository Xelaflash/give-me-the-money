import { useState } from 'react';

// libs
import { useShoppingCart } from 'use-shopping-cart'

// styles
import styled from 'styled-components';
import { COLORS } from '../styles/constants';
import { AlertTriangle } from 'react-feather';

// utils
import { useCart } from '../utils/cartState';

function Checkout() {
  const [status, setStatus] = useState('idle')
  const { redirectToCheckout, cartCount } = useShoppingCart()

   // close cart hook from cartState (in lib)
  const { closeCart } = useCart();

    async function handleClick(event) {
    event.preventDefault()
    if (cartCount > 0) {
      setStatus('idle');
      const error = await redirectToCheckout();
      if (error) {
        setStatus('redirect-error');
        console.log(result.error.message);
      }
    } else {
      setStatus('missing-items');
    }
  }


  return (
    <CheckoutFormStyles>
      <div
        style={{
          fontSize: 14,
          color: 'red',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {status === 'missing-items' && (
          <>
            <AlertTriangle size={24}/>
            <ErrorMsg>
              Your cart is empty.
            </ErrorMsg>
          </>
        )}
        {status === 'redirect-error' && (
          <>
            <AlertTriangle size={24}/>
            <ErrorMsg>Unable to redirect to Stripe checkout page.</ErrorMsg>
          </>
        )}
      </div>
      <SickButton  onClick={handleClick}>Pay Now</SickButton>
    </CheckoutFormStyles>
  );
}

const CheckoutFormStyles = styled.form`
  box-shadow: 0 1px 2px 2px rgba(38, 120, 95, 0.4);
  border: 1px solid rgba(38, 120, 95, 0.2);
  border-radius: 5px;
  padding: 1rem;
  display: grid;
  grid-gap: 1rem;
  font-size: 2rem;
  margin: 2rem auto 0;
`;

const SickButton = styled.button`
  background: ${COLORS.primary};
  color: white;
  font-weight: 500;
  border: 0;
  border-radius: 0;
  margin: 1rem 0;
  text-transform: uppercase;
  font-size: 2rem;
  padding: 0.8rem 1.5rem;
  transform: skew(-2deg);
  display: inline-block;
  transition: all 0.5s;
  cursor:pointer;
  &[disabled] {
    opacity: 0.5;
  }
`;

const ErrorMsg = styled.p`
  padding-left: 15px;
  font-size: 1.3rem;
`;




export { Checkout };