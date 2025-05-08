 export let cart =  JSON.parse(localStorage.getItem('cart') ) 
 
 if(!cart){
 cart = [ { productId:'1',
  Quantity: 2,
  deliveryOptionsId: '1'
},{
  productId:'2',
  Quantity: 1,  
  deliveryOptionsId: '2'
}

 ]};

 function saveToStorage(){
  localStorage.setItem('cart',JSON.stringify(cart))
 }


    

  export function addToCart(productId){
   let matchingItem;
   cart.forEach((cartItem) =>{
     if(productId === cartItem.productId){
      matchingItem  = cartItem ;
     }
   });
 
     if(matchingItem){
       matchingItem.Quantity += 1;
      } else {
       cart.push(          
           {
             productId: productId,
             Quantity: 1,
             deliveryOptions: '1'
           });
     };
 saveToStorage();
 }


 export function removeFromCart(productId ){
const newCart =[];

  cart.forEach((cartItem) => {
    if(cartItem.productId !== productId){
      newCart.push(cartItem);
    }

  });
 
cart = newCart;
saveToStorage();
};

export function updateDeliveryOption(productId, deliveryOptionsId){
  let matchingItem;
  cart.forEach((cartItem) => {
    if( productId === cartItem.productId){
      matchingItem = cartItem;
    }
  });

  matchingItem.deliveryOptionsId = deliveryOptionsId;
  saveToStorage();

};


