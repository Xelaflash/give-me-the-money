import { renderToStaticMarkup } from 'react-dom/server';
// styles imports
import styled from 'styled-components';
import { COLORS, WEIGHTS } from '../styles/constants';
// utils
import formatMoney from '../utils/formatMoney';
//  Data
import products from '../data/products.json';

// components
import SvgBackground from './SvgBackground';
import SvgBgPrimaryCard from './SvgBgPrimaryCard';

export default function Products() {
      const svgString = encodeURIComponent(
        renderToStaticMarkup(<SvgBackground />)
      );
  const dataUri = `url("data:image/svg+xml,${svgString}")`;

      const svgString2 = encodeURIComponent(
        renderToStaticMarkup(<SvgBgPrimaryCard />)
      );
      const dataUri2 = `url("data:image/svg+xml,${svgString2}")`;
  return (
    <ProductsWrapper>
      <ProductsList>
        {products.map((product) => {
          const { id, title, image, description, price } = product;
          return (
            <li
              className="card"
              key={id}
              style={{
                '--dataUri': dataUri,
                '--dataUriPrimaryCard': dataUri2,
              }}
            >
              <h3>{title}</h3>
              <p>{formatMoney(price)}</p>
              <p id="description">{description}</p>
              <button>Give Now</button>
            </li>
          );
        })}
      </ProductsList>
    </ProductsWrapper>
  );
}

const ProductsWrapper = styled.div`
  padding: 16px;
`;

// TODO: Make Card grid and use subgrid to align vertically all items inside

const ProductsList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 16px;
  margin:56px auto;
  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0px 2px 16px hsl(162 52% 31% / 0.8);
    flex: 0 1 300px;
    height: 450px;
    border-radius: 8px;
    padding: 16px;
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
      height: 498px;
      margin: -24px -32px;
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
      margin-top: 80px;
      text-align: center;
      height: 100px;
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
      cursor: pointer;
      transition: all 0.2s ease;
      box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.7);
    }
    button:hover {
      opacity: 0.8;
    }
  }
`;
