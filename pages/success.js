import { useEffect } from 'react';
import Link from 'next/link';
// libs
import { useShoppingCart } from 'use-shopping-cart';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
// styles
import styled from 'styled-components';
import { COLORS, WEIGHTS } from '../styles/constants';
// components
import Layout from '../components/Layout';
import Nav from '../components/Nav';
import Cart from '../components/Cart';

export default function Success() {
  const MySwal = withReactContent(Swal);
  const { cartCount, clearCart } = useShoppingCart();

  useEffect(() => {
    MySwal.fire({
      title: <strong>Payment Successful!</strong>,
      html: <i>Thanks for the support</i>,
      icon: 'success',
    });
  }, [MySwal]);
  useEffect(() =>
    setTimeout(() => {
      clearCart();
    }, 1000)
  );

  return (
    <Layout>
      <Nav count={cartCount} />
      <Cart />
      <SuccessPageWrapper>
        <ThanksMsg>
          Congratulations you gave the <span>Money</span>
        </ThanksMsg>
        <p>If you want to give more money </p>
        <p>Go back 👇</p>
        <Link href="/">
          <ReturnToHome>Home</ReturnToHome>
        </Link>
      </SuccessPageWrapper>
    </Layout>
  );
}

const SuccessPageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  p {
    text-align: center;
    line-height: 2;
    font-size: 1.2rem;
  }
`;

const ThanksMsg = styled.h1`
  font-size: clamp(1.5rem, 4vw + 1rem, 2.8rem);
  font-weight: ${WEIGHTS.bold};
  margin: 5rem auto 2rem;
  & span {
    color: ${COLORS.primary};
    font-weight: ${WEIGHTS.bold};
    text-transform: uppercase;
  }
`;

const ReturnToHome = styled.a`
  cursor: pointer;
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
  &:hover {
    opacity: 0.5;
  }
`;
