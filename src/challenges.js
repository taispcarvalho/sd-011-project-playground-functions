// Desafio 1
function compareTrue(num1, num2) {
  return num1 && num2;
}

console.log(compareTrue(true, true));

// Desafio 2
function calcArea(base, height) {
  let triangleArea = (base * height) / 2;
  return triangleArea;
}

console.log(calcArea(10, 50));
console.log(calcArea(5, 2));
console.log(calcArea(51, 1));

// Desafio 3
function splitSentence(string) {
  let array = string.split(' ');
  return array;
}

console.log(splitSentence('Go Trybe'));
console.log(splitSentence('vamo que vamo'));
console.log(splitSentence('foguete'));

// Desafio 4
function concatName(array) {
  let newArray = array.shift();
  let arrayReverse = array.reverse();
  let newArray2 = arrayReverse.shift();
  return newArray2 + ', ' + newArray;
}

console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));
console.log(concatName(['foguete', 'não', 'tem', 'ré']));
console.log(concatName(['captain', 'my', 'captain']));

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties * 1;
}

console.log(footballPoints(14, 8));
console.log(footballPoints(1, 2));
console.log(footballPoints(0, 0));

// Desafio 6
function highestCount(array) {
  let largest = Math.max(...array);
  let quantidade = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === largest) {
      quantidade += 1;
    }
  }
  return quantidade;
}

console.log(highestCount([1, 2, 3, 4, 56, 56, 56, 7]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = cat1 - mouse;
  let distanceCat2 = cat2 - mouse;

  if (distanceCat1 < 0) {
    distanceCat1 *= -1;
  }

  if (distanceCat2 < 0) {
    distanceCat2 *= -1;
  }

  if (distanceCat1 < distanceCat2) {
    return 'cat1';
  } else if (distanceCat2 < distanceCat1) {
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}

console.log(catAndMouse(3, 1, 2));
console.log(catAndMouse(3, 2, 1));
console.log(catAndMouse(3, 3, 3));

// Desafio 8

function fizzBuzzSecondProcess(array) {
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] % 5 === 0) {
      array[index] = 'buzz';
    } else if (typeof array[index] === 'number') {
      array[index] = 'bug!';
    }
  }
  return array;
}
function fizzBuzz(array) {
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      array[index] = 'fizzBuzz';
    } else if (array[index] % 3 === 0) {
      array[index] = 'fizz';
    }
  }
  array = fizzBuzzSecondProcess(array);
  return array;
}

console.log(fizzBuzz([2, 15, 7, 9, 45]));
console.log(fizzBuzz([2, 9]));
console.log(fizzBuzz([9, 25]));

// Desafio 9
function encode(string) {
  let encodedMessage = '';

  for (let index = 0; index < string.length; index += 1) {
    if (string[index].toLowerCase() === string[index]) {
      switch (string[index]) {
      case 'a':
        encodedMessage += '1';
        break;
      case 'e':
        encodedMessage += '2';
        break;
      case 'i':
        encodedMessage += '3';
        break;
      case 'o':
        encodedMessage += '4';
        break;
      case 'u':
        encodedMessage += '5';
        break;
      default:
        encodedMessage += string[index];
      }
    } else {
      encodedMessage += string[index];
    }
  }
  return encodedMessage;
}

console.log(encode('hi, there'));

function decode(number) {
  let decodedMessage = '';

  for (let index = 0; index < number.length; index += 1) {
    switch (number[index]) {
    case '1':
      decodedMessage += 'a';
      break;
    case '2':
      decodedMessage += 'e';
      break;
    case '3':
      decodedMessage += 'i';
      break;
    case '4':
      decodedMessage += 'o';
      break;
    case '5':
      decodedMessage += 'u';
      break;
    default:
      decodedMessage += number[index];
    }
  }
  return decodedMessage;
}

console.log(decode('h3, th2r2'));

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
