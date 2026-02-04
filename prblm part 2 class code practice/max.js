const disha = 56;
const salman = 95;


function maxfinder(x,y) {
    let max;
    
    if (x>y) {
        max=x;
    }

    else {
        max=y;
    }
    return max;


}
let maxNum = maxfinder(disha,salman);
console.log(maxNum);