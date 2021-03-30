// Primeiro Commit
// Desafio 1
function compareTrue(bool1, bool2) {
  // seu código aqui
  return bool1 && bool2;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string1) {
  // seu código aqui
  return string1.split(' ');
}

// Desafio 4
function concatName(stringArray1) {
  // seu código aqui
  return `${stringArray1[stringArray1.length - 1]}, ${stringArray1[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let points = 0;
  for (let i = 0; i < wins; i += 1) {
    points += 3;
  }
  for (let i = 0; i < ties; i += 1) {
    points += 1;
  }
  return points;
}

// Desafio 6
function highestCount(numArray1) {
  // seu código aqui
  let highestNumber = Math.max(...numArray1);
  let highestTimes = 0;
  for (let i = 0; i < numArray1.length; i += 1) {
    if (numArray1[i] === highestNumber) {
      highestTimes += 1;
    }
  }
  return highestTimes;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let distance1 = Math.abs(mouse - cat1);
  let distance2 = Math.abs(mouse - cat2);
  if (distance1 < distance2) {
    return 'cat1';
  }
  if (distance1 > distance2) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function ifBy3Or5(array, i) {
  if (array[i] % 5 !== 0) {
    return 'fizz';
  }
  if (array[i] % 3 !== 0) {
    return 'buzz';
  }
  return 'fizzBuzz';
}

function fizzBuzz(numArray2) {
  // seu código aqui
  let stringArray2 = [];
  for (let i = 0; i < numArray2.length; i += 1) {
    if (numArray2[i] % 3 === 0 || numArray2[i] % 5 === 0) {
      stringArray2.push(ifBy3Or5(numArray2, i));
    } else {
      stringArray2.push('bug!');
    }
  }
  return stringArray2;
}

// Desafio 9
let vowels = ['a', 'e', 'i', 'o', 'u'];
let vowelNumbers = ['1', '2', '3', '4', '5'];

function vowelToNum(string, i) {
  for (let i2 = 0; i2 < vowels.length; i2 += 1) {
    if (string[i] === vowels[i2]) {
      return vowelNumbers[i2];
    }
    if (i2 === vowels.length - 1) {
      return string[i];
    }
  }
}

function encode(string2) {
  // seu código aqui
  let changedString = '';
  for (let i = 0; i < string2.length; i += 1) {
    changedString += vowelToNum(string2, i);
  }
  return changedString;
}

function numToVowel(string, i) {
  for (let i2 = 0; i2 < vowelNumbers.length; i2 += 1) {
    if (string[i] === vowelNumbers[i2]) {
      return vowels[i2];
    }
    if (i2 === vowelNumbers.length - 1) {
      return string[i];
    }
  }
}

function decode(string2) {
  // seu código aqui
  let changedString = '';
  for (let i = 0; i < string2.length; i += 1) {
    changedString += numToVowel(string2, i);
  }
  return changedString;
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
