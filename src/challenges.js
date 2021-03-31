// Desafio 1
function compareTrue(number1, number2) {
  return number1 && number2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(names) {
  let initialName = names[0];
  let lastName = names[names.length - 1];

  let finalResultOfName = `${lastName}, ${initialName}`;

  return finalResultOfName;
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties * 1;
}

// Desafio 6
function highestCount(array) {
  let mostRepeated = 0;
  let higher = array[0];
  for (let index = 0; index < array.length; index += 1) {
    if (higher < array[index]) {
      mostRepeated = 1;
      higher = array[index];
    } else if (higher === array[index]) {
      mostRepeated += 1;
    }
  }
  return mostRepeated;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaCat1 = Math.abs(cat1 - mouse);
  let distanciaCat2 = Math.abs(cat2 - mouse);
  if (distanciaCat1 > distanciaCat2) {
    return 'cat2';
  } if (distanciaCat1 < distanciaCat2) {
    return 'cat1';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz2(numbers) {
  if (numbers % 3 === 0 && numbers % 5 === 0) {
    return 'fizzBuzz';
  }
  if (numbers % 3 === 0) {
    return 'fizz';
  }
  if (numbers % 5 === 0) {
    return 'buzz';
  }
  return 'bug!';
}

function fizzBuzz(arrayOfNumbers) {
  let result = [];
  for (let numbers of arrayOfNumbers) {
    result.push(fizzBuzz2(numbers));
  }
  return result;
}

// Desafio 9
function encode(string) {
  let encoded = [];
  for (let index = 0; index < string.length; index += 1) {
    if (string[index] === 'a') {
      encoded += '1';
    } else if (string[index] === 'e') {
      encoded += '2';
    } else if (string[index] === 'i') {
      encoded += '3';
    } else if (string[index] === 'o') {
      encoded += '4';
    } else if (string[index] === 'u') {
      encoded += '5';
    } else {
      encoded += string[index];
    }
  }
  return encoded;
}

function decode(string) {
  let decoded = [];
  for (let index = 0; index < string.length; index += 1) {
    if (string[index] === '1') {
      decoded += 'a';
    } else if (string[index] === '2') {
      decoded += 'e';
    } else if (string[index] === '3') {
      decoded += 'i';
    } else if (string[index] === '4') {
      decoded += 'o';
    } else if (string[index] === '5') {
      decoded += 'u';
    } else {
      decoded += string[index];
    }
  }
  return decoded;
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
