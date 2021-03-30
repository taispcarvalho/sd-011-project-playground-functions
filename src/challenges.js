// Desafio 1
function compareTrue(value1, value2) {
  return value1 && value2;
}

// Desafio 2
function calcArea(base, height) {
  let answer = (base * height) / 2;
  return answer;
}

// Desafio 3
function splitSentence(value3) {
  var res = [];
  res.push(value3.split(" "));
  return res;
}

// Desafio 4

function concatName(value4) {
  // function endOfArray(value4){
  //   var last = value4[value4.length - 1];
  //   return last;
  // }
  // function firstOfArray(value4){
  //   var first = value4[0];
  //   return first;
  // }
  // return endOfArray, firstOfArray;
}

// Desafio 5
function footballPoints() {
  // seu código aqui
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
