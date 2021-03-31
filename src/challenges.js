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
function fizzBuzz(arrayD8) {
  for (let i = 0; i < arrayD8.length; i += 1) {
    if (arrayD8[i] % 3 === 0 && arrayD8[i] % 5 === 0) {
      arrayD8[i] = 'fizzBuzz';
    } else if (arrayD8[i] % 3 === 0) {
      arrayD8[i] = 'fizz';
    } else if (arrayD8[i] % 5 === 0) {
      arrayD8[i] = 'buzz';
    } else {
      arrayD8[i] = 'bug!';
    }
  }
  return arrayD8;
}

// Desafio 9
function encode(stringD9_1) {
  stringD9_1 = stringD9_1.replace(/a/g, 1);
  stringD9_1 = stringD9_1.replace(/e/g, 2);
  stringD9_1 = stringD9_1.replace(/i/g, 3);
  stringD9_1 = stringD9_1.replace(/o/g, 4);
  stringD9_1 = stringD9_1.replace(/u/g, 5);
  return stringD9_1;
}

function decode(stringD9_2) {
  stringD9_2 = stringD9_2.replace(/1/g, 'a');
  stringD9_2 = stringD9_2.replace(/2/g, 'e');
  stringD9_2 = stringD9_2.replace(/3/g, 'i');
  stringD9_2 = stringD9_2.replace(/4/g, 'o');
  stringD9_2 = stringD9_2.replace(/5/g, 'u');
  return stringD9_2;
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
