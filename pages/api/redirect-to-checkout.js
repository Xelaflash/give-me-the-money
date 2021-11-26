const stripe = require('stripe')(process.env.STRIPE_API_SECRET);
// eslint-disable-next-line import/no-unresolved
const { validateCartItems } = require('use-shopping-cart/utilities');

// instead of returning a session ID to the client side for redirectToCheckout,
// we can redirect serverside with the created sessions url (session.url)
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const inventory = require('../../data/products_data.json');

export default async (req, res) => {
  const cartDetails = JSON.parse(req.body.cartDetails);
  let product;

  try {
    product = validateCartItems(inventory, cartDetails);
  } catch (error) {
    res.status(400);
  }

  let lineItems;
  try {
    lineItems = product;
  } catch (error) {
    res.status(422).json({
      message: 'Some of the items in  your cart are invalid',
      error: error.message,
    });
  }

  let session;
  try {
    session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      billing_address_collection: 'auto',
      mode: 'payment',
      success_url: `${process.env.SITE_URL}/success`,
      cancel_url: `${process.env.SITE_URL}`,
      line_items: lineItems,
    });
  } catch (error) {
    res.status(500).json({
      message: 'While communicating with Stripe, we encountered an error.',
      error: error.message,
    });
  }

  res.redirect(302, session.url);
};
