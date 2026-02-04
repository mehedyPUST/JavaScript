function wordFrequencyCounter(sentence) {

    let wordFrequency = {};
    let lowerCasedSentence = sentence.toLowerCase();
    let trimmedSentence = lowerCasedSentence.trim();
    let words = trimmedSentence.split(/\s+/);
    // return words;

    for (let word of words) {
        wordFrequency[word] = (wordFrequency[word] || 0) + 1;
    }
    return wordFrequency;


}
let result = wordFrequencyCounter("I love LOve js and is  jS and I love coding  and JS is fun Fun fUn");
console.log(result);