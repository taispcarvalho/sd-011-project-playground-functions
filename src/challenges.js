// Desafio 1
function compareTrue(bool1, bool2) {
  return bool1 && bool2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  let stringSplited = (string.split(' '));
  return stringSplited;
}

// Desafio 4
function concatName(array) {
  let stringConcat = `${array[array.length - 1]}, ${array[0]}`;
  return stringConcat;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// função auxiliar Desafio 6
function findBiggestNumber(array) {
  let biggestNumber = array[0];
  for (let index = 0; index < array.length; index += 1) {
    if (biggestNumber < array[index]) {
      biggestNumber = array[index];
    }
  }
  return biggestNumber;
}

// Desafio 6
function highestCount(array) {
  // seu código aqui
  let biggestNumber = findBiggestNumber(array);
  let times = 0;

  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === biggestNumber) {
      times += 1;
    }
  }
  return times;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distCat1 = Math.abs((cat1) - (mouse));
  let distCat2 = Math.abs((cat2) - (mouse));
  let answer;

  if (distCat1 < distCat2) {
    answer = 'cat1';
  } else if (distCat2 < distCat1) {
    answer = 'cat2';
  } else {
    answer = 'os gatos trombam e o rato foge';
  }
  return answer;
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
