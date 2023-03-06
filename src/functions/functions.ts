

export const isPalindrom = (word :string) :boolean => {
    const lowerCaseWord =  word.toLowerCase();
    const reverseWord = lowerCaseWord.split('').reverse().join('');

    return lowerCaseWord === reverseWord;
     
}