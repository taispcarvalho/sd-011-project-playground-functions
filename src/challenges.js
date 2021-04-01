// Desafio 1
function compareTrue(booleanOne, booleanTwo) {
  if (booleanOne === true && booleanTwo === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, high) {
  let area = (base * high) / 2;
  return area;
}

console.log(calcArea(10, 50));

// Desafio 3
function splitSentence(initialStr) {
  let newArr;
  newArr = initialStr.split(' ');
  return newArr;
}

console.log(splitSentence('go Trybe'));

// Desafio 4
function concatName(strArr) {
  let strGenerated = '';
  for (let index = strArr.length - 1; index >= 0; index -= 1) {
    if (index === strArr.length - 1) {
      strGenerated += strArr[index];
      strGenerated += ', ';
    } else if (index === 0) {
      strGenerated += strArr[index];
      break;
    }
  } return strGenerated;
}

console.log(concatName(['captain', 'my', 'captain']));

// Desafio 5
function footballPoints(wins, ties) {
  let winPoints = 3;
  let totalPoints = (winPoints * (wins)) + (ties);
  return totalPoints;
}

console.log(footballPoints(14, 8));

// Desafio 6
function highestNumberFinder(arrNumbers) {
  let highestNumber = 0;
  for (let index = 0; index < arrNumbers.length; index += 1) {
    if (arrNumbers[index] > arrNumbers[index + 1]) {
      highestNumber = arrNumbers[index];
    }
  } return highestNumber;
}
console.log(highestNumberFinder([9, 1, 2, 3, 9, 5, 7]));

function highestCount(arrNumbers2) {
  let highestNumber = highestNumberFinder(arrNumbers2);
  let count = 0;
  for (let index = 0; index < arrNumbers2.length; index += 1) {
    if (arrNumbers2[index] === highestNumber) {
      count += 1;
    }
  }
  return count;
}

console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaCat1 = (cat1 - mouse) * (cat1 - mouse);
  let distanciaCat2 = (cat2 - mouse) * (cat2 - mouse);
  if (distanciaCat1 < distanciaCat2) {
    return 'cat1';
  } if (distanciaCat1 > distanciaCat2) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

console.log(catAndMouse(20, 15, 10));

// Desafio 8
function fizzEncode(number) {
  let newStrCode = '';
  if (number % 3 === 0 && number % 5 !== 0) {
    newStrCode += 'fizz';
  } else if (number % 5 === 0 && number % 3 !== 0) {
    newStrCode += 'buzz';
  } else if (number % 3 === 0 && number % 5 === 0) {
    newStrCode += 'fizzBuzz';
  } else {
    newStrCode += 'bug!';
  }
  return newStrCode;
}

function fizzBuzz(arrNumbers) {
  let newArr = [];
  for (let index = 0; index < arrNumbers.length; index += 1) {
    let encodedWord = fizzEncode(arrNumbers[index]);
    newArr.push(encodedWord);
  }
  return newArr;
}

console.log(fizzBuzz([2, 15, 7, 9, 45]));

// Desafio 9
function encode(str) {
  let str2 = '';
  for (let index = 0; index < str.length; index += 1) {
    if (str[index] === 'a') {
      str2 += 1;
    } else if (str[index] === 'e') {
      str2 += 2;
    } else if (str[index] === 'i') {
      str2 += 3;
    } else if (str[index] === 'o') {
      str2 += 4;
    } else if (str[index] === 'u') {
      str2 += 5;
    } else {
      str2 += str[index];
    }
  }
  return str2;
}
console.log(encode('hi there!'));
function decode(str) {
  let str2 = '';
  for (let index = 0; index < str.length; index += 1) {
    if (str[index] === '1') {
      str2 += 'a';
    } else if (str[index] === '2') {
      str2 += 'e';
    } else if (str[index] === '3') {
      str2 += 'i';
    } else if (str[index] === '4') {
      str2 += 'o';
    } else if (str[index] === '5') {
      str2 += 'u';
    } else {
      str2 += str[index];
    }
  }
  return str2;
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
