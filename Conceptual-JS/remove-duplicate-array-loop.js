const numbers = [1, 2, 2, 9, 3, 4, 4, 5];

const uniqueNumbers = [];

for (let number of numbers ) {
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

console.log(uniqueNumbers);