// Desafio 1
function compareTrue(input1, input2) {
  if (input1 && input2) {
    return true;
  }
  return false;
}
// console.log(compareTrue(true, true));

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}
// console.log(calcArea(51, 1));

// Desafio 3
function splitSentence(string) {
  let stringArray = string.split(' ');
  return stringArray;
}
// console.log(splitSentence('Vamo que vamo'));

// Desafio 4
// let testArrayD4 = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']; // Array de teste
function concatName(arrayD4) {
  // seu código aqui
  return `${arrayD4[arrayD4.length - 1]}, ${arrayD4[0]}`;
}
// console.log(concatName(testArrayD4));

// Desafio 5
function footballPoints(wins, ties) {
  let totalPoints = (wins * 3) + ties;
  return totalPoints;
}
// console.log(footballPoints(0,0))

// Desafio 6
// let testArrayD6 = [0,0,0]; // Array de teste
function highestCount(arrayD6) {
  let biggest = arrayD6[0];
  let biggestCount = 0;
  for (let index = 1; index < arrayD6.length; index += 1) {
    if (arrayD6[index] > biggest) {
      biggest = arrayD6[index];
    }
  }
  for (let index = 0; index < arrayD6.length; index += 1) {
    if (arrayD6[index] === biggest) {
      biggestCount += 1;
    }
  }
  return biggestCount;
}
// console.log(highestCount(testArrayD6))

// Desafio 7
function catAndMouse(cat1, cat2, mouse) {
  let distCat1 = mouse - cat1;
  let distCat2 = mouse - cat2;
  switch (true) {
  case distCat1 > distCat2:
    return 'cat2';
  case distCat2 > distCat1:
    return 'cat1';
  case distCat2 === distCat1:
    return 'os gatos trombam e o rato foge';
  default:
    break;
  }
}
console.log(catAndMouse(1, 2, 3));

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
