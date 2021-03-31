// Desafio 1
function compareTrue(value1, value2) {
  return value1 && value2;
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
  let points = (3 * wins + ties);
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
  let encStr = [];
  for (let index = 0; index < str.length; index += 1) {
    if (str[index] === 'a') {
      encStr += '1';
    } else if (str[index] === 'e') {
      encStr += '2';
    } else if (str[index] === 'i') {
      encStr += '3';
    } else if (str[index] === 'o') {
      encStr += '4';
    } else if (str[index] === 'u') {
      encStr += '5';
    } else {
      encStr += str[index];
    }
  }
return encStr;  
}
console.log(encode('hi there!'));

// Desafio 9

function decode(str) {
  let dcdStr = [];
  for (let index = 0; index < str.length; index += 1) {
    if (str[index] === '1') {
      dcdStr += 'a';
    } else if (str[index] === '2') {
      dcdStr += 'e';
    } else if (str[index] === '3') {
      dcdStr += 'i';
    } else if (str[index] === '4') {
      dcdStr += 'o';
    } else if (str[index] === '5') {
      dcdStr += 'u';
    } else {
      dcdStr += str[index];
    }
  }
return dcdStr;  
}
console.log(decode('h3 th2r2!'))

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
