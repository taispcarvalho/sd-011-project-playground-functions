// Desafio 1
function compareTrue(value1, value2) {
  return true && true
}
/* console.log(compareTrue(true, true)) */

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2
}
/* console.log(calcArea(51, 1)) */

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}
/* console.log(splitSentence("vamo que vamo go Trybe")) */

// Desafio 4
function concatName(arrayDeString) {
  let firstName = arrayDeString[0]
  let lastName = arrayDeString[arrayDeString.length -1]
  /* let testOverFLow =  arrayDeString.slice(-1)[0]  */
/*   for (let index = 0; index = arrayDeString.lenght; index += 1){
    lastName = arrayDeString[2]
  } */
  return lastName.split().concat(firstName)
}
/* console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'])) */

// Desafio 5
function footballPoints() {


}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
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
