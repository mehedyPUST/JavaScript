const marks = { Math: 78, English: 65, Physics: 88, Bangla: 55 };

function analyzeMarks(marksObj) {

    let total = 0 ; 
    
    let highestMark = -Infinity;
    let lowestMark = Infinity; 

    let highestSubject = null;
    let lowestSubject = null;

    for (let subject in marksObj) {
       // Dot notation does not work here because `subject` is a variable.
       // It holds dynamic property names (Math, English, etc.).
       // For dynamic object properties, bracket notation must be used.


        let mark = marksObj[subject];

        total = total + mark;

        if ( highestMark < mark  ) {
            
            highestMark = mark;
            highestSubject = subject;
        }


        if (lowestMark > mark ) {
            lowestMark = mark;
            lowestSubject = subject;
        }  
    }
    let averageMark = total / Object.keys(marksObj).length;
    return {total, averageMark, highestSubject, highestMark, lowestSubject, lowestMark  };

}
let output = analyzeMarks(marks);


console.log(output);



// const { total, averageMark, highestSubject, highestMark, lowestSubject, lowestMark } = output ;
// console.log(`Total: ${total}`);
// console.log(`Average: ${averageMark}`);
// console.log(`Top: ${highestSubject}`);
// console.log(`Top Subject ${highestSubject} Mark : ${highestMark}`);
// console.log(`Lowest: ${lowestSubject}`);
// console.log(`Lowest Subject ${lowestSubject} Mark : ${lowestMark}`);

