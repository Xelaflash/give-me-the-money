import { useState } from 'react';
// styles imports
import styled from 'styled-components';
import { COLORS, WEIGHTS } from '../styles/constants';
// component
import Cart from './Cart';
import CartCount from './CartCount';

//  Data
import PRODUCT_DATA from '../data/products';
import ProductList from './ProductList';

export default function Products() {
  const [products] = useState(PRODUCT_DATA);
  const [cartItems, setCartItems] = useState([]);

  // Cart functions
  const addToCart = (product) => {
    setCartItems((oldCart) => [...oldCart, product]);
  };

  const removeFromCart = (index) => {
    setCartItems((oldCart) => [...oldCart.slice(0, index), ...oldCart.slice(index + 1)]);
  };

  return (
    <ProductsWrapper>
      <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
      <CartCount count={cartItems.length} />
      <ProductList products={products} addToCart={addToCart} />
    </ProductsWrapper>
  );
}

const ProductsWrapper = styled.div`
  padding: 16px;
`;
