// Desafio 1
function compareTrue(value1, value2) {
  return value1 && value2;
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
function concatName(myArray) {
  let firstItem = myArray[0];
  let lastItem = myArray[myArray.length - 1];
  return `${lastItem}, ${firstItem}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties * 1);
}

// Desafio 6
function highestCount(array) {
  let ordemArray = array.sort((a, b) => { return b - a });
  let sumRepeatLargestNumber = 1;
  let higherNumber = ordemArray[0];
  for (let index = 0; index < ordemArray.length; index += 1) {
    if (ordemArray[index + 1] === higherNumber) {
      sumRepeatLargestNumber += 1;
    }
  }
  return sumRepeatLargestNumber;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let mouseCat1 = Math.abs(mouse - cat1);
  let mouseCat2 = Math.abs(mouse - cat2);
  if (mouseCat1 === mouseCat2) {
    return 'os gatos trombam e o rato foge';
  } else if (mouseCat1 > mouseCat2) {
    return 'cat2';
  }
  return 'cat1';
}

// Desafio 8
function fizzBuzz(array) {
  let result = [];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      result.push('FizzBuzz');
    } else if (array[index] % 3 === 0) {
      result.push('Fizz');
    } else if (array[index] % 5 === 0) {
      result.push('Buzz');
    } else {
      result.push('bug!');
    }
  }
  return result;
}

// Desafio 9
function encode(str) {
  const letterChange = { a: 1, e: 2, i: 3, o: 4, u: 5 };
  return str.replace(/[aeiou]/g, match => letterChange[match]);
}

function decode(str) {
  return str.replace(/\d/g, match => { 'Zaeiou' [match] });
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
