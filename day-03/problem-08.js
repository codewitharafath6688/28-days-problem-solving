// Problem 8: Count Vowels in a String  [Easy]
// Description: Write a function countVowels(str) that counts and returns the number of vowels (a, e, i, o, u) in a string.

const countVowels = (str) => {
    let count = 0;
    let vowels = "aeiou"
    for(let al of str) {
        if(vowels.includes(al)) {
            count = count + 1;
        }
    }
    return count;
}

const result = countVowels("hello")

console.log(result);