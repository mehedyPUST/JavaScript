// const numbers = [1, 2, 2, 9, 3, 4, 4, 5];

const strings = ["apple", "banana", "banana", "mango", "cherry", "grape", "grape", "orange"];



function duplicateRemover (arr) {
        const uniqueNumbers = [];

    for (let number of arr ) {
        let isDuplicate = false;
        console.log(number);

        for ( let element of uniqueNumbers) {
            if (element === number ) {
                isDuplicate = true;
                break;
            }
        }

        if (isDuplicate === false ) {
            uniqueNumbers.push(number);
        }
    }

    return uniqueNumbers;
}

let result = duplicateRemover (strings);
console.log(result);