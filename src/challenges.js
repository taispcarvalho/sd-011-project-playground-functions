// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}
console.log(calcArea(10, 50));

// Desafio 3
function splitSentence(str) {
  let splStr = str.split(' ');
  return splStr;
}
console.log(splitSentence('go Trybe'));

// Desafio 4
function concatName(arrStr) {
  let lstFrst = arrStr[arrStr.length - 1] + ', ' + arrStr[0];
  return lstFrst;
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins, ties) {
  let winPoints = 3 * wins;
  let tiePoints = 1 * ties;
  let points = winPoints + tiePoints;
  return points;
}
console.log(footballPoints(14, 8));

// Desafio 6
function highestCount(arrNmb) {
  let highNmb = 0;
  let contador = 0;
  for (let i = 0; i < arrNmb.length; i += 1) {
    if (arrNmb[i] > highNmb) {
      highNmb = arrNmb[i];
    }
  }
  for (let i = 0; i < arrNmb.length; i += 1) {
    if (arrNmb[i] === highNmb) {
      contador += 1;
    }
  }
  return contador;
}
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1Pos = Math.abs(mouse - cat1);
  let cat2Pos = Math.abs(mouse - cat2);
  if (cat1Pos < cat2Pos) {
    return 'cat1';
  } else if (cat2Pos < cat1Pos) {
    return 'cat2';
  } else if (cat1Pos === cat2Pos) {
    return 'os gatos trombam e o rato foge';
  }
}
console.log(catAndMouse(1, 0, 2));

// Desafio 8
function fizzBuzz(arrNbrs) {
  let arry = [];
  for (let i = 0; i < arrNbrs.length; i += 1) {
    if (arrNbrs[i] % 3 === 0 && arrNbrs[i] % 5 === 0) {
      arry.push('fizzBuzz');
    } else if (arrNbrs[i] % 3 === 0) {
      arry.push('fizz');
    } else if (arrNbrs[i] % 5 === 0) {
      arry.push('buzz');
    } else {
      arry.push('bug!');
    }
  }
  return arry;
}

console.log(fizzBuzz([2, 15, 7, 9, 45]));

// Desafio 9
function encode(str) {
let encodeStr = '';
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === 'a') {
      str[i] = 1;
    }
  }
  return encodeStr;
}
console.log(encode('abacaxi'));

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
