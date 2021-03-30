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
  let firstValue = arr[0];
  let lastValue = arr[arr.length - 1];
  return `${firstValue}, ${lastValue}`;
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
  if (firstCat > secondCat) return 'cat2'; // Linter não permite else if :(
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(arr) {
  return arr.map((value) => {
    let response;
    if (value % 3 === 0 && value % 5 === 0) response = 'fizzBuzz';
    else if (value % 3 === 0) response = 'fizz';
    else if (value % 5 === 0) response = 'buzz';
    else response = 'bug!';
    return response;
  });
}

// Desafio 9
function encode(str) {
  const vowels = ' aeiou';
  return str.replace(/[aeiou]/g, (m) => vowels.indexOf(m));
}

function decode(str) {
  const vowels = ' aeiou';
  return str.replace(/[1-5]/g, (m) => vowels[m]);
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
