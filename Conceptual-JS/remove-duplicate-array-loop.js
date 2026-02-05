const numbers = [1, 2, 2, 9, 3, 4, 4, 5];

const uniqueNumbers = [];

for (let number of numbers ) {
    let isDuplicate = false;

    for ( let num of uniqueNumbers) {
        if (number === num) {
            isDuplicate = true;
            break;
        }
    }

    if (isDuplicate === false ) {
        uniqueNumbers.push(number);
    }
}

console.log(uniqueNumbers);