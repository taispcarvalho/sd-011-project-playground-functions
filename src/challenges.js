// Desafio 1
function compareTrue(valor1, valor2) {
  return valor1 && valor2;
}

// Desafio 2
function calcArea(base, height) {
  let areaTriangle = (base * height) / 2;
  return areaTriangle;
}

// Desafio 3
function splitSentence(splitPhrase) {
  let splitedArray = splitPhrase.split(' ');
  return splitedArray;
}

// Desafio 4
function concatName(arrayName) {
  let formatedName = arrayName[arrayName.length - 1] + ', ' + arrayName[0];
  return formatedName;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(numbersArray) {
  let number = {};
  let numCompare = 0;
  let highestNumber = 0;
  for (let index = 0; index < numbersArray.length; index += 1) {
    let val = numbersArray[index];
    number[val] = (number[val] === undefined) ? number[val] = 1 : number[val] += 1;
    if (number[val] > numCompare) {
      numCompare = number[val];
      highestNumber = numbersArray[index];
    }
  }
  return highestNumber;
}

// Desafio 7
function catAndMouse(cat1, cat2, mouse) {
  let dist1 = mouse - cat1;
  let dist2 = mouse - cat2;
  let winner;
  if (dist1 < dist2) {
    winner = 'cat1';
  } else if (dist1 > dist2) { 
    winner = 'cat2';
  } else {
    winner = 'os gatos trombam e o rato foge';
  }
  return winner;
}

// Desafio 8
function fizzBuzzSolution(array) {
  let num = [];
  for (let index = 0; index < array.length; index += 1) {
    let valor = array[index];
    if (valor % 15 === 0) {
      num.push('fizzBuzz');
    } else if (valor % 3 === 0) {
      num.push('fizz');
    } else if (valor % 5 === 0) {
      num.push('buzz');
    } else {
      num.push('!bug');
    }
  }
  return num;
}

function fizzBuzz(array) {
  return fizzBuzzSolution(array);
}

// Desafio 9
function encode(string) {
  let strArray = string.split('');
  for (let index = 0; index < string.length; index += 1) {
    let valor = string[index];
    if (valor === 'a') {
      strArray[index] = 1;
    } else if (valor === 'e') {
      strArray[index] = 2;
    } else if (valor === 'i') {
      strArray[index] = 3;
    } else if (valor === 'o') {
      strArray[index] = 4;
    } else if (valor === 'u') {
      strArray[index] = 5;
    } else;
  }
  strArray = strArray.join('');
  return strArray;
}

function decode(string) {
  let strArray = string.split('');
  for (let index = 0; index < string.length; index += 1) {
    let valor = string[index];
    if (valor === '1') {
      strArray[index] = 'a';
    } else if (valor === '2') {
      strArray[index] = 'e';
    } else if (valor === '3') {
      strArray[index] = 'i';
    } else if (valor === '4') {
      strArray[index] = 'o';
    } else if (valor === '5') {
      strArray[index] = 'u';
    } else;
  }
  strArray = strArray.join('');
  return strArray;
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
