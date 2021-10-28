import { PropTypes } from 'prop-types';
import { useState, useContext, createContext } from 'react';

const LocalStateContext = createContext();
const LocalStateProvider = LocalStateContext.Provider;

function CartStateProvider({ children }) {
  // This is our own custom provider. It will store data (state) and functionality (updaters).
  // It can be accessed from other levels via the consumer.
  const [cartOpen, setCartOpen] = useState(false);

  function toggleCart() {
    setCartOpen(!cartOpen);
  }

  function closeCart() {
    setCartOpen(false);
  }

  function openCart() {
    setCartOpen(true);
  }

  return (
    <LocalStateProvider
      // any value will be available everywhere in the app
      value={{ cartOpen, setCartOpen, toggleCart, closeCart, openCart }}
    >
      {children}
    </LocalStateProvider>
  );
}

CartStateProvider.propTypes = {
  children: PropTypes.any,
};

//  we need a custom hook to access the cart local state from the  CartStateProvider
function useCart() {
  //  We use a CONSUMER to access local state (ie a provider needs a consumer to access data (local state)
  const all = useContext(LocalStateContext);
  return all;
}

export { CartStateProvider, useCart };
