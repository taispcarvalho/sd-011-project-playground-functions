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
function concatName(arrayDeString) {
  let firstName = arrayDeString[0];
  let lastName = arrayDeString[arrayDeString.length - 1];
  let concat = `${lastName}, ${firstName}`;
  return concat;
}
// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties);
}
// Desafio 6
function highestCount(arrayHigherNumber) {
  let higherNumber = 0;
  let recurrentNumber = 0;
  for (let index of arrayHigherNumber) {
    if (higherNumber < index) {
      higherNumber = index;
    }
  }
  for (let index in arrayHigherNumber) {
    if (higherNumber === arrayHigherNumber[index]) {
      recurrentNumber += 1;
    }
  }
  return recurrentNumber;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let catClose1 = Math.abs(cat1 - mouse);
  let catClose2 = Math.abs(cat2 - mouse);
  if (catClose1 < catClose2) {
    return 'cat1';
  } if (catClose2 < catClose1) {
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}
// Desafio 8
function fizzBuzz(arrayFizzBuzz) {
  let arrayString = [];
  for (let index in arrayFizzBuzz) {
    if (arrayFizzBuzz[index] % 3 === 0 && arrayFizzBuzz[index] % 5 === 0) {
      arrayString.push('fizzBuzz');
    } else if (arrayFizzBuzz[index] % 3 !== 0 && arrayFizzBuzz[index] % 5 !== 0) {
      arrayString.push('bug!');
    } else if (arrayFizzBuzz[index] % 3 === 0) {
      arrayString.push('fizz');
    } else if (arrayFizzBuzz[index] % 5 === 0) {
      arrayString.push('buzz');
    }
  }
  return arrayString;
}

// Desafio 9
function encode(word) {
  for (index of word) {
    word = word.replace(/a/gi, 1);
    word = word.replace(/e/gi, 2);
    word = word.replace(/i/gi, 3);
    word = word.replace(/o/gi, 4);
    word = word.replace(/u/gi, 5);
  }
  return word
}
/* console.log(encode("hi there!")); */

function decode(reverseWord) {
  for (index of reverseWord) {
    reverseWord = reverseWord.replace(/1/gi, 'a');
    reverseWord = reverseWord.replace(/2/gi, 'e');
    reverseWord = reverseWord.replace(/3/gi, 'i');
    reverseWord = reverseWord.replace(/4/gi, 'o');
    reverseWord = reverseWord.replace(/5/gi, 'u');
  }
  return reverseWord
}
/* console.log(decode("h3 th2r2!")); */

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
