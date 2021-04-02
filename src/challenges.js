// Desafio 1
function compareTrue(input1, input2) {
  return input1 && input2;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  let stringArray = string.split(' ');
  return stringArray;
}

// Desafio 4
function concatName(arrayD4) {
  // seu código aqui
  return `${arrayD4[arrayD4.length - 1]}, ${arrayD4[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  let totalPoints = (wins * 3) + ties;
  return totalPoints;
}

// Desafio 6
function highestCount(array6) {
  let biggest = Math.max(...array6);
  let biggestCount = 0;
  for (let index = 0; index < array6.length; index += 1) {
    if (array6[index] === biggest) {
      biggestCount += 1;
    }
  }
  return biggestCount;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distCat1 = Math.abs(mouse - cat1);
  let distCat2 = Math.abs(mouse - cat2);
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

// Desafio 8
function fizzBuzz(array8) {
  for (let i = 0; i < array8.length; i += 1) {
    switch (true) {
    case array8[i] % 15 === 0:
      array8[i] = 'fizzBuzz';
      break;
    case array8[i] % 3 === 0:
      array8[i] = 'fizz';
      break;
    case array8[i] % 5 === 0:
      array8[i] = 'buzz';
      break;
    default:
      array8[i] = 'bug!';
      break;
    }
  }
  return array8;
}

// Desafio 9
function encode(stringDesafio9pt1) {
  stringDesafio9pt1 = stringDesafio9pt1.replace(/a/g, 1);
  stringDesafio9pt1 = stringDesafio9pt1.replace(/e/g, 2);
  stringDesafio9pt1 = stringDesafio9pt1.replace(/i/g, 3);
  stringDesafio9pt1 = stringDesafio9pt1.replace(/o/g, 4);
  stringDesafio9pt1 = stringDesafio9pt1.replace(/u/g, 5);
  return stringDesafio9pt1;
}

function decode(stringDesafio9pt2) {
  stringDesafio9pt2 = stringDesafio9pt2.replace(/1/g, 'a');
  stringDesafio9pt2 = stringDesafio9pt2.replace(/2/g, 'e');
  stringDesafio9pt2 = stringDesafio9pt2.replace(/3/g, 'i');
  stringDesafio9pt2 = stringDesafio9pt2.replace(/4/g, 'o');
  stringDesafio9pt2 = stringDesafio9pt2.replace(/5/g, 'u');
  return stringDesafio9pt2;
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
