const products = [
    { name: 'shampoo', price: 300, quantity: 2 },
    { name: 'chiruni', price: 100, quantity: 3 },
    { name: 'shirt', price: 700, quantity: 5 },
    { name: 'pant', price: 1200, quantity: 1 },
]

const products2 = [
    { name: 'toothpaste', price: 150, quantity: 4 },
    { name: 'soap', price: 80, quantity: 6 },
    { name: 'jeans', price: 1200, quantity: 2 },
    { name: 't-shirt', price: 500, quantity: 3 },
    { name: 'detergent', price: 250, quantity: 1 },
];


function cartCostCalculator (arr) {
    let cartCost = 0 ; 
    let productCost;

    for ( let product of arr ) {
            productCost = product.price*product.quantity;
            cartCost = cartCost + productCost;
    }
    return cartCost;

}
let totalCost = cartCostCalculator (products2);
console.log(totalCost);