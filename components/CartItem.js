// import { PropTypes } from 'prop-types';
import Image from 'next/image';
import styled from 'styled-components';
import formatMoney from '../utils/formatMoney';

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
  const { product } = cartItem;
  if (!product) return null;
  return (
    <CartItemStyles>
      <div className="img-wrapper">
        <StyledImage
          width={125}
          height={85}
          src={product.image}
          placeholder="blur"
          blurDataURL={rgbDataURL(237, 181, 6)}
          alt={product.title}
          className="item_img"
        />
      </div>
      <ProductPriceWrapper>
        <h3 className="title">{product.title}</h3>
        <h3 className="price">{formatMoney(product.price)}</h3>
      </ProductPriceWrapper>
      {/* <RemoveFromCart id={cartItem.id} /> */}
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
  }
  /* the magic happens here */
  .img-wrapper {
    box-shadow: 0px 1px 10px 2px hsl(162 52% 31% / 0.8);
  }
`;

const StyledImage = styled(Image)`
  border-radius: 4px;
`;

const ProductPriceWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 3rem;
  h3 {
    font-size: 1.5rem;
  }
  .title {
    flex: 0 1 75%;
  }
  .price {
    flex: 0 1 25%;
  }
`;
