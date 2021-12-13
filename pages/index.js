// next imports
import Head from 'next/head';
// lib
import styled from 'styled-components';
import { useShoppingCart } from 'use-shopping-cart';
// components
import Layout from '../components/Layout';
import Nav from '../components/Nav';
import Hero from '../components/Hero';
import Products from '../components/Products';
import Cart from '../components/Cart';
import TimelineSection from '../components/TimelineSection';
// import Spacer from '../components/Spacer';

export default function Home() {
  const { cartCount } = useShoppingCart();
  // !! Commented because i now use use-shopping-cart pkg but i struggled to get that working so i keep it for historical purpose
  // set cart state here to be passed down to various component (CartCount, Cart && AddToCart)
  // const [cartItems, setCartItems] = useState([]);
  // useEffect(() => {
  //   // retrieve cartItems from localStorage and put in state if items in storage
  //   // const cartData = JSON.parse(localStorage.getItem('cartItems'));
  //   // loadCart(cartData);
  //   // if (cartData) {
  //   //   setCartItems(cartData);
  //   // }
  // }, []);

  // // we set cartItems in local storage to persist data and to use this info in CartCount
  // useEffect(() => {
  //   localStorage.setItem('cartItems', JSON.stringify(cartItems));
  // }, [cartItems]);

  // const addToCart = (product) => {
  //   // will give an array of products (ids) in cart
  //   const IdOfItemInCart = cartItems.map((cartItem) => cartItem.product.id);
  //   // check if product.product.id present in IdOfItemInCart array
  //   // will return a bool
  //   const ProductAlreadyInCart = IdOfItemInCart.includes(product.product.id);
  //   // if false update qty
  //   if (ProductAlreadyInCart) {
  //     // 1.shallow copy of  array of items in state
  //     const cartItemsCopy = [...cartItems];
  //     // 1.1  find index of item to mutate
  //     const index = cartItemsCopy.findIndex((item) => item.product.id === product.product.id);
  //     //  2. copy of cartItem object to mutate
  //     const itemToMutateCopy = { ...cartItemsCopy[index] };
  //     //  update qty
  //     itemToMutateCopy.product.quantity += 1;
  //     // put back new updated object in Array of items
  //     cartItemsCopy[index] = itemToMutateCopy;
  //     // set the state to the new copy
  //     setCartItems(cartItemsCopy);
  //   } else {
  //     // if true add item to cart
  //     setCartItems((oldCart) => [...oldCart, product]);
  //   }
  // };

  // const removeFromCart = (id) => {
  //   // find the Index of cartItem object to trash
  //   const ItemTodeleteIndex = cartItems.findIndex((ItemToDelete) => ItemToDelete.product.id === id);
  //   // setNew CartItems state
  //   setCartItems((oldCart) => [...oldCart.slice(0, ItemTodeleteIndex), ...oldCart.slice(ItemTodeleteIndex + 1)]);
  // };

  return (
    <Layout>
      <div>
        <Head>
          <title>Give me the Money</title>
          <meta name='description' content='Give me the Money Website' />
          <link rel='icon' href='/favicon.ico' />;
        </Head>
        <Nav count={cartCount} />
        <MainStyles>
          <Cart />
          <LandingWrapper>
            <Hero />
            <Products />
            {/* <Spacer size={32} /> */}
          </LandingWrapper>
          <TimelineSection />
        </MainStyles>
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

const MainStyles = styled.main``;

const LandingWrapper = styled.section`
  scroll-snap-align: start;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url('/images/layered-waves.svg');
  min-height: 800px;
`;
