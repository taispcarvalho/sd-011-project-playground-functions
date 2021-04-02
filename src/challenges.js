// Desafio 1
function compareTrue(firstBool, secondBool) {
  return firstBool && secondBool;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(sentence) {
  return sentence.split(' ');
}

// Desafio 4
function concatName(arr) {
  return [arr[arr.length - 1], arr[0]].join(', ');
}

// Desafio 5
function footballPoints(wins, ties) {
  const winMultiplier = 3;
  return (wins * winMultiplier) + ties;
}

// Desafio 6
function highestCount(arr) {
  let highestNumber = Math.max(...arr);
  return arr.filter((value) => value === highestNumber).length;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let firstCat = Math.abs(mouse - cat1);
  let secondCat = Math.abs(mouse - cat2);
  if (firstCat < secondCat) return 'cat1';
  if (firstCat > secondCat) return 'cat2'; // Linter chorou com else :(
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(arr) {
  return arr.map((value) => {
    if (value % 3 === 0 && value % 5 === 0) return 'fizzBuzz';
    if (value % 3 === 0) return 'fizz';
    if (value % 5 === 0) return 'buzz';
    return 'bug!';
  });
}

// Desafio 9
function encode(str) {
  return str.replace(/[aeiou]/g, (m) => ' aeiou'.indexOf(m));
}

function decode(str) {
  return str.replace(/[1-5]/g, (m) => ' aeiou'[m]);
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
