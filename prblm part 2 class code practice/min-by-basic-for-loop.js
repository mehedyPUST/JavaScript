const prices = [20000, 16000, 50000, 100000, 12000, 30000, 35000];


function minFinder(arr) {
    let min = arr[0];



    for ( let i = 0 ; i < arr.length; i++) {
        if ( arr[i] < min ) {
            min = arr[i];
        }

    }
    return min;
    
}
let minPrice = minFinder(prices);
console.log(minPrice);