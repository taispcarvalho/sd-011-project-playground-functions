// Desafio 1
function compareTrue(value1, value2) {
  // seu código aqui
  return value1 && value2;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(sentence) {
  // seu código aqui
  return sentence.split(' ');
}

// Desafio 4
function concatName(frase) {
  // seu código aqui
  let space = ', ';
  return frase[frase.length - 1] + space + frase[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(arrNum) {
  // seu código aqui
  let qtdMaxNum = 0;
  let maxNum = 0;

  for (let index = 0; index < arrNum.length; index += 1) {
    maxNum = Math.max(...arrNum);
  }

  for (let index2 = 0; index2 < arrNum.length; index2 += 1) {
    if (maxNum === arrNum[index2]) {
      qtdMaxNum += 1;
    }
  }

  return qtdMaxNum;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let result;
  let distanceCat1 = mouse - cat1; let distanceCat2 = mouse - cat2;

  if (distanceCat1 < 0) {
    distanceCat1 *= -1;
  } else if (distanceCat2 < 0) {
    distanceCat2 *= -1;
  }

  if (distanceCat1 < distanceCat2) {
    result = 'cat1';
  } else if (distanceCat2 < distanceCat1) {
    result = 'cat2';
  } else {
    result = 'os gatos trombam e o rato foge';
  }
  return result;
}

// Desafio 8
function fizzBuzz(arrNum) {
  // seu código aqui
  let result = [];

  for (let index = 0; index < arrNum.length; index += 1) {
    if (arrNum[index] % 3 === 0 && arrNum[index] % 5 === 0) {
      result.push('fizzBuzz');
    } else if (arrNum[index] % 3 === 0) {
      result.push('fizz');
    } else if (arrNum[index] % 5 === 0) {
      result.push('buzz');
    } else {
      result.push('bug!');
    }
  }

  return result;
}

// let arrNum = [2, 15, 7, 9, 45];
// console.log(fizzBuzz(arrNum));

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
