import {cart, addToCart, loadcart, } from '../data/cart.js';
import {products} from '../data/products.js';
import {formatCurrency , formatToSar} from './utils/money.js';  


updateCartQuantity();

let productsHTML = '';

products.forEach((product) =>{
productsHTML += 
`<div class="product-container">
<div class="product-image-container">
  <img class="product-image" 
    src="${product.image}">
</div>

<div class="product-name limit-text-to-2-lines">
${product.name}
</div>

<div class="product-rating-container">
  <img class="product-rating-stars"
    src="${product.getStarsUrl()}">
  <div class="product-rating-count link-primary">
    ${product.rating.count} 
  </div>
</div>

<div class="product-price">
  SAR ${formatToSar(product.getPrice())}
</div>

<div class="product-quantity-container">
  <select>
    <option selected value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
    <option value="6">6</option>
    <option value="7">7</option>
    <option value="8">8</option>
    <option value="9">9</option>
    <option value="10">10</option>
  </select>
</div>
${product.extraInfroHTML()}

<div class="product-spacer">
</div>

<div id="${product.id}" data-product-id ="${product.id}" class="added-to-cart">
  <img src="images/icons/checkmark.png">
  Added
</div>

<button class="add-to-cart-button js-add-to-cart-button button-primary" data-product-id = "${product.id}"}>
  + 
</button>
</div>
 `
}
);




function updateCartQuantity(){

  let cartQuantity = loadcart()? 0: 0

  cart.forEach(
    (cartItem) => {
    cartQuantity += cartItem.Quantity;
    }
  )


  document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;
}


function showCartMessage(productId) {

  const message = document.getElementById(`${productId}`);
  if (message) {
   

    // Show the message
    message.style.opacity = 1;
    message.style.visibility = 'visible';

    // Hide the message after 3 seconds
    setTimeout(() => {
      message.style.opacity = 0;
      message.style.visibility = 'hidden';
    }, 2000);
  }
}


document.querySelector('.js-products-grid').innerHTML = productsHTML;

document.querySelectorAll('.js-add-to-cart-button').forEach((button) => {
  button.addEventListener('click', () => {
    const productId= button.dataset.productId;
    addToCart(productId);
    updateCartQuantity();
    showCartMessage(productId)
   

  }    
  );
});



