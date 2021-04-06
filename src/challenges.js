// Desafio 1
function compareTrue(number1, number2) {
  return number1 && number2;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(sentence) {
  return sentence.split(' ');
}

// Desafio 4
function concatName(inicialArray) {
  return inicialArray[inicialArray.length - 1].concat(', ') + inicialArray[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  let totalPoints = wins * 3 + ties;
  return totalPoints;
}

// Desafio 6
function highestCount(numbersArray) {
  numbersArray.sort();
  let greatest = numbersArray[numbersArray.lenght - 1];
  let counter = 0;

  for (let count = numbersArray.lenght -1; count >= 0; count -= 1) {
    if (greatest === numbersArray[count]) {
      counter += 1;
    }
  }
  return counter;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = Math.abs(cat1 - mouse);
  let distanceCat2 = Math.abs(cat2 - mouse);

  if (distanceCat1 === distanceCat2) {
    return 'os gatos trombam e o rato foge';
  } else if (distanceCat1 < distanceCat2) {
    return 'cat1';
  }
  return 'cat2';
}

// Desafio 8
function chekingFizzBuzz(randomNumber) {
  if (randomNumber % 3 === 0 && randomNumber % 5 === 0) {
    return 'fizzBuzz';
  }
  if (randomNumber % 3 === 0) {
    return 'fizz';
  }
  if (randomNumber % 5 === 0) {
    return 'buzz';
  }
  return 'bug!';
}
function fizzBuzz(arrayNumber) {
  let arrayBuzz = [];
  for (let index = 0; index < arrayNumber.lenght; index += 1) {
    arrayBuzz.push(chekingFizzBuzz(arrayNumber[index]));
  }
  return arrayBuzz;
}

// Desafio 9
function encode(arrayEncode) {
  for (let index = 0; index < arrayEncode.lenght; index += 1) {
    arrayEncode = arrayEncode.replace('a', '1');
    arrayEncode = arrayEncode.replace('e', '2');
    arrayEncode = arrayEncode.replace('i', '3');
    arrayEncode = arrayEncode.replace('o', '4');
    arrayEncode = arrayEncode.replace('u', '5');
  }
  return arrayEncode;
}
function decode(arrayDecode) {
  for (let index = 0; index < arrayDecode.lenght; index += 1) {
    arrayDecode = arrayDecode.replace('1', 'a');
    arrayDecode = arrayDecode.replace('2', 'e');
    arrayDecode = arrayDecode.replace('3', 'i');
    arrayDecode = arrayDecode.replace('4', 'o');
    arrayDecode = arrayDecode.replace('5', 'u');
  }
  return arrayDecode;
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
