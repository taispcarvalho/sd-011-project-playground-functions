// Desafio 1
function compareTrue(input1, input2) {
  return (input1 && input2);
  // console.log(false&&false);
  // console.log(true&&true);
  // console.log(true&&false)
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return (area);
}

// Desafio 3
function splitSentence(string) {
  let char = '';
  let array = [];
  let newString = '';
  for (let index = 0; index <= string.length; index += 1) {
    char = string[index];
    if (char === ' ' || index === string.length) {
      array.push(newString);
      newString = '';
    } else {
      newString += char;
    }
  }
  return (array);
}

// Desafio 4
function concatName(array) {
  let string = `${array[array.length - 1]}, ${array[0]}`;
  return (string);
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = (3 * wins) + (ties);
  return (points);
}

// Desafio 6
function findBiggest(array) {
  let bigBoy = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (bigBoy < array[index]) {
      bigBoy = array[index];
    }
  }
  return (bigBoy);
}

function highestCount(array) {
  let biggest = findBiggest(array);
  let counter = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (biggest === array[index]) {
      counter += 1;
    }
  }
  return (counter);
}

// Desafio 7
function getsAbsoluteValue(number) {
  if (number < 0) {
    number *= -1;
  }
  return (number);
}

function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = getsAbsoluteValue(mouse - cat1);
  let distanceCat2 = getsAbsoluteValue(mouse - cat2);
  if (distanceCat1 === distanceCat2) {
    return ('os gatos trombam e o rato foge');
  } if (distanceCat1 < distanceCat2) {
    return ('cat1');
  }
  return ('cat2');
}

// Desafio 8
function checkDivision(number) {
  let by3 = (number % 3) === 0;
  let by5 = (number % 5) === 0;
  if (by5 === true && by3 === true) {
    return ('fizzBuzz');
  } if (by3 === true) {
    return ('fizz');
  } if (by5 === true) {
    return ('buzz');
  } return ('bug!');
}

function fizzBuzz(array) {
  let result = [];
  for (let number of array) {
    result.push(checkDivision(number));
  }
  return (result);
}

// Desafio 9
function encode(string) {
  let encodedString = '';
  let selector = ['a', 'e', 'i', 'o', 'u'];
  for (let index = 0; index < string.length; index += 1) {
    let char = string[index];
    let tempChar = selector.indexOf(char);
    if (tempChar !== -1) {
      char = tempChar + 1;
    }
    encodedString += char;
  }
  return (encodedString);
}

function decode(string) {
  let decodedString = '';
  let selector = ['a', 'e', 'i', 'o', 'u'];
  for (let index = 0; index < string.length; index += 1) {
    let char = string[index];
    let tempChar = selector[char - 1];
    if (tempChar !== undefined) {
      char = tempChar;
    }
    decodedString += char;
  }
  return (decodedString);
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
