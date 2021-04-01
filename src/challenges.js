// Desafio 1
function compareTrue(value1, value2) {
  return value1 && value2
}
console.log(compareTrue(true, true))

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2
}
console.log(calcArea(51, 1))

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}
console.log(splitSentence("vamo que vamo"))

// Desafio 4
function concatName(arrayDeString) {
  let firstName = arrayDeString[0]
  let lastName = arrayDeString[arrayDeString.length - 1]
  /* let testOverFLow =  arrayDeString.slice(-1)[0]  */

  return lastName.split().concat(firstName)
  /* return lastName + " " + firstName */
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']))

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties)
}
console.log(footballPoints(1, 2))

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
console.log(highestCount(arrayTest))

// Desafio 7
function catAndMouse() {

}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
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
