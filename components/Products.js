import { useEffect, useState } from 'react';
// styles imports
import styled from 'styled-components';
// component
import Cart from './Cart';
// import CartCount from './CartCount';

//  Data
import PRODUCT_DATA from '../data/products';
import ProductList from './ProductList';

export default function Products() {
  const [products] = useState(PRODUCT_DATA);
  const [cartItems, setCartItems] = useState([]);

  //  Conditionnally get cart items on component mount
  useEffect(() => {
    const savedCartItems = JSON.parse(localStorage.getItem('cartItems'));
    if (savedCartItems) {
      setCartItems(savedCartItems);
    }
  }, []);

  // we set cartItems in local storage to persist data and to use this info in CartCount
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

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
      {/* <CartCount count={savedCartItems.length} /> */}
      <ProductList products={products} addToCart={addToCart} />
    </ProductsWrapper>
  );
}

const ProductsWrapper = styled.div`
  padding: 16px;
`;
