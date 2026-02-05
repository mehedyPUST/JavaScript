// const items = ["egg", "egg", "rice", "oil", "egg", "sugar"];
// const prices = {oil: 180, egg: 12, sugar: 90 ,  rice: 70};

const prices = { pen: 10, book: 50 };
const items = ["pen", "pen", "book", "pen"];


function cartCostCalculator (items,prices) {

    let itemCount = {};

    for ( let item of items) {
    itemCount[item] = (itemCount[item] || 0) + 1;
    } 

    console.log(itemCount);



    let cartCost = 0; 

    for ( let item in itemCount ) {
        let price = prices[item] * itemCount[item];
        cartCost = cartCost + price ;
    }
    return cartCost;


}

let result =  cartCostCalculator (items,prices);
console.log(result);