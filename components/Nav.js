import PropTypes from 'prop-types';
// Styles import
import { ShoppingCart } from 'react-feather';
import styled from 'styled-components';
import { COLORS } from '../styles/constants';

//  Components
import VisuallyHidden from './VisuallyHidden';
import CartCount from './CartCount';
// utils
import { useCart } from '../utils/cartState';

export default function Nav({ count }) {
  const { openCart } = useCart();

  return (
    <NavWrapper>
      <CartWrapper>
        <button type="button" onClick={openCart}>
          <ShoppingCart color={`${COLORS.white}`} size={32} />
          <VisuallyHidden>Cart</VisuallyHidden>
          <CartCount count={count} />
        </button>
      </CartWrapper>
    </NavWrapper>
  );
}

const NavWrapper = styled.nav`
  height: 72px;
  display: flex;
  justify-content: flex-end;
  padding: 10px 15px;

  button {
    display: flex;
    align-items: center;
    margin: 0.5rem;
    cursor: pointer;
    min-height: var(--min-tap-height, 40px);
    background: transparent;
    border: none;
  }
`;

const CartWrapper = styled.div`
  display: flex;
  padding: 1rem;
`;

Nav.propTypes = {
  count: PropTypes.number,
};
