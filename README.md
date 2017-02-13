# Text 2 smiles

Special text converter for easy converting text to something like this:

```
👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀
👀🌚👀👀🌚👀🌚🌚🌚🌚👀🌚👀👀👀👀🌚👀👀👀👀👀🌚🌚👀👀👀👀👀👀👀
👀🌚👀👀🌚👀🌚👀👀👀👀🌚👀👀👀👀🌚👀👀👀👀🌚👀👀🌚👀👀👀👀👀👀
👀🌚🌚🌚🌚👀🌚🌚🌚👀👀🌚👀👀👀👀🌚👀👀👀👀🌚👀👀🌚👀👀👀👀👀👀
👀🌚👀👀🌚👀🌚👀👀👀👀🌚👀👀👀👀🌚👀👀👀👀🌚👀👀🌚👀🌚👀👀👀👀
👀🌚👀👀🌚👀🌚🌚🌚🌚👀🌚🌚🌚🌚👀🌚🌚🌚🌚👀👀🌚🌚👀👀🌚👀👀👀👀
👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀
👀👀👀👀👀👀🌚👀👀🌚👀👀🌚🌚👀👀🌚🌚🌚👀👀🌚👀👀👀👀🌚🌚🌚👀👀
👀👀👀👀👀👀🌚👀👀🌚👀🌚👀👀🌚👀🌚👀👀🌚👀🌚👀👀👀👀🌚👀👀🌚👀
👀👀👀👀👀👀🌚👀👀🌚👀🌚👀👀🌚👀🌚🌚🌚👀👀🌚👀👀👀👀🌚👀👀🌚👀
👀👀👀👀👀👀🌚🌚🌚🌚👀🌚👀👀🌚👀🌚👀🌚👀👀🌚👀👀👀👀🌚👀👀🌚👀
👀👀👀👀👀👀👀🌚🌚👀👀👀🌚🌚👀👀🌚👀👀🌚👀🌚🌚🌚🌚👀🌚🌚🌚👀👀
👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀
```

## Installing

```
npm install text2smiles --save
```

### How to use

```javascript
convertText2Smiles(text, [backgroundSmile = '🤘', textSmile = '💀', countSymbolsOnTheRow = 8]);

```
### Example

```javascript
// var convertText2Smiles = require('text2smiles').default;
import convertText2Smiles from 'text-of-smiles';

// should display the text above
console.log(convertText2Smiles('hello, world', '👀', '🌚', 6));

```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
