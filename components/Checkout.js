import { useState } from 'react';

// Ext libs
// import {
//   CardElement,
//   Elements,
//   useElements,
//   useStripe,
// } from '@stripe/react-stripe-js';
// import { loadStripe } from '@stripe/stripe-js';
import nProgress from 'nprogress';

// styles
import styled from 'styled-components';
import { COLORS } from '../styles/constants';
import { AlertTriangle } from 'react-feather';

// utils
import { useCart } from '../utils/cartState';

// const stripeLib = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY);

function CheckoutForm() {
  // we need our own pice of state to show user something is currently happening
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  // stipe styles options
  const appearance = {
    theme: 'stripe',
      variables: {
    colorPrimary: '#0570de',
    colorBackground: '#ffffff',
    colorText: '#30313d',
    colorDanger: '#df1b41',
    fontFamily: 'Ideal Sans, system-ui, sans-serif',
    spacingUnit: '2px',
    borderRadius: '4px',
    // See all possible variables below
  }
  };
  
  // Hooks coming from stripe (https://stripe.com/docs/stripe-js/react)
  // const stripe = useStripe();
  // const elements = useElements({appearance});



  // close cart hook from cartState (in lib)
  const { closeCart } = useCart();

  async function handleSubmit(e) {
    // stop the form from submitting and turn loader on
    e.preventDefault();
    setLoading(true);

    // if (!stripe || !elements) {
    //   // Stripe.js has not yet loaded.
    //   // Make sure to disable form submission until Stripe.js has loaded.
    //   return;
    // }
    // start page transition
    nProgress.start();
    // const result = await stripe.createPaymentMethod({
    //   //`Elements` instance that was used to create the Payment Element
    //   type: 'card',
    //   card: elements.getElement(CardElement),
    //   confirmParams: {
    //     return_url: "/",
    //   },
    // });
    // console.log(paymentMethod);
    // handle stripe errors ()
    if (error) {
      setError(error);
      nProgress.done();
      console.log(result.error.message);
    } else {
      alert('Payment sucessful');
      console.log('Payment method:', paymentMethod);
      // ... POST: /api/charge/user  
    }
    // close cart
    closeCart();
    // turn loader off
    setLoading(false);
    nProgress.done();
  }

  return (
    <CheckoutFormStyles onSubmit={handleSubmit}>
      {error && (
        <div
          style={{
            fontSize: 14,
            color: 'red',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <AlertTriangle />
          <p>{error.message}</p>
        </div>
      )}
    
      <SickButton>Pay Now</SickButton>
    </CheckoutFormStyles>
  );
}

function Checkout() {
  return (
    <form action="/create-checkout-session" method="POST">
      <CheckoutForm />
    </form>
  );
}

const CheckoutFormStyles = styled.form`
  box-shadow: 0 1px 2px 2px rgba(38, 120, 95, 0.4);
  border: 1px solid rgba(38, 120, 95, 0.2);
  border-radius: 5px;
  padding: 1rem;
  display: grid;
  grid-gap: 1rem;
  font-size: 2rem;
  margin: 4rem auto;
`;

const SickButton = styled.button`
  background: ${COLORS.primary};
  color: white;
  font-weight: 500;
  border: 0;
  border-radius: 0;
  margin: 1rem 0;
  text-transform: uppercase;
  font-size: 2rem;
  padding: 0.8rem 1.5rem;
  transform: skew(-2deg);
  display: inline-block;
  transition: all 0.5s;
  cursor:pointer;
  &[disabled] {
    opacity: 0.5;
  }
`;




export { Checkout };