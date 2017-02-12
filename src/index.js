import { ABC, LETTER_WIDTH, LETTER_HEIGHT } from './serift';

const STRING_LENGTH = 8;

export default function convertText2Smiles(text = '', symb1 = '🤘', symb2 = '💀', strLength = STRING_LENGTH) {
  if (!text.length) return text;

  function getLetter(symb, lineIndex) {
    let letter;

    switch (symb) {
      case "'":
        letter = ABC.quote;
        break;
      default:
        letter = ABC[symb];
    }

    if (!letter) {
      letter = ABC[' '];
    }

    return letter.slice((lineIndex * LETTER_WIDTH), (lineIndex * LETTER_WIDTH) + LETTER_WIDTH);
  }

  function generateLine(str, result = '') {
    let currentResult = result;
    const currentString = str.slice(0, strLength);
    const surplusString = str.slice(strLength);

    for (let lineIndex = 0; lineIndex < LETTER_HEIGHT; lineIndex += 1) {
      for (let letterIndex = 0; letterIndex < currentString.length; letterIndex += 1) {
        const letter = currentString[letterIndex];

        currentResult += getLetter(letter, lineIndex);
      }

      currentResult += '\n';
    }

    if (surplusString.length > 0) {
      return generateLine(surplusString, currentResult);
    }

    return currentResult;
  }

  return generateLine(text.toLowerCase()).replace(/\./g, symb1).replace(/\*/g, symb2);
}
