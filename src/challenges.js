// Desafio 1 - #VQV
function compareTrue(bol1, bol2) {
  return bol1 && bol2;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}
// console.log(calcArea(10, 50));

// Desafio 3
function splitSentence(frase) {
  return frase.split(' ');
}
// console.log(splitSentence('go trybe'));

// Desafio 4
function concatName(value) {
  let end = value.length - 1;
  let name = value[end] + ', ' + value[0];
  return name;
}
// console.log(concatName(['foguete', 'não', 'tem', 'ré']));

// Desafio 5
function footballPoints(wins, ties) {
  let victory = 3;
  let draw = 1;
  let result = (wins * victory) + (ties * draw);
  return result;
}
// console.log(footballPoints(1, 2));

function higherNumber(numbers) {
  let higher = numbers[0];
  for (let number of numbers) {
    if (number > higher) {
      higher = number;
    }
  }
  return higher;
}
// console.log(higherNumber([0, 4, 4, 4, 9, 2, 1]));

// Desafio 6
function highestCount(list) {
  let biggerNumber = higherNumber(list);
  let count = 0;
  for (let index of list) {
    if (index === biggerNumber) {
      count += 1;
    }
  }
  return count;
}
// console.log(highestCount([0, 0, 0]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let mouseCat1 = (cat1 - mouse) ** 2;
  let mouseCat2 = (cat2 - mouse) ** 2;
  let result;

  if (mouseCat1 < mouseCat2) {
    result = 'cat1';
  } else if (mouseCat2 < mouseCat1) {
    result = 'cat2';
  } else {
    result = 'os gatos trombam e o rato foge';
  }
  return result;
}
// console.log(catAndMouse(1, 0, 3));

function fizz(number) {
  let numberOrFizz;

  if (number % 3 === 0) {
    numberOrFizz = true;
  } else {
    numberOrFizz = false;
  }
  return numberOrFizz;
}
// console.log(fizz(41));

function buzz(number) {
  let numberOrBuzz;

  if (number % 5 === 0) {
    numberOrBuzz = true;
  } else {
    numberOrBuzz = false;
  }
  return numberOrBuzz;
}
// console.log(buzz(41));

// Desafio 8
function fizzBuzz(list) {
  let resultFizzBuzz = [];

  for (let index of list) {
    // let isFizz = fizz(index);
    // let isBuzz = buzz(index);
    let isFizzBuzz = fizz(index) + '' + buzz(index);
    switch(isFizzBuzz) {
      case 'truetrue':
        resultFizzBuzz.push('fizzBuzz');
        break;
      case 'truefalse':
        resultFizzBuzz.push('fizz');
        break;
      case 'falsetrue':
        resultFizzBuzz.push('buzz');
        break;
      default:
        resultFizzBuzz.push('bug!');
    }
    // if (isFizz === 'fizz' && isBuzz === 'buzz') {
    //   resultFizzBuzz.push('fizzBuzz');
    // } else if (isFizz === 'fizz' && isBuzz !== 'buzz') {
    //   resultFizzBuzz.push('fizz');
    // } else if (isFizz !== 'fizz' && isBuzz === 'buzz') {
    //   resultFizzBuzz.push('buzz');
    // } else {
    //   resultFizzBuzz.push('bug!');
    // }
  }
  return resultFizzBuzz;
}
// console.log(fizzBuzz([7, 9]));
// console.log(fizzBuzz([2, 15, 7, 9, 45]));

function letterNumber(letter) {
  let options = {
    letters: ['a', 'e', 'i', 'o', 'u'],
    numbers: ['1', '2', '3', '4', '5'],
  };
  let result = letter;
  for (let index = 0; index < options.letters.length; index += 1) {
    if (options.letters[index] === letter) {
      result = options.numbers[index];
    }
  }
  return result;
}
// console.log(letterNumber('a'));

function numberLetter(number) {
  let options = {
    letters: ['a', 'e', 'i', 'o', 'u'],
    numbers: ['1', '2', '3', '4', '5'],
  };
  let result = number;
  for (let index = 0; index < options.numbers.length; index += 1) {
    if (options.numbers[index] === number) {
      result = options.letters[index];
    }
  }
  return result;
}
// console.log(numberLetter('1'));

// Desafio 9
function encode(code) {
  let phrase = code.split('');
  let arrayPhrase = [];
  let theCode;

  for (let index of phrase) {
    arrayPhrase.push(letterNumber(index));
    theCode = arrayPhrase.join('');
  }
  return theCode;
}
// console.log(encode('hi there!'));

function decode(uncode) {
  let codedPhrase = uncode.split('');
  let arrayCodedPhrase = [];
  let theUncode;

  for (let index of codedPhrase) {
    arrayCodedPhrase.push(numberLetter(index));
    theUncode = arrayCodedPhrase.join('');
  }
  return theUncode;
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
