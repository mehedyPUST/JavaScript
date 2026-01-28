// 8+4+1/2+1/8+.............................


let sum = 0;
let i = 32;
while (i>0.000000000000000001) {
    sum= sum+i;
    i=i/4;

}
console.log(sum);