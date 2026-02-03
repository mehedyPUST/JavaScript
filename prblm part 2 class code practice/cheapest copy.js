const phones = [
    { name: 'Samsung', price: 20000, camera: '12mp', color: 'black' },
    { name: 'xoami', price: 18000, camera: '12mp', color: 'black' },
    { name: 'Oppo', price: 30000, camera: '12mp', color: 'black' },
    { name: 'Iphone', price: 100000, camera: '12mp', color: 'black' },
    { name: 'Walton', price: 3000, camera: '12mp', color: 'black' },
    { name: 'HTC', price: 27000, camera: '12mp', color: 'black' },
]

function cheapestFinder (arr) {

let cheapestPrice = arr[0].price;

let cheapestPhone= arr[0];

for ( let element of arr) {
    if ( element.price < cheapestPrice) {
       
         cheapestPhone = element;

    }
    
}
return cheapestPhone;
}
const cheapest = cheapestFinder (phones);
console.log("Cheapest Phone: " + cheapest.name);
console.log("Details: ", cheapest);