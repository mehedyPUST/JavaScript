

function countDuplicates(numbers) {
    const dup =[];
    for ( let  num of numbers ) {
        
        if ( num === 25 ) {
            dup.push(num);
        }
        
    }
    console.log(dup);
    return dup.length;

}

console.log(countDuplicates(numbers = [5,6,11,12,98, 5]));
