 
 const items = ["pen", "pen", "book", "pen"];
 let itemCount = {};

    for ( let item of items) {
    itemCount[item] = (itemCount[item] || 0) + 1;
    } 

    console.log(itemCount);