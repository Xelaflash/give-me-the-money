// Styles import
import styled from 'styled-components';
import { ShoppingCart } from 'react-feather';
import { useState } from 'react';
import { COLORS } from '../styles/constants';

//  Components
import VisuallyHidden from './VisuallyHidden';
import { useCart } from '../utils/cartState';

export default function Nav() {
  const { openCart } = useCart();
  return (
    <NavWrapper>
      <button type="button" onClick={openCart}>
        <ShoppingCart color={`${COLORS.white}`} size={32} />
        <VisuallyHidden>Cart</VisuallyHidden>
      </button>
    </NavWrapper>
  );
}

const NavWrapper = styled.nav`
  height: 72px;
  display: flex;
  justify-content: flex-end;
  padding: 10px 15px;

  button {
    min-height: var(--min-tap-height, 40px);
    background: transparent;
    border: none;
    margin-right: 25px;
  }
`;
