import { cart } from '../../data/cart.js';


export function updateCheckoutQuantity(){

  let cartQuantity = 0 ;

  cart.forEach(
    (cartItem) => {
    cartQuantity += cartItem.Quantity;
    }

  )
  

  document.querySelector('.js-checkout-header-middle-section').innerHTML = `Checkout <div class="cart-quantity"
          href="amazon.html">${cartQuantity} </div> `;



          
};



 