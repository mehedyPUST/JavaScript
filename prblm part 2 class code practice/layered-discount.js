/**
 * upto 100: ---> 100
 * more than 101-200: --> 90
 * more than 200: --> 70
*/



function layeredDiscountCalculator(quantity) {

    const first100Price = 100;
    const second100Price = 90;
    const above200Price = 70;

    let totalPrice = 0;
    
    if (quantity <= 100) {
        totalPrice = first100Price*quantity;
    }

    else if ( quantity <= 200) {
        totalPrice = first100Price*100 + second100Price*(quantity-100);
    }

    else {
        totalPrice = first100Price*100 + 100*second100Price + above200Price*(quantity-200);
    }

    return totalPrice;
}

let discountedPrice = layeredDiscountCalculator(270);
console.log(discountedPrice);
