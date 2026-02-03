const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];


function lowestFinder (X) {
    let smallest = X[0].length;
     let smallestName  = X[0];


    for ( let element  of X) {
        
        if ( element.length < smallest   ) {
            smallest = element.length ;
            smallestName = element;
        }
    }
    return smallestName;
}
console.log(lowestFinder (heights2));