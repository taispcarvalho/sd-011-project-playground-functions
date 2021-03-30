// Desafio 1
function compareTrue(value1, value2) {
    return value1 === true && value2 === true ? true : false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(array) {
  return array.filter((e, i) => i === 0 || i === array.length - 1);
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties * 1);
}

// Desafio 6
function highestCount(array) {
  let ordemArray = array.sort(function orderArray(a, b) { return a - b ;})

  let sumRepeatLargestNumber = 0;

  for(let i = 1; i <= ordemArray.length; i += 1) {
    if (ordemArray[i] === ordemArray[i + 1]) {
      sumRepeatLargestNumber += 1;
    }
  }
  return sumRepeatLargestNumber;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  return cat1 === cat2 ? 'os gatos trombam e o rato foge' : (cat1 - mouse) > (cat2 - mouse) ? 'cat2' : 'cat1';
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
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
