import assert from 'assert';
import convertText2Smiles from '../';
import { LETTER_HEIGHT } from '../serift';

describe('Converting text to smiles:', () => {
  let result;

  it('convertText2Smiles should be defined', () => {
    assert(convertText2Smiles);
  });

  describe('Testing arguments:', () => {
    it('convertText2Smiles should returt empty value', () => {
      assert.ok(!convertText2Smiles());
      assert.equal(convertText2Smiles(), '');
    });

    describe('Testing with 1 argument, only text:', () => {
      beforeEach(() => {
        result = convertText2Smiles('ok');
      });

      it('convertText2Smiles should returt value with 1 argument', () => {
        assert.ok(result);
      });

      it('result should include 8 lines', () => {
        assert.equal(result.split('\n').length, LETTER_HEIGHT + 1);
      });
    });

    describe('Testing with 2 arguments, text with symbols: X', () => {
      beforeEach(() => {
        result = convertText2Smiles('ok', 'X');
      });

      it('convertText2Smiles should returt value with 2 arguments', () => {
        assert.ok(result);
      });

      it('result should include symbol X', () => {
        assert.ok(/X/.test(result));
      });
    });

    describe('Testing with 3 arguments, text with symbols: X and Y', () => {
      beforeEach(() => {
        result = convertText2Smiles('ok', 'X', 'Y');
      });

      it('convertText2Smiles should returt value with 3 arguments', () => {
        assert.ok(result);
      });

      it('result should include symbol X and Y', () => {
        assert.ok(/X/.test(result));
        assert.ok(/Y/.test(result));
      });
    });

    describe('Testing with 4 arguments, text with symbols: X and Y', () => {
      const LETTERS_IN_ROW = 1;
      const TEXT = 'ok';
      const ROWS_COUNT = ((TEXT.length / LETTERS_IN_ROW) * LETTER_HEIGHT);

      beforeEach(() => {
        result = convertText2Smiles('ok', 'X', 'Y', LETTERS_IN_ROW);
      });

      it('convertText2Smiles should returt value with 4 arguments', () => {
        assert.ok(result);
      });

      it('result should include symbol X and Y', () => {
        assert.ok(/X/.test(result));
        assert.ok(/Y/.test(result));
      });

      it(`result should include ${ROWS_COUNT} lines`, () => {
        assert.equal(result.split('\n').length, ROWS_COUNT);
      });

      it('result should be equal template', () => {
        let template = '';

        template += 'XXXXXX\n';
        template += 'XXYYXX\n';
        template += 'XYXXYX\n';
        template += 'XYXXYX\n';
        template += 'XYXXYX\n';
        template += 'XXYYXX\n';
        template += 'XXXXXX\n';
        template += 'XYXXYX\n';
        template += 'XYXYXX\n';
        template += 'XYYXXX\n';
        template += 'XYXYXX\n';
        template += 'XYXXYX\n';
        template += 'XXXXXX\n';

        assert.equal(result, template);
      });
    });
  });

  it('result should be equal template', () => {
    let template = '';

    template += ',,,,,,,,,,,,,,,,,,,,,\n';
    template += ',,@@,,,@,,,@,,,,@,,,,\n';
    template += ',,@@,,,@,,,@,,,,@,,,,\n';
    template += ',,@@,,,,,,,@,,,,@,,,,\n';
    template += ',,@@,,,,,,,@,,,,@,,,,\n';
    template += ',,@@,,,,,,,@@@@,@@@@,\n';
    template += ',,,,,,,,,,,,,,,,,,,,,\n';
    template += ',,,,,,@@@,,@@@@,,,,,,\n';
    template += ',,,,,,@,,@,@,,,,,,,,,\n';
    template += ',,,,,,@@@,,@@@,,,,,,,\n';
    template += ',,,,,,@,,@,@,,,,,,,,,\n';
    template += ',,,,,,@@@,,@@@@,,,,,,\n';
    template += ',,,,,,,,,,,,,,,,,,,,,\n';
    template += ',@@@,,,@@,,,@@@,@,,@,\n';
    template += ',@,,@,@,,@,@,,,,@,@,,\n';
    template += ',@@@,,@@@@,@,,,,@@,,,\n';
    template += ',@,,@,@,,@,@,,,,@,@,,\n';
    template += ',@@@,,@,,@,,@@@,@,,@,\n';
    template += ',,,,,,,,,,,,,,,,,,,,,\n';
    template += ',,,,,,,@@,,,@@,,,@@,,\n';
    template += ',,,,,,,@@,,,@@,,,@@,,\n';
    template += ',,,,,,,@@,,,@@,,,@@,,\n';
    template += ',,,,,,,,,,,,,,,,,,,,,\n';
    template += ',,,,,,,@@,,,@@,,,@@,,\n';
    template += ',,,,,,,,,,,,,,,,,,,,,\n';

    result = convertText2Smiles('I\'LL BE BACK^!!!', ',', '@', 4);

    assert.equal(result, template);
  });
});
