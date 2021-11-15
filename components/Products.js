import { useEffect, useState } from 'react';
// styles imports
import styled from 'styled-components';

//  Data
import PRODUCT_DATA from '../data/products';
import ProductList from './ProductList';

export default function Products({ addToCart }) {
  const [products] = useState(PRODUCT_DATA);

  return (
    <ProductsWrapper>
      <ProductList products={products} addToCart={addToCart} />
    </ProductsWrapper>
  );
}

const ProductsWrapper = styled.div`
  padding: 16px;
`;
