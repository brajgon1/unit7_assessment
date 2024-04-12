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
// 7 ms

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
// 5 ms

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
// 10 ms

// write a function, find_longest_word, that takes a list of words and returns the length of the longest one

function find_longest_word(words) {
    let longest = 0;
    for (let word of words) {
        if (word.length > longest) {
            longest = word.length;
        }
    }
    return longest;
}

const thisArray = ["Brandon", "Gonzalez", "Likes", "To", "Code"];
console.log(find_longest_word(thisArray));

// 16 ms
