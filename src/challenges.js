// Desafio 1
function compareTrue(param1, param2) {
  return param1 && param2;
}

console.log(compareTrue(true, true));

// Desafio 2
function calcArea(base, altura) {
  return (base * altura) / 2;
}

console.log(calcArea(5, 2));

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

console.log(splitSentence('foguete marlon'));

// Desafio 4
let arrr = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];

function concatName(arr) {
  return arr[arr.length - 1].concat(', ', arr[0]);
}

console.log(concatName(arrr));

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}

console.log(footballPoints(7, 2));

// Desafio 6
function highestCount(arrNumber) {
  let nMaior = 0;
  let qRepeat = 0;

  for (let i = 0; i < arrNumber.length; i += 1) {
    if (arrNumber[i] >= nMaior) {
      nMaior = arrNumber[i];
    }
  }

  for (let i = 0; i < arrNumber.length; i += 1) {
    if (nMaior === arrNumber[i]) {
      qRepeat += 1;
    }
  }

  return qRepeat;
}

let numberr = [0, 4, 4, 4, 9, 2, 1];
console.log(highestCount(numberr));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let finish = '';
  let m = mouse;

  let calc1 = m - cat1;
  let calc2 = m - cat2;

  if (calc1 > calc2) {
    finish = 'cat1';
  } else if (calc2 > calc1) {
    finish = 'cat2';
  } else {
    finish = 'os gatos trombam e o rato foge';
  }

  return finish;
}

console.log(catAndMouse(14, 12, 15));

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
