let nums = [
  137, 482, 905, 364, 719, 256, 843, 691, 508, 274,
  916, 385, 742, 168, 529, 804, 657, 293, 471, 618,
  752, 389, 946, 214, 683, 571, 809, 432, 165, 997,
  348, 721, 584, 269, 910, 456, 673, 182, 845, 399,
  760, 524, 688, 291, 834, 157, 962, 410, 705, 378
]


let sum = 0;

let budget = 27816;

for (let i=0 ; i < nums.length; i++) {
    sum = sum + nums[i];
    console.log('current expense:' , sum);
}
budget= budget- sum ;
console.log( 'Reamining money:', budget);