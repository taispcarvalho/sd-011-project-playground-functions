// Desafio 1
function compareTrue(value1, value2) {
  return value1 && value2;
}

// Desafio 2
function calcArea(base, heigth) {
  return (base * heigth) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}
// Desafio 4
function concatName(name) {
  let space = ', ';
  return name[name.length - 1] + space + name[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(numberArrays) {
  let numberM = 0;
  for (let index = 0; index < numberArrays.length; index += 1) {
    numberM = Math.max(...numberArrays);
  }
  let quantVezes = 0;
  for (let index = 0; index < numberArrays.length; index += 1) {
    quantVezes += numberArrays[index] === numberM;
  }
  return quantVezes;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let firstDistance = Math.abs(cat1 - mouse);
  let secundDistance = Math.abs(cat2 - mouse);
  let result = '';
  if (firstDistance < secundDistance) {
    result = 'cat1';
  } else if (firstDistance > secundDistance) {
    result = 'cat2';
  } else {
    result = 'os gatos trombam e o rato foge';
  }
  return result;
}

// Desafio 8
function verficar(number) {
  if (number % 15 === 0) {
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

function fizzBuzz(numbers) {
  let result = [];
  for (let index = 0; index < numbers.length; index += 1) {
    result.push(verficar(numbers[index]));
  }
  return result;
}

// Desafio 9
function encode(letra) {
  for (let index = 0; index < letra.length; index += 1) {
    letra = letra.replace('a', '1');
    letra = letra.replace('e', '2');
    letra = letra.replace('i', '3');
    letra = letra.replace('o', '4');
    letra = letra.replace('u', '5');
  }
  return letra;
}
function decode(number) {
  for (let index = 0; index < number.length; index += 1) {
    number = number.replace('1', 'a');
    number = number.replace('2', 'e');
    number = number.replace('3', 'i');
    number = number.replace('4', 'o');
    number = number.replace('5', 'u');
  }
  return number;
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
