// Desafio 1
function compareTrue(value1, value2) {
  return value1 && value2
}
// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2
}
// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}
// Desafio 4
let array1 = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']
function concatName(arrayDeString) {
  return arrayDeString[arrayDeString.length -1] + " " + arrayDeString[0]
}
console.log(concatName(array1))

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties)
}
// Desafio 6
let arrayTest = [9, 1, 3, 9, 5, 7];

/* function arrayNumber(arrayTest) {
  let higherNumber = 0;
  for (let index of arrayTest) {
    if (higherNumber < index) {
      higherNumber = index
    }
  }
  return higherNumber
}
console.log(arrayNumber(arrayTest))

function highestCount(arrayHigherNumber) {
  let recurrentNumber = 0;
  for (let index in arrayHigherNumber) {
    if (arrayNumber(arrayTest) == arrayHigherNumber[index]) {
      recurrentNumber += 1
    }
  }
  return recurrentNumber
} */
function highestCount(arrayHigherNumber) {
  let higherNumber = 0;
  let recurrentNumber = 0;
  for (let index of arrayHigherNumber) {
    if (higherNumber < index) {
      higherNumber = index
      console.log(higherNumber)
    }
  }

  for (let index in arrayHigherNumber) {
    if (higherNumber == arrayHigherNumber[index]) {
      recurrentNumber += 1
      console.log(recurrentNumber)
    }
  }
  return recurrentNumber
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let result = " ";
  let catCLose1 = cat1 - cat2
  let catClose2 = cat2 - cat1
  if (cat1 === cat2) {
    result = 'os gatos trombam e o rato foge';
  } else if (cat1 < cat2) {
    result = 'cat1'
  } else if (cat2 < cat1) {
    result = 'cat2'
  }
  return result
}
console.log(catAndMouse(0,4,4))
// Desafio 8
let arrayFizzBuzz = [2, 15, 7, 9, 45];
function fizzBuzz(arrayFizzBuzz) {
  let arrayString = [];
  for (let index in arrayFizzBuzz) {
    if (arrayFizzBuzz[index] % 3 == 0 && arrayFizzBuzz[index] % 5 == 0) {
      arrayString.push('fizzBuzz');
    } else if (arrayFizzBuzz[index] % 3 !== 0 && arrayFizzBuzz[index] % 5 !== 0) {
      arrayString.push('bug!');
    } else if (arrayFizzBuzz[index] % 3 == 0) {
      arrayString.push('fizz');
    } else if (arrayFizzBuzz[index] % 5 == 0) {
      arrayString.push('buzz')
    }
  }
  return arrayString
}

// Desafio 9
function encode(string) {
}

function decode() {
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
