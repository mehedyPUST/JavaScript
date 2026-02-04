const products = [
    { name: 'shampoo', price: 300, quantity: 2 },
    { name: 'chiruni', price: 100, quantity: 3 },
    { name: 'shirt', price: 700, quantity: 5 },
    { name: 'pant', price: 1200, quantity: 1 },
]


function cartCostCalculator (arr) {
    let cartCost = 0 ; 
    let productCost;

    for ( let product of arr ) {
        for (let key in product) {
            productCost = product.price*product.quantity;
        }
        cartCost = cartCost + productCost;
    }
    return cartCost;





}
let totalCost = cartCostCalculator (products);
console.log(totalCost);