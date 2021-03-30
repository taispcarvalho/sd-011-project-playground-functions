// Desafio 1
function compareTrue(bool1, bool2) {
  if (bool1 === true && bool2 === true) {
    return 'true';
  } else {
    return 'false';
  }
}
console.log(compareTrue(true, false));

// Desafio 2
function calcArea(base,height) {
  return (base * height)/2
}
console.log(calcArea(5, 10));

// Desafio 3

let letter = '';

function splitSentence(sentence) {
  for (index = 0; index < sentence.lenght; index += 1) {
    letter = sentence[index];
    if (letter = ' ') {
      sentenceSplitted.push 
    }
  }



}




var test = [1, 2, 3, 4]

console.log (test);

var index = test[1];
console.log(index);

// Desafio 4
// https://www.devmedia.com.br/javascript-concat-concatenando-arrays-e-strings/37964

function concatName(names) {
  return (names[names.length-1] + ', ' +names[0]);
}
console.log(concatName(['Vivian', 'Maria', 'Braga']));


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
