/**
 * upto 100: ---> 100
 * more than 101-200: --> 90
 * more than 200: --> 70
*/



function discountedPrice (quantity) {
    if (quantity <=100) {
        Price = 100*quantity;
    }

    else if  (quantity <=200) {
        Price = 90*quantity;
    }

    else {
        Price = 70*quantity;
    }

    return Price;
}
const totalPrice =  discountedPrice (100);
console.log(totalPrice);