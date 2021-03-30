// Desafio 1
function compareTrue(valor1, valo2) {
  return valor1 && valo2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(word) {
  return word.split(' ');
}

// Desafio 4
function concatName(names) {
  let firstAndLast = [];
  firstAndLast.push(names[names.length - 1], ' ' + names[0]);
  return firstAndLast.toString();
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties);
}

// Desafio 6
function highestCount(numbers) {
  let higherNum = 0;
  let timesNum = 0;
  for (let index = 0; index < numbers.length; index +=1) {
    if (numbers[index] > higherNum) {
      higherNum = numbers[index];
    }
  }
  for (index = 0; index < numbers.length; index +=1) {
    if (numbers[index] === higherNum) {
      timesNum += 1;
    }
  }
  return timesNum;
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
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
