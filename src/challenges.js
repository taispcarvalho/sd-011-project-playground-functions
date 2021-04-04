// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true){ 
    return true;
  } else {
    return false;
  }
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
function concatName(string) {
  let firstString = string[0];
  let lastString = string[string.lenght-1];
  return firstString + ', ' + lastString;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins*3) + ties;  
}

// Desafio 6
function highestCount(listNumbers) {
  let highestNumber = listNumbers[0];
  let appearNumber = 0;

  for (let index =0; index < listNumbers.lenght; index +=1){
    if (listNumbers[index] > highestNumber){
      highestNumber = listNumbers[index];
    }
  }
  
  for (let index =0; index < listNumbers.lenght; index +=1)) {
    if (listNumbers[index] === highestNumber){
      appearNumber += 1;
      }
  }
  return appearNumber;
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
