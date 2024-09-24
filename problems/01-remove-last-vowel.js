/*
Write a function removeLastVowel(word) that takes in a string and returns the
string with its last vowel removed.
Vowels are the letters "a", "e", "i", "o", "u".
*/

// Your code here 
function removeLastVowel(word){
    let wordArr = word.split('');
    let lastIndex=null;
    let vowels='aeiou';
    for(let i=0; i<wordArr.length; i++){
        if(vowels.includes(wordArr[i]))
            lastIndex=i;
    }
    if(lastIndex){
        wordArr.splice(lastIndex,1);
        return wordArr.join('');
    }
    else
        return word;
}

console.log(removeLastVowel('bootcamp')); // 'bootcmp'
console.log(removeLastVowel('better')); // 'bettr'
console.log(removeLastVowel('graph')); // 'grph'
console.log(removeLastVowel('thy')); // 'thy'

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = removeLastVowel;
