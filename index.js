var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var newObject = {itemName: item, itemPrice: Math.floor(Math.random() * (101 - 0) + 0)};
  cart.push(newObject);
  return `${item} has been added to your cart.`;
}

function viewCart() {
  var cartArray = [];
  if (cart.length === 0) {
    return `Your shopping cart is empty.`;
  } else {
    for (var n = 0; n < cart.length; n++) {
      cartArray.push(` ${cart[n].itemName} at ${cart[n].itemPrice}`);
      [...cartArray.slice(0, n),` and`, ...cartArray.slice(n)];
    } return `In your cart, you have ${cartArray}.`;
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
