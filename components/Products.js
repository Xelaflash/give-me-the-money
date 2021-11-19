import { useState } from 'react';
// styles imports
import styled from 'styled-components';

//  Data
import PRODUCT_DATA from '../data/products.js';
import ProductList from './ProductList';

export default function Products() {
  const [products] = useState(PRODUCT_DATA);
  return (
    <ProductsWrapper>
      <ProductList products={products} />
    </ProductsWrapper>
  );
}

const ProductsWrapper = styled.div`
  padding: 16px;
`;
