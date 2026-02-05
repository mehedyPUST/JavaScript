const numbers = [1, 2, 2, 9, 3, 4, 4, 5];

const strings = ["apple", "banana", "banana", "mango", "cherry", "grape", "grape", "orange"];

const names = [
  "Alice", "Bob", "Bob", "Charlie", "David", "Eva", "Eva", "Frank",
  "Grace", "Hannah", "Hannah", "Ian", "Jack", "Kate", "Kate", "Leo",
  "Mia", "Nora", "Nora", "Oscar", "Paul", "Quinn", "Quinn", "Rita",
  "Sam", "Tina", "Tina", "Uma", "Vera", "Will", "Will", "Xander",
  "Yara", "Zane"
];


function duplicateRemover (input) {
        const uniqueNumbers = [];

    for (let elementOfInput of input ) {
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

let result3 = duplicateRemover (names);
console.log(result3);


console.log(names.length);
console.log(result3.length);

