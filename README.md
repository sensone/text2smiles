# Text 2 smiles

[![Build Status](https://travis-ci.org/sensone/text2smiles.svg?branch=master)](https://travis-ci.org/sensone/text2smiles)  [![codecov](https://codecov.io/gh/sensone/text2smiles/branch/master/graph/badge.svg)](https://codecov.io/gh/sensone/text2smiles) [![NPM version](https://img.shields.io/npm/v/text2smiles.svg)](https://www.npmjs.com/package/text2smiles) [![Dependency Status](https://img.shields.io/david/sensone/text2smiles/master.svg)](https://david-dm.org/sensone/text2smiles) [![Dev dependency Status](https://img.shields.io/david/dev/sensone/text2smiles/master.svg)](https://david-dm.org/sensone/text2smiles?type=dev) [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/) [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

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
import convertText2Smiles from 'text2smiles';

// should display the text above
console.log(convertText2Smiles('hello, world', '👀', '🌚', 6));

```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
