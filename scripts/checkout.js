import {updateCheckoutQuantity} from "./checkout/checkoutItems.js";
import { renderOrderSummary } from "./checkout/orderSummary.js";  

import {renderPaymentSummary} from "./checkout/paymentSumarry.js"

//import '../data/cart-class.js';


renderOrderSummary();
renderPaymentSummary(); 
updateCheckoutQuantity(); // Update the checkout quantity in the header
