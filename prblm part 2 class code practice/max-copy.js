const disha = 97;
const salman = 95;



function maxfinder(x,y) {
    let max;
    
    if (x>y) {
        max=x;
        return `Disha Gets the Max Marks : ${x}`;
    }

    else {
        max=y;
         return `Salman Gets the Max Marks : ${y}`;
    }


}
let maxNum = maxfinder(disha,salman);
console.log(maxNum);