const heights = [167, 190, 120, 165, 1, 0.5, 137];
const ages = [34, 18, 50, 12, 27];
const temperatures = [22.5, 19, 30, 16.2];


function lowestFinder (X) {
    let lowest = X[0];
    
    for ( let element  of X) {
        if ( lowest >  element) {
            lowest = element ;
        }
    }
    return lowest;
}
console.log(lowestFinder (heights));
console.log(lowestFinder (ages));
console.log(lowestFinder (temperatures));



