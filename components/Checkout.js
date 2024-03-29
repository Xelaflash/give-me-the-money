import { useEffect, useState } from 'react';
// libs
import { useShoppingCart } from 'use-shopping-cart';
// utils

// styles
import styled from 'styled-components';
import { COLORS } from '../styles/constants';
// import { AlertTriangle } from 'react-feather';

function Checkout() {
  const { cartCount, cartDetails } = useShoppingCart();
  const [loading, setLoading] = useState(false);
  const [cartEmpty, setCartEmpty] = useState(true);

  useEffect(() => setCartEmpty(!cartCount), [cartCount]);

  const form = document.querySelector('form');

  const handleCheckout = async (event) => {
    event.preventDefault();
    setLoading(true);
    form.submit();
    setLoading(false);
  };

  return (
    <CheckoutFormStyles action='/api/redirect-to-checkout' method='POST' onSubmit={handleCheckout}>
      <input type='hidden' name='cartDetails' value={JSON.stringify(cartDetails)} />
      <SickButton type='submit' disabled={cartEmpty || loading}>
        Pay Now
      </SickButton>
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
  @media (max-width: 650px) {
    margin: 1rem auto 0;
  }
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
  @media (max-width: 650px) {
    margin: 0;
  }
`;

export { Checkout };
