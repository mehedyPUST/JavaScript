const numbers = [1, 2, 2, 9, 3, 4, 4, 5];

const strings = ["apple", "banana", "banana", "mango", "cherry", "grape", "grape", "orange"];



function duplicateRemover (arr) {
        const uniqueNumbers = [];

    for (let elementOfInput of arr ) {
        let isDuplicate = false;
        // console.log(elementOfInput);

        for ( let element of uniqueNumbers) {
            if (element === elementOfInput ) {
                isDuplicate = true;
                break;
            }
        }

        if (isDuplicate === false ) {
            uniqueNumbers.push(elementOfInput);
        }
    }

    return uniqueNumbers;
}

let result = duplicateRemover (numbers);
console.log(result);

let result2 = duplicateRemover (strings);
console.log(result2);