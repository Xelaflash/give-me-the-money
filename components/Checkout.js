import { useEffect, useState } from 'react';
// libs
import { useShoppingCart } from 'use-shopping-cart'
// utils
// import getStripe from '../utils/get-stripe';
// import { fetchPostJSON } from '../utils/api-helpers';
// styles
import styled from 'styled-components';
import { COLORS } from '../styles/constants';
import { AlertTriangle } from 'react-feather';


function Checkout() {
  const [status, setStatus] = useState('idle')
  const { cartCount, cartDetails } = useShoppingCart();
  const [loading, setLoading] = useState(false);
  const [cartEmpty, setCartEmpty] = useState(true);

  useEffect(() => setCartEmpty(!cartCount), [cartCount]);

  useEffect(() => {
    if (cartDetails == null || cartDetails.length === 0) {
        cartDetails = { cartDetails: [] };
    }
  }, []);

  const form = document.querySelector('form');
  console.log(form);

  async function handleCheckout(event) {
    event.preventDefault();
    form.submit();
  }

  return (
    <CheckoutFormStyles action='/api/redirect-to-checkout' method='POST'>
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
      <SickButton  onClick={handleCheckout} disabled={cartEmpty || loading}>Pay Now</SickButton>
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
  &[disabled] {
    opacity: 0.5;
  }
`;

const ErrorMsg = styled.p`
  padding-left: 15px;
  font-size: 1.3rem;
`;




export { Checkout };