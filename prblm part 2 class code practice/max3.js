const disha = 97;
const salman = 95;
const kim = 98;




function maxfinder(x,y,z) {

    if (x>y && x>z) {
        max=x;
        return `Disha Gets the Max Marks : ${x}`;
    }

     else if (y>x && y>z) {
        max=y;
        return `Salman Gets the Max Marks : ${y}`;
    }


    else {
        max=z;
         return ` Kim Gets the Max Marks : ${z}`;
    }




}
let maxNum = maxfinder(disha,salman,kim);
console.log(maxNum);