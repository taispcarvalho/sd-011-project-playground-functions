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
  let word = string.replace(/a/g, '1');
  word = word.replace(/e/g, '2');
  word = word.replace(/i/g, '3');
  word = word.replace(/o/g, '4');
  word = word.replace(/u/g, '5');
  return word;
}

function decode(string) {
  let word = string.replace(/1/g, 'a');
  word = word.replace(/2/g, 'e');
  word = word.replace(/3/g, 'i');
  word = word.replace(/4/g, 'o');
  word = word.replace(/5/g, 'u');
  return word;
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
