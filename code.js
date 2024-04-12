
// Work through the following problems in Javascript (you have seen these problems before). Create a new file for your code. When you have finished with each function, leave a code comment with what you believe the runtime of your code to be.


// Write a function that takes in an array of numbers. The function should return True if any two numberss in list sum to 0, and false otherwise.
function isSumZero(nums){
    let numSet = new Set();
    for (let num of nums){
        if (numSet.has(-num)){
            return true;
        }
        numSet.add(num);
    }
    return false;
}

const array1 = [1, 2, 3, 4, 5];
console.log(isSumZero(array1));
const array2 = [1, 2, 3, -3];
console.log(isSumZero(array2));
// O(n)

// Write a function that takes in a single word, as a string. It should return True if that word contains only unique characters. Return False otherwise.

function hasUniqueCharacters(word) {
    let seenChars = new Set();
    for (let char of word) {
        if (seenChars.has(char)) {
            return false;
        }
        seenChars.add(char);
    }
    return true;
}

console.log(hasUniqueCharacters("hello"));
console.log(hasUniqueCharacters("world"));

// O(n^2)

// A pangram is a sentence that contains all the letters of the English alphabet at least once, like “The quick brown fox jumps over the lazy dog.”Write a function to check a sentence to see if it is a pangram or not.

function isPangram(sentence) {
    let letters = new Set();
    for (let char of sentence) {
        if (/[a-z]/.test(char)) {
            letters.add(char);
        }
    }
    return letters.size === 26;
}

console.log(isPangram("The quick brown fox jumps over the lazy dog."));
console.log(isPangram("Norm Mcdonald would have loved today so much"));
// O(n)
