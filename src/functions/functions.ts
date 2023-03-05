

export const isPalindrom = (word) => {
    const lowerCaseWord =  word.toLowerCase();
    const reverseWord = lowerCaseWord.split('').reverse().join('');

    return lowerCaseWord === reverseWord;
     
}