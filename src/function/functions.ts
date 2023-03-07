//
// ata  => ata  -> true;
// cata => atac  -> false;

export const isPolindrom = (word : string ) :boolean=>{

    const lowerCase = word.toLowerCase();
    const reverseWord =  lowerCase.split('').reverse().join('');
   
    return lowerCase  === reverseWord
}