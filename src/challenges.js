// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  }
  return false;
}
console.log(compareTrue(true, false));

// Desafio 2
function calcArea(base, height) {
  let area = 0;
  area = (base * height) / 2;
  return area;
}

console.log(calcArea(10, 50));

// Desafio 3
function splitSentence(str) {
  let array;
  array = str.split(' ');
  return array;
}

console.log(splitSentence('Go Trybe'));

// Desafio 4
function concatName(strArray) {
  let strNames = '';
  for (let i = 0; i < strArray.length; i += 1) {
    if (i === 0 || i === strArray.length - 1) {
      strNames = `${strArray[strArray.length - 1]}, ${strArray[0]}`;
    }
  }
  return strNames;
}

let namesArray = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];
console.log(concatName(namesArray));

// Desafio 5
function footballPoints(wins, ties) {
  let points = 0;
  if (wins >= 1 || ties >= 1) {
    points = (3 * wins) + (1 * ties);
  }
  return points;
}

console.log(footballPoints(1, 2));

// Desafio 6
function getHighestNumber(numbArray) {
  let highest = 0;
  for (let index = 0; index < numbArray.length; index += 1) {
    if (numbArray[index] > highest) {
      highest = numbArray[index];
    }
  }
  return highest;
}

function highestCount(numbArray) {
  let count = 0;
  let highest = getHighestNumber(numbArray);
  for (let j = 0; j < numbArray.length; j += 1) {
    if (numbArray[j] === highest) {
      count += 1;
    }
  }
  return count;
}

let highestNumberArray = [9, 1, 2, 3, 9, 5, 7];
console.log(highestCount(highestNumberArray));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distancia1 = Math.abs(cat1 - mouse);
  let distancia2 = Math.abs(cat2 - mouse);
  if (distancia1 < distancia2) {
    return 'cat1';
  }
  if (distancia2 < distancia1) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

console.log(catAndMouse(12, 0, 14));

// Desafio 8
function swapNumberStr(number) {
  if (number % 3 === 0 && number % 5 === 0) {
    return 'fizzBuzz';
  }
  if (number % 3 === 0) {
    return 'fizz';
  }
  if (number % 5 === 0) {
    return 'buzz';
  }
  return 'bug!';
}
function fizzBuzz(arrayOfNumbers) {
  let fizzArrayStr = [];
  for (let index = 0; index < arrayOfNumbers.length; index += 1) {
    let result = swapNumberStr(arrayOfNumbers[index]);
    fizzArrayStr.push(result);
  }
  return fizzArrayStr;
}

let arrayNumbFizz = [2, 15, 7, 9, 45];
console.log(fizzBuzz(arrayNumbFizz));

// Desafio 9
let object = {
  a: '1',
  e: '2',
  i: '3',
  o: '4',
  u: '5',
};

function encodeCharacteres(char) {
  let receptor = object[char];

  if (receptor !== undefined) {
    return receptor;
  }

  return char;
}
function encode(str) {
  let encodedStr = '';
  for (let index = 0; index < str.length; index += 1) {
    let charResult = encodeCharacteres(str[index]);
    encodedStr += charResult;
  }
  return encodedStr;
}

console.log(encode('hi there!'));

let objectDecode = {
  1: 'a',
  2: 'e',
  3: 'i',
  4: 'o',
  5: 'u',
};

function decodeNumbers(num) {
  let decoderNum = objectDecode[num];

  if (decoderNum !== undefined) {
    return decoderNum;
  }
  return num;
}

function decode(decodeStr) {
  let decodedStr = '';
  for (let index = 0; index < decodeStr.length; index += 1) {
    let decodeResult = decodeNumbers(decodeStr[index]);
    decodedStr += decodeResult;
  }
  return decodedStr;
}

console.log(decode('h3 th2r2!'));

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
