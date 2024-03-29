import PropTypes from 'prop-types';
// libs
import { useShoppingCart } from 'use-shopping-cart';
// styles imports
import styled from 'styled-components';
import { renderToStaticMarkup } from 'react-dom/server';
import { COLORS, WEIGHTS } from '../styles/constants';
// utils
import { useCart } from '../utils/cartState';
import formatMoney from '../utils/formatMoney';
// svg bg
import SvgBackground from './SvgBackground';
import SvgBgPrimaryCard from './SvgBgPrimaryCard';

export default function ProductList({ products }) {
  const { openCart, cartOpen } = useCart();

  // Svg background
  const svgString = encodeURIComponent(renderToStaticMarkup(<SvgBackground />));
  const dataUri = `url("data:image/svg+xml,${svgString}")`;
  const svgString2 = encodeURIComponent(renderToStaticMarkup(<SvgBgPrimaryCard />));
  const dataUri2 = `url("data:image/svg+xml,${svgString2}")`;

  const { addItem } = useShoppingCart();

  const openCartHandler = () => {
    if (!cartOpen) {
      setTimeout(() => {
        openCart();
      }, 1500);
    }
  };

  return (
    <ProductsList>
      {products.map((product) => (
        <li
          className='card'
          key={product.id}
          style={{
            '--dataUri': dataUri,
            '--dataUriPrimaryCard': dataUri2,
          }}
        >
          <h3>{product.name}</h3>
          <p>{formatMoney(product.price)}</p>
          <p id='description'>{product.description}</p>
          <button
            type='button'
            onClick={() => {
              addItem(product);
              openCartHandler();
            }}
          >
            Give Now
          </button>
        </li>
      ))}
    </ProductsList>
  );
}

const ProductsList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1rem;
  margin: 3rem auto;

  li {
    display: grid;
    grid-template-rows: 50px 100px 1fr auto;
    grid-gap: 10px;
    box-shadow: 0px 2px 16px hsl(162 52% 31% / 0.8);
    width: 310px;
    height: 425px;
    border-radius: 8px;
    padding: 1rem 2rem;
    background: ${COLORS.white};
  }
  .card {
    background: var(--dataUri);
    position: relative;
    z-index: 1;
  }
  .card:nth-child(2) {
    background: var(--dataUriPrimaryCard);
    z-index: 2;
    height: 475px;
    margin: -25px;
    button {
      margin-top: 30px;
    }
  }

  h3 {
    font-size: 1.7rem;
    margin: 8px auto;
    text-align: center;
    color: ${COLORS.primary};
    font-weight: ${WEIGHTS.bold};
  }

  p {
    font-size: 2rem;
    margin: 16px auto;
  }

  #description {
    font-size: 1.25rem;
    font-weight: ${WEIGHTS.medium};
    color: ${COLORS.secondary};
    text-align: center;
    margin-top: 4rem;
  }

  button {
    margin: 5px auto;
    padding: 8px 16px;
    font-size: 1.3rem;
    background: ${COLORS.primary};
    border-radius: 4px;
    color: ${COLORS.white};
    border: 0;
    font-weight: ${WEIGHTS.bold};
    transition: all 0.2s ease;
    box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.7);
  }
  button:hover {
    opacity: 0.8;
  }

  @media (max-width: 56rem) {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    margin: 1rem auto;
    .card:nth-child(2) {
      margin: 0;
    }
  }
`;

ProductList.propTypes = {
  products: PropTypes.array,
};
