// nextJS
import Image from 'next/image';
// libs
import { useShoppingCart } from 'use-shopping-cart'
import formatMoney from '../utils/formatMoney';
// styles
import styled from 'styled-components';
import { Trash2 } from 'react-feather';
import { COLORS, WEIGHTS } from '../styles/constants';

// stuff taken from NextJs docs for placeHolder color on Image
// Pixel GIF code adapted from https://stackoverflow.com/a/33919020/266535
const keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
const triplet = (e1, e2, e3) =>
  keyStr.charAt(e1 >> 2) +
  keyStr.charAt(((e1 & 3) << 4) | (e2 >> 4)) +
  keyStr.charAt(((e2 & 15) << 2) | (e3 >> 6)) +
  keyStr.charAt(e3 & 63);

const rgbDataURL = (r, g, b) =>
  `data:image/gif;base64,R0lGODlhAQABAPAA${
    triplet(0, r, g) + triplet(b, 255, 255)
  }/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`;

export default function CartItem({ cartItem }) {
  const { removeItem } = useShoppingCart();

  return (
    <CartItemStyles>
      <div className="img-wrapper">
        <StyledImage
          width={100}
          height={60}
          src={cartItem.image}
          placeholder="blur"
          blurDataURL={rgbDataURL(237, 181, 6)}
          alt={cartItem.name}
          className="item_img"
        />
      </div>
      <ProductPriceWrapper>
        <div className="title-Wrapper">
          <h3 className="title">{cartItem.name}</h3>
          <p className="qty">
            {' '}
            ({formatMoney(cartItem.price)} &times; {cartItem.quantity})
          </p>
        </div>
        <h3 className="price">{formatMoney(cartItem.price * cartItem.quantity)}</h3>
      </ProductPriceWrapper>
      <RemoveBtn
        type="button"
        title="Remove item from Cart"
        onClick={() => removeItem(cartItem.id)}
      >
        <Trash2 color={`${COLORS.veryPaleGreen}`} />
      </RemoveBtn>
    </CartItemStyles>
  );
}

const CartItemStyles = styled.li`
  padding: 1rem 0;
  border-bottom: 1px solid var(--lightGray);
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  .img-wrapper {
    box-sizing: content-box;
    line-height: 0;
    box-shadow: 1px 2px 8px 1px hsl(162 52% 31% / 0.8);
  }
`;

const StyledImage = styled(Image)`
  border-radius: 4px;
`;

const ProductPriceWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 1rem;
  .title {
    flex: 0 0 65%;
    font-size: 1.2rem;
  }
  .qty {
    font-size: 1rem;
    font-weight: ${WEIGHTS.normal};
  }
  .price {
    flex: 0 1 35%;
    font-size: 1.5rem;
  }
`;

const RemoveBtn = styled.button`
  background: transparent;
  border: none;
  margin: 1rem;
  font-size: 2rem;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;
