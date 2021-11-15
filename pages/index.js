import { useEffect, useState } from 'react';
// next imports
import Head from 'next/head';
// import Image from 'next/image';

// styles imports
import styled from 'styled-components';
// import { COLORS, WEIGHTS } from '../styles/constants';

// components
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Products from '../components/Products';
import CartCount from '../components/CartCount';
import Cart from '../components/Cart';

export default function Home() {
  // set cart state here to be passed down to various component (CartCount, Cart && AddToCart)
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // retrieve cartItems from localStorage and put in state if items in storage
    const savedCartItems = JSON.parse(localStorage.getItem('cartItems'));
    if (savedCartItems) {
      setCartItems(savedCartItems);
    }
  }, []);

  // we set cartItems in local storage to persist data and to use this info in CartCount
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    setCartItems((oldCart) => [...oldCart, product]);
  };

  const removeFromCart = (index) => {
    setCartItems((oldCart) => [...oldCart.slice(0, index), ...oldCart.slice(index + 1)]);
  };

  return (
    <Layout>
      <div>
        <Head>
          <title>Give me the Money</title>
          <meta name="description" content="Give me the Money Website" />
          <link rel="icon" href="/favicon.ico" />;
        </Head>
        <main>
          {/* put cart here */}
          <CartCount count={cartItems.length} />
          <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
          <Hero />
          <PaymentWrapper />
          <Products addToCart={addToCart} />
        </main>
      </div>
    </Layout>
  );
}

const PaymentWrapper = styled.section``;

// TODO: To put in Footer
// <a
//   href="https://www.buymeacoffee.com/givemethe.money"
//   target="_blank"
//   rel="noreferrer"
// >
//   <Image
//     src="/images/bmc-button.png"
//     alt="Buy me a coffee button"
//     quality={75}
//     width={200}
//     height={56}
//     placeholder="blur"
//     blurDataURL
//   />
// </a>;
