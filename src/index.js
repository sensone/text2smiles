import { ABC, LETTER_WIDTH, LETTER_HEIGHT } from './serift';

const STRING_LENGTH = 8;

export default function convertText2Smiles(text = '', bgSymbol = '🤘', textSymbol = '💀', strLength = STRING_LENGTH) {
  if (!text.length) return text;

  function getLetter(symb, lineIndex) {
    let letter;
    const POSITION = lineIndex * LETTER_WIDTH;

    switch (symb) {
      case "'":
      case '"':
        letter = ABC.quote;
        break;
      default:
        letter = ABC[symb];
    }

    if (!letter) {
      letter = ABC[' '];
    }

    return letter.slice(POSITION, POSITION + (LETTER_WIDTH - 1));
  }

  function generateLine(str, result = '', secondLine = false) {
    let currentResult = result;
    const currentString = str.slice(0, strLength);
    const surplusString = str.slice(strLength);

    for (let lineIndex = secondLine ? 1 : 0; lineIndex < LETTER_HEIGHT; lineIndex += 1) {
      for (let letterIndex = 0; letterIndex < currentString.length; letterIndex += 1) {
        const letter = currentString[letterIndex];

        currentResult += getLetter(letter, lineIndex);
      }

      currentResult += `${bgSymbol}\n`;
    }

    if (surplusString.length > 0) {
      return generateLine(surplusString, currentResult, true);
    }

    return currentResult;
  }

  return generateLine(text.toLowerCase()).replace(/\./g, bgSymbol).replace(/\*/g, textSymbol);
}
