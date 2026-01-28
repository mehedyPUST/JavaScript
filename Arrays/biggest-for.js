// let ages = [18, 13, 25, 25 , 27 , 29 ,66, 34 , 28, 16, 15, 13 ,12];
// let max = ages[0];

// for (let i=1; i <ages.length; i++) {
//     if (ages[i] > max ) {
//         max = ages[i];
//     }
//     console.log(max);
// }

// console.log(max);


let nums = [
  137, 482, 905, 364, 719, 256, 843, 691, 508, 274,
  916, 385, 742, 168, 529, 804, 657, 293, 471, 618,
  752, 389, 946, 214, 683, 571, 809, 432, 165, 997,
  348, 721, 584, 269, 910, 456, 673, 182, 845, 399,
  760, 524, 688, 291, 834, 157, 962, 410, 705, 378
]
;
let max = nums [0];

for ( let i= 1 ; i < nums.length; i++) {
    if ( nums[i] > max) {
        max= nums[i]
    }
    console.log('Current Max:', max);
}
console.log(max);
