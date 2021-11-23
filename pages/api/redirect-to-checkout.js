// const stripe = require('stripe')(process.env.REACT_APP_STRIPE_API_SECRET);
// import { validateCartItems } from 'use-shopping-cart/utilities';
// import inventory from '../data/products_data.json';

// exports.handler = async (event) => {
//   let product
//   try {
//     product = JSON.parse(event.body)
//   } catch (error) {
//     return {
//       statusCode: 400,
//       body: JSON.stringify({
//         message: 'Received malformed JSON.',
//         error: error.message
//       })
//     }
//   }

//   let line_items
//   try {
//     line_items = validateCartItems(inventory, product)
//   } catch (error) {
//     return {
//       statusCode: 422,
//       body: JSON.stringify({
//         message: 'Some of the items in your cart are invalid.',
//         error: error.message
//       })
//     }
//   }

//   let session
//   try {
//     session = await stripe.checkout.sessions.create({
//       mode: 'payment',
//       payment_method_types: ['card'],
//       billing_address_collection: 'auto',
//       shipping_address_collection: {
//         allowed_countries: ['US', 'CA']
//       },
//       mode: 'payment',
//       success_url: `${process.env.URL}/success.html`,
//       cancel_url: process.env.URL,
//       line_items
//     })
//   } catch (error) {
//     return {
//       statusCode: 500,
//       body: JSON.stringify({
//         message: 'While communicating with Stripe, we encountered an error.',
//         error: error.message
//       })
//     }
//   }
  
//   return {
//     statusCode: 200,
//     body: JSON.stringify({ sessionId: session.id })
//   }
// }

const stripe = require('stripe')(process.env.STRIPE_API_SECRET);
const validateCartItems =
  require('use-shopping-cart/utilities').validateCartItems;

// instead of returning a session ID to the client side for redirectToCheckout,
// we can redirect serverside with the created sessions url (session.url)

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async (req, res) => {
  const cartDetails = req.body;
  console.log(cartDetails);
  const inventory = require('../../data/products_data.json');
  const line_items = validateCartItems(inventory, cartDetails);

  let session;
  try {
    session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      billing_address_collection: 'auto',
      shipping_address_collection: {
        allowed_countries: ['US', 'CA'],
      },
      mode: 'payment',
      success_url: `${process.env.SITE_URL}/success`,
      cancel_url: `${process.env.SITE_URL}`,
      line_items,
    });
  } catch (error) {
    res.status(500).json({
      message: 'While communicating with Stripe, we encountered an error.',
      error: error.message,
    });
  }

  res.redirect(302, session.url);
};