function vowelCounter (myLines) {
    
    const vowels =[];
    
    for (let i = 0 ; i < myLines.length; i++) {
        if (myLines[i] === 'a' || myLines[i]=== 'e' || myLines[i]=== 'i' || myLines[i]=== 'o' || myLines[i]=== 'u' || myLines[i]=== 'A' || myLines[i]=== 'E' || myLines[i]=== 'I' || myLines[i]=== 'O' || myLines[i]=== 'U' ) {
            vowels.push(myLines[i]);
        }
    }
    console.log(vowels);
    return vowels.length;

}
console.log(vowelCounter(myLines = 'A paragraph is a distinct, self-contained unit of writing comprising one or more sentences, all focused on a single, cohesive idea or topic. Typically structured with a topic sentence, supporting details, and a concluding sentence, they serve to organize longer prose, improve readability, and signal shifts in thought. '));