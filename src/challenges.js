// Desafio 1
function compareTrue(value1, value2) {
  // seu código aqui
  if (value1 === true && value2 === true) {
    return true;
  } 
    return false;
  
};

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) /2;

};

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  return string.split(' ');
};

// Desafio 4
function concatName(array) {
  // seu código aqui
  let formattedName = array[array.length - 1] + ', ' + array[0];
  return formattedName;
}; console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let result = (3 * wins) + ties;
  return result;
}

let highestArray = [9, 1, 2, 3, 9, 5, 7];
// Desafio 6
function highestCount(array) {
  // seu código aqui
  let higherNumber = 0;
  let repeatNumber = 0;
  for (let index = 0; index < array.length; index += 1){
    let possibleHigherNumber = higherNumber;
    higherNumber = array[index];
    if (higherNumber < possibleHigherNumber) {
      higherNumber = possibleHigherNumber;
          }
  }      
}
for (let index = 0; index < array.length; index += 1){
  if (higherNumber === array[index]){
    repeatNumber += 1;
      }
}
return repeatNumber;


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
