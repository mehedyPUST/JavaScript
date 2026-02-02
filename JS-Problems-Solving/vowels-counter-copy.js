function vowelCounter (myLines) {
    const lower = myLines.toLowerCase();
    console.log(lower);
    const vowels =[];
    
    for ( let i = 0 ; i < lower.length; i++) {
        if (lower[i] === 'a' || lower[i]=== 'e' || lower[i]=== 'i' || lower[i]=== 'o' || lower[i]=== 'u' ) {
            vowels.push(lower[i]);
        }
    }
    console.log(vowels);
    return vowels.length;

}
console.log(vowelCounter(myLines = 'A paragraph is a distinct, self-contained unit of writing comprising one or more sentences, all focused on a single, cohesive idea or topic. Typically structured with a topic sentence, supporting details, and a concluding sentence, they serve to organize longer prose, improve readability, and signal shifts in thought. '));