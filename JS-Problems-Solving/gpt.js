function vowelCounter(str) {
    const vowels = [];
    for (let i = 0; i < str.length; i++) {
        const char = str[i].toLowerCase();
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
            vowels.push(str[i]);
        }
    }
    console.log(vowels); // optional: see which vowels were counted
    return vowels.length;
}

const text = `A paragraph is a distinct, self-contained unit of writing comprising one or more sentences, all focused on a single, cohesive idea or topic. Typically structured with a topic sentence, supporting details, and a concluding sentence, they serve to organize longer prose, improve readability, and signal shifts in thought.`;

console.log(vowelCounter(text));
