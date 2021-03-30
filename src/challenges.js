// Desafio 1
function compareTrue(cond1, cond2) {
  // seu código aqui
  return cond1 && cond2;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  return (string.split(' '));
}

// Desafio 4
function concatName(array) {
  // seu código aqui
  return (`${array[0]}, ${array[array.length - 1]}`);
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return ((wins * 3) + ties);
}

// Desafio 6
function highestCount(array) {
  // seu código aqui
  let highestNumber = array[0];
  let highestNumberCount = 0;
  for (let n of array) {
    if (n > highestNumber) {
      highestNumber = n;
      highestNumberCount = 0;
    }
    if (n === highestNumber) {
      highestNumberCount += 1;
    }
  }
  return highestNumberCount;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let difMouseCat1 = mouse - cat1;
  let difMouseCat2 = mouse - cat2;
  if (difMouseCat1 < difMouseCat2) {
    return 'cat1';
  } if (difMouseCat2 < difMouseCat1) {
    return 'cat2';
  } return 'os gatos trombam e o rato foge';
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
