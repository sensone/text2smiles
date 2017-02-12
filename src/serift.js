const A = `
......
..**..
.*..*.
.****.
.*..*.
.*..*.
......
`;

const B = `
......
.***..
.*..*.
.***..
.*..*.
.***..
......
`;

const C = `
......
..***.
.*....
.*....
.*....
..***.
......
`;

const D = `
......
.***..
.*..*.
.*..*.
.*..*.
.***..
......
`;

const E = `
......
.****.
.*....
.***..
.*....
.****.
......
`;

const F = `
......
.****.
.*....
.***..
.*....
.*....
......
`;

const G = `
......
..***.
.*....
.*.**.
.*..*.
..***.
......
`;

const H = `
......
.*..*.
.*..*.
.****.
.*..*.
.*..*.
......
`;

const I = `
......
..**..
..**..
..**..
..**..
..**..
......
`;

const J = `
......
....*.
....*.
....*.
.*..*.
..**..
......
`;

const K = `
......
.*..*.
.*.*..
.**...
.*.*..
.*..*.
......
`;

const L = `
......
.*....
.*....
.*....
.*....
.****.
......
`;

const M = `
......
.*..*.
.****.
.*..*.
.*..*.
.*..*.
......
`;

const N = `
......
.*..*.
.*..*.
.**.*.
.*.**.
.*..*.
......
`;

const O = `
......
.****.
.*..*.
.*..*.
.*..*.
.****.
......
`;

const P = `
......
.***..
.*..*.
.***..
.*....
.*....
......
`;

const Q = `
......
..**..
.*..*.
.*..*.
.*.**.
.****.
......
`;

const R = `
......
.***..
.*..*.
.***..
.*.*..
.*..*.
......
`;

const S = `
......
..***.
.*....
..**..
....*.
.***..
......
`;

const T = `
......
.****.
..**..
..**..
..**..
..**..
......
`;

const U = `
......
.*..*.
.*..*.
.*..*.
.*..*.
.****.
......
`;

const V = `
......
.*..*.
.*..*.
.*..*.
.*..*.
..**..
......
`;

const W = `
......
.*..*.
.*..*.
.*..*.
.****.
..**..
......
`;

const X = `
......
.*..*.
.*..*.
..**..
.*..*.
.*..*.
......
`;

const Y = `
......
.*..*.
.*..*.
.****.
....*.
.****.
......
`;

const Z = `
......
.****.
....*.
...*..
..*...
.****.
......
`;

const POINT = `
......
......
......
......
......
.*....
......
`;

const SPACE = `
......
......
......
......
......
......
......
`;

const COMMA = `
......
......
......
......
.*....
.*....
......
`;

const EXCLAMATION = `
......
..**..
..**..
..**..
......
..**..
......
`;

const QUESTION = `
......
.***..
....*.
.***..
......
.*....
......
`;

const QUOTE = `
......
..*...
..*...
......
......
......
......
`;

const ONE = `
......
....*.
...**.
..*.*.
....*.
....*.
......
`;

const TWO = `
......
..**..
.*..*.
....*.
...*..
.****.
......
`;

const THREE = `
......
..**..
.*..*.
...*..
.*..*.
..**..
......
`;

const FOUR = `
......
.*..*.
.*..*.
.****.
....*.
....*.
......
`;

const FIVE = `
......
.****.
.*....
.***..
....*.
.***..
......
`;

const SIX = `
......
.****.
.*....
.****.
.*..*.
.****.
......
`;

const SEVEN = `
......
.****.
....*.
...*..
...*..
...*..
......
`;

const EIGHT = `
......
..**..
.*..*.
..**..
.*..*.
..**..
......
`;

const NINE = `
......
.****.
.*..*.
.****.
....*.
.****.
......
`;

const COLON = `
......
......
..*...
......
..*...
......
......
`;

const END_OF_STRING_REG = /\n/g;
const LETTER_WIDTH = 6;
const LETTER_HEIGHT = 7;

const ABC = {
  a: A.replace(END_OF_STRING_REG, ''),
  b: B.replace(END_OF_STRING_REG, ''),
  c: C.replace(END_OF_STRING_REG, ''),
  d: D.replace(END_OF_STRING_REG, ''),
  e: E.replace(END_OF_STRING_REG, ''),
  f: F.replace(END_OF_STRING_REG, ''),
  g: G.replace(END_OF_STRING_REG, ''),
  h: H.replace(END_OF_STRING_REG, ''),
  i: I.replace(END_OF_STRING_REG, ''),
  j: J.replace(END_OF_STRING_REG, ''),
  k: K.replace(END_OF_STRING_REG, ''),
  l: L.replace(END_OF_STRING_REG, ''),
  m: M.replace(END_OF_STRING_REG, ''),
  n: N.replace(END_OF_STRING_REG, ''),
  o: O.replace(END_OF_STRING_REG, ''),
  p: P.replace(END_OF_STRING_REG, ''),
  q: Q.replace(END_OF_STRING_REG, ''),
  r: R.replace(END_OF_STRING_REG, ''),
  s: S.replace(END_OF_STRING_REG, ''),
  t: T.replace(END_OF_STRING_REG, ''),
  u: U.replace(END_OF_STRING_REG, ''),
  v: V.replace(END_OF_STRING_REG, ''),
  w: W.replace(END_OF_STRING_REG, ''),
  x: X.replace(END_OF_STRING_REG, ''),
  y: Y.replace(END_OF_STRING_REG, ''),
  z: Z.replace(END_OF_STRING_REG, ''),
  ' ': SPACE.replace(END_OF_STRING_REG, ''),
  '.': POINT.replace(END_OF_STRING_REG, ''),
  ',': COMMA.replace(END_OF_STRING_REG, ''),
  '!': EXCLAMATION.replace(END_OF_STRING_REG, ''),
  '?': QUESTION.replace(END_OF_STRING_REG, ''),
  0: O.replace(END_OF_STRING_REG, ''),
  1: ONE.replace(END_OF_STRING_REG, ''),
  2: TWO.replace(END_OF_STRING_REG, ''),
  3: THREE.replace(END_OF_STRING_REG, ''),
  4: FOUR.replace(END_OF_STRING_REG, ''),
  5: FIVE.replace(END_OF_STRING_REG, ''),
  6: SIX.replace(END_OF_STRING_REG, ''),
  7: SEVEN.replace(END_OF_STRING_REG, ''),
  8: EIGHT.replace(END_OF_STRING_REG, ''),
  9: NINE.replace(END_OF_STRING_REG, ''),
  quote: QUOTE.replace(END_OF_STRING_REG, ''),
  ':': COLON.replace(END_OF_STRING_REG, ''),
};

export {
  ABC,
  LETTER_WIDTH,
  LETTER_HEIGHT,
};
