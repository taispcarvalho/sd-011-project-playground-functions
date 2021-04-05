// Desafio 1
function compareTrue(param1, param2) {
  if (param1 === true && param2 === true) {
    return true;
  }
  return false;
}
// console.log(compareTrue(true, true));

// Desafio 2
let area = 0;
function calcArea(base, height) {
  area = (base * height) / 2;
  return area;
}
// console.log(calcArea(10, 2));

// Desafio 3
function splitSentence(stringPhrase) {
  let splitPhrase = stringPhrase.split(' ');
  return splitPhrase;
}
// console.log(splitSentence('Go Trybe'));

// Desafio 4
function concatName(namesList) {
  return (namesList[namesList.length - 1] + ',' + ' ' + namesList[0]);
}
// console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
let points = 0;
let winPoints = 3;
let tiesPoints = 1;
function footballPoints(wins, ties) {
  points = (wins * winPoints) + (ties * tiesPoints);
  return points;
}
// console.log(footballPoints(14, 8));

// Desafio 6
function highestCount(numbers) {
  let repetitions = 0;
  let highestNumber = 0;
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > highestNumber) {
      highestNumber = numbers[index];
    }
  }
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] === highestNumber) {
      repetitions += 1;
    }
  }
  return repetitions;
}
// console.log(highestCount([ 0, 0, 0]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distance1 = Math.abs(cat1 - mouse);
  let distance2 = Math.abs(cat2 - mouse);
  if ((distance1) < (distance2)) {
    return 'cat1';
  } else if ((distance2) < (distance1)) {
    return 'cat2';
  } else 
  return 'os gatos trombam e o rato foge';
}
// console.log(catAndMouse(1, 0, 2))

// Desafio 8
function fizzBuzz(param1) {
  // seu código aqui
  let arrayFiBu = [];
  for (let index = 0; index < param1.length; index += 1) {
    if (param1[index] % 3 === 0 && param1[index] % 5 === 0) {
      arrayFiBu.push('fizzBuzz');
    } else if (param1[index] % 5 === 0 && param1[index] % 3 !== 0) {
      arrayFiBu.push('buzz');
    } else if (param1[index] % 3 === 0 && param1[index] % 5 !== 0) {
      arrayFiBu.push('fizz');
    } else {
      arrayFiBu.push('bug!');
    }
  }
  return arrayFiBu;
}
// console.log(fizzBuzz([3, 5, 15, 13]));

// Desafio 9
function encode(letters) {
  for (let index = 0; index < letters.length; index += 1) {
    letters = letters.replace('a', 1);
    letters = letters.replace('e', 2);
    letters = letters.replace('i', 3);
    letters = letters.replace('o', 4);
    letters = letters.replace('u', 5);
  }
  return letters;
}
// console.log(encode('hi there!'));

function decode(numbers) {
  // seu código aqui
  for (let index = 0; index < numbers.length; index += 1) {
   numbers = numbers.replace(1, 'a');
   numbers = numbers.replace(2, 'e');
   numbers = numbers.replace(3, 'i');
   numbers = numbers.replace(4, 'o') ;
   numbers = numbers.replace(5, 'u');
  }
  return numbers;
}
// console.log(decode('h3 th2r2!'));

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
