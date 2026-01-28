// let expenses = [
//   137, 482, 905, 364, 719, 256, 843, 691, 508, 274,
//   916, 385, 742, 168, 529, 804, 657, 293, 471, 618,
//   752, 389, 946, 214, 683, 571, 809, 432, 165, 997,
//   348, 721, 584, 269, 910, 456, 673, 182, 845, 399,
//   760, 524, 688, 291, 834, 157, 962, 410, 705, 378
// ]

// let budget = 27816;

// let i = 0 ; 

// while ( budget > 0 && i < expenses.length ) {
//     budget = budget - expenses[i];
//     i= i+1 ;

// }
// console.log('Remaining Budget:', budget);




let expenses = [
  137, 482, 905, 364, 719, 256, 843, 691, 508, 274,
  916, 385, 742, 168, 529, 804, 657, 293, 471, 618,
  752, 389, 946, 214, 683, 571, 809, 432, 165, 997,
  348, 721, 584, 269, 910, 456, 673, 182, 845, 399,
  760, 524, 688, 291, 834, 157, 962, 410, 705, 378
]

let budget = 30000;


let totalExpense = 0;

let i = 0 ; 

while ( i < expenses.length ) {
    totalExpense = totalExpense + expenses[i];
    i= i+1 ;
    console.log( 'current expense :', totalExpense)

}
let remainingBudget =  budget -totalExpense;
console.log('Remaining Budget:', remainingBudget);




