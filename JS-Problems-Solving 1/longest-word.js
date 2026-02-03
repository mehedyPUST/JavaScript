function findLongestWord (Sample) {
    const words = Sample.split(' ');
    console.log(words);
    let longestWord = '';
    let maxLength = 0 ; 

    for ( let word of words) {
        if ( word.length > maxLength) {
            maxLength = word.length;
            longestWord = word;
            // console.log(word);
        }
        
    }
    return longestWord;
   

}

const input =  'I am learning Programming to become a programmer';
console.log(findLongestWord(input));