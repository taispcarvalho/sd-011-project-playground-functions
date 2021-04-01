// Desafio 1
function compareTrue(bool1, bool2) {
    if(bool1 && bool2 === true){
      return true
    } else {
      return false
    }
}

console.log(compareTrue(false, false))

// Desafio 2
function calcArea(base, height) {
  let areaTriangulo = (base * height)/2
  return areaTriangulo
}

console.log(calcArea(51,1))

// Desafio 3
function splitSentence(sentence) {
  return sentence.split(' ')
}

console.log(splitSentence('foguete'))

// Desafio 4
function concatName(arrayOfStrings) {
  let lastFirst = arrayOfStrings[arrayOfStrings.length -1] + ', ' + arrayOfStrings[0]  
  return lastFirst
}

console.log(concatName(['captain', 'my', 'captain']))

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
