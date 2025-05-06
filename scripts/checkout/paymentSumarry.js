import {cart} from "../../data/cart.js";
import { getDeliveryOption } from "../../data/deliveryOptions.js";
import { getProduct } from "../../data/products.js";
import {formatCurrency, formatToSar} from "../utils/money.js";




export function renderPaymentSummary(){

  let productPriceCents = 0;
  let shippingPriceCents = 0;

cart.forEach((cartItem) =>
{
  const product = getProduct(cartItem.productId);
  productPriceCents += product.priceCents * cartItem.Quantity;

  const deliveryOption = getDeliveryOption(cartItem.deliveryOptionsId);
 shippingPriceCents += deliveryOption.priceCents;
  });
  const totalBeforeTaxCents = productPriceCents + shippingPriceCents;
   const taxCents = totalBeforeTaxCents *0.1
  const totalcents = totalBeforeTaxCents + taxCents;

  const paymentSummaryHTML = `
   <div class="payment-summary-title">
            Order Summary
          </div>

          <div class="payment-summary-row">
            <div>Items (3):</div>
            <div class="payment-summary-money">SAR ${formatToSar(formatCurrency(productPriceCents))}</div>
          </div>

          <div class="payment-summary-row">
            <div>Shipping &amp; handling:</div>
            <div class="payment-summary-money">SAR ${formatToSar(formatCurrency(shippingPriceCents))}</div>
          </div>

          <div class="payment-summary-row subtotal-row">
            <div>Total before tax:</div>
            <div class="payment-summary-money">SAR ${formatToSar(formatCurrency(totalBeforeTaxCents))}</div>
          </div>

          <div class="payment-summary-row">
            <div>Estimated tax (10%):</div>
            <div class="payment-summary-money">SAR ${formatToSar(formatCurrency(taxCents))}</div>
          </div>

          <div class="payment-summary-row total-row">
            <div>Order total:</div>
            <div class="payment-summary-money"> SAR ${formatToSar(formatCurrency(totalcents))}</div>
          </div>

          <button class="place-order-button button-primary js-place-order-button">
           <a href = "https://wa.me/966536589391/?text=${cart}"> Place your order <a/>
          </button>`;
          
      document.querySelector('.js-payment-summary').innerHTML = paymentSummaryHTML;


      document.querySelector('.js-place-order-button').addEventListener('click', () => {
               

            });

};




