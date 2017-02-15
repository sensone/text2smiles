import convertText2Smiles from '../../';

// should display the text above
console.log(convertText2Smiles('hello, world'));
console.log(convertText2Smiles('hello, world', '👀', '👍'));
console.log(convertText2Smiles('hello, world', '💀', '😡', 6));
console.log(convertText2Smiles('hello, world', '🙎', '💚', 16));
console.log(convertText2Smiles('   keep       calm      and use  text2smiles', '👳', '💘', 11));
