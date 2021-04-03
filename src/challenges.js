// Desafio 1
function compareTrue(value1, value2) {
  return value1 && value2;
}

// Desafio 2
function calcArea(base, heigth) {
  return (base * heigth) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}
// Desafio 4
function concatName(name) {
  let space = ', ';
  return name[name.length - 1] + space + name[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(numberArrays) {
  let numberM = 0;
  for (let index = 0; index < numberArrays.length; index += 1) {
    numberM = Math.max(...numberArrays);
  }
  let quantVezes = 0;
  for (let index = 0; index < numberArrays.length; index += 1) {
    quantVezes += numberArrays[index] === numberM;
  }
  return quantVezes;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let firstDistance = Math.abs(cat1 - mouse);
  let secundDistance = Math.abs(cat2 - mouse);
  let result = '';
  if (firstDistance < secundDistance) {
    result = 'cat1';
  } else if (firstDistance > secundDistance) {
    result = 'cat2';
  } else {
    result = 'Os gatos se trombam e o rato foge.';
  }
  return result;
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
