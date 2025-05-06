 export function formatCurrency(priceCents){
  return (Math.round(priceCents)/100).toFixed(2);
} 

export function formatToSar(priceDollar){
  return Math.round(((priceDollar)/0.27)).toFixed(2)

};
