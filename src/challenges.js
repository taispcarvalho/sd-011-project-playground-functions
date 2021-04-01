// Desafio 1
function compareTrue(value1, value2) {
  return (value1 && value2);
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(sentece) {
  return sentece.split(' ');
}

// Desafio 4
function concatName(arrayNames) {
  return arrayNames[arrayNames.length - 1].concat(`, ${arrayNames[0]}`);
}

// Desafio 5
function footballPoints(wins, ties) {
  return ((wins * 3) + ties);
}

// Desafio 6
function highestCount(arrayNumbers) {
  let higherNumber = arrayNumbers[0];
  let repeater = 0;

  for (let index = 0; index < arrayNumbers.length; index += 1) {
    if (arrayNumbers[index] > higherNumber) {
      higherNumber = arrayNumbers[index];
    }
  }

  for (let index = 0; index < arrayNumbers.length; index += 1) {
    if (arrayNumbers[index] === higherNumber) {
      repeater += 1;
    }
  }
  return repeater;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat2pos = Math.abs(mouse - cat1);
  let cat1pos = Math.abs(mouse - cat2);

  if (cat2pos > cat1pos) {
    return 'cat2';
  }
  if (cat1pos > cat2pos) {
    return 'cat1';
  }
  if (cat1pos === cat2pos) {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(fizzBuzzArray) {
  let finalArray = [];

  for (let index = 0; index < fizzBuzzArray.length; index += 1) {
    if (fizzBuzzArray[index] % 3 === 0 && fizzBuzzArray[index] % 5 === 0) {
      finalArray.push('fizzBuzz');
    } 
    else if (fizzBuzzArray[index] % 5 === 0) {
      finalArray.push('buzz');
    }
    else if (fizzBuzzArray[index] % 3 === 0) {
      finalArray.push('fizz');
    }
    else {
      finalArray.push('bug!');
    }
  }
  return finalArray;
}

// Desafio 9
function encode(string) {

stringArray = string.toLowerCase().split('')

for (let index = 0; index < stringArray.length; index += 1) {
  if (stringArray[index] === 'a') {
      stringArray[index] = '1';
    } 
    else if (stringArray[index] === 'e') {
      stringArray[index] = '2';
    }
    else if (stringArray[index] === 'i') {
      stringArray[index] = '3'
    }
    else if (stringArray[index] === 'o') {
      stringArray[index] = '4';
    }
    else if (stringArray[index] === 'u') {
      stringArray[index] = '5';
    }
  }
  let stringfinal = stringArray.join('')
  return stringfinal
}

function decode(string) {
  let stringArray = string.toLowerCase().split('')

for (let index = 0; index < stringArray.length; index += 1) {
    if (stringArray[index] === '1') {
      stringArray[index] = 'a';
    } 
    else if (stringArray[index] === '2') {
      stringArray[index] = 'e';
    }
    else if (stringArray[index] === '3') {
      stringArray[index] = 'i';
    }
    else if (stringArray[index] === '4') {
      stringArray[index] = 'o';
    }
    else if (stringArray[index] === '5') {
      stringArray[index] = 'u';
    }
  }
  let stringfinal = stringArray.join('');
  return stringfinal;
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
