import { useEffect, useState } from 'react';
// next imports
import Head from 'next/head';
// import Image from 'next/image';

// styles imports
// import styled from 'styled-components';
// import { COLORS, WEIGHTS } from '../styles/constants';

// components
import Layout from '../components/Layout';
import Nav from '../components/Nav';
import Hero from '../components/Hero';
import Products from '../components/Products';
import Cart from '../components/Cart';

export default function Home() {
  // set cart state here to be passed down to various component (CartCount, Cart && AddToCart)
  const [cartItems, setCartItems] = useState([]);

  // useEffect(() => {
  //   // retrieve cartItems from localStorage and put in state if items in storage
  //   const savedCartItems = JSON.parse(localStorage.getItem('cartItems'));
  //   if (savedCartItems) {
  //     setCartItems(savedCartItems);
  //   }
  // }, []);

  // // we set cartItems in local storage to persist data and to use this info in CartCount
  // useEffect(() => {
  //   localStorage.setItem('cartItems', JSON.stringify(cartItems));
  // }, [cartItems]);

  const addToCart = (product) => {
    // will give an array of products (ids) in cart
    const IdOfItemInCart = cartItems.map((cartItem) => cartItem.product.id);
    // console.log(IdOfItemInCart);
    // check if product.product.id present in IdOfItemInCart array
    // will return a bool
    const ProductAlreadyInCart = IdOfItemInCart.includes(product.product.id);
    // console.log(ProductAlreadyInCart);
    // if false update qty
    if (ProductAlreadyInCart) {
      product.product.quantity += 1;
      //  !! TODO: Find a way replace old state by new one
      // below working but do not trigger cart update (visual)
      setCartItems(cartItems);
      console.log('Quantity updated:', cartItems);
    } else {
      // if true add item to cart
      setCartItems((oldCart) => [...oldCart, product]);
    }
  };

  const removeFromCart = (id) => {
    // find the Index of cartItem object to trash
    const ItemTodeleteIndex = cartItems.findIndex((ItemToDelete) => ItemToDelete.product.id === id);
    // setNew CartItems state
    setCartItems((oldCart) => [...oldCart.slice(0, ItemTodeleteIndex), ...oldCart.slice(ItemTodeleteIndex + 1)]);
  };

  return (
    <Layout>
      <div>
        <Head>
          <title>Give me the Money</title>
          <meta name="description" content="Give me the Money Website" />
          <link rel="icon" href="/favicon.ico" />;
        </Head>
        <Nav count={cartItems.length} />
        <main>
          <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
          <Hero />
          <Products addToCart={addToCart} />
        </main>
      </div>
    </Layout>
  );
}

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
