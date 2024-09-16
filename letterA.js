function countLetterA(str) {
  const letterARegex = /a/gi;
  const lettersA = str.match(letterARegex);

  if (!lettersA) {
    return 0;
  }

  return lettersA.length;
}


const word1 = 'abracadabra';

const word2 = 'oie'


const retult = countLetterA(word2);

console.log(retult);