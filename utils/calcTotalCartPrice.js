export default function calcTotalCartPrice(cartItems) {
  return cartItems.reduce((tally, cartItem) => {
    if (!cartItem.product) return tally; // product can be deleted but still in your cart.
    return tally + cartItem.product.quantity * cartItem.product.price;
  }, 0);
}
