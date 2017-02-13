# Text 2 smiles

<p>
  <a href="https://www.npmjs.com/package/text2smiles"><img alt="NPM version" src="https://img.shields.io/npm/v/text2smiles.svg" /></a>
  <a href="https://david-dm.org/sensone/text2smiles"><img alt="Dependency Status" src="https://img.shields.io/david/sensone/text2smiles/master.svg" /></a>
  <a href="https://david-dm.org/sensone/text2smiles?type=dev"><img alt="Dev Dependency Status" src="https://img.shields.io/david/dev/sensone/text2smiles/master.svg" /></a>
  <a href="https://www.npmjs.com/package/text2smiles"><img alt="NPM Downloads" src="https://img.shields.io/npm/dm/text2smiles.svg" /></a>
</p>

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
