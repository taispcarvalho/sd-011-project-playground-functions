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
function fizzBuzz(array) {
  let result = [];
  for (let number of array) {
    if (number % 5 === 0 && number % 3 === 0) {
      result.push('fizzBuzz');
    } else if (number % 3 === 0) {
      result.push('fizz');
    } else if (number % 5 === 0) {
      result.push('buzz');
    } else {
      result.push('bug!');
    }
  }
  return (result);
}

// Desafio 9
function convertletterToNumber(letter) {
  switch (letter) {
  case 'a':
    return ('1');
  case 'e':
    return ('2');
  case 'i':
    return ('3');
  case 'o':
    return ('4');
  case 'u':
    return ('5');
  default:
    return (letter);
  }
}

function convertNumbertoLetter(number) {
  switch (number) {
  case '1':
    return ('a');
  case '2':
    return ('e');
  case '3':
    return ('i');
  case '4':
    return ('o');
  case '5':
    return ('u');
  default:
    return (number);
  }
}

function encode(string) {
  let encodedString = '';
  for (let index = 0; index < string.length; index += 1) {
    let char = string[index];
    char = convertletterToNumber(char);
    encodedString += char;
  }
  return (encodedString);
}

function decode(string) {
  let decodedString = '';
  for (let index = 0; index < string.length; index += 1) {
    let char = string[index];
    char = convertNumbertoLetter(char);
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
