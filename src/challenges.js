// Desafio 1
function compareTrue(v1, v2) {
  if (v1 === true && v2 === true) {
   return true
  } else {
   return false
 }
}
// Desafio 2
function calcArea(base,height) {
 var resul = (base * height)/2
 return resul
}

// Desafio 3
function splitSentence(string) {
  var arrayOfStrings = string.split(' ')
  return arrayOfStrings;
}

// Desafio 4
function concatName(name) {
 return (name[1] + ", " + name[-1])
}

// Desafio 5
function footballPoints(wins,ties) {
  var total = (wins * 3) + ties
  return total;
}

// Desafio 6
function highestCount(nunbers) {
  var biguer = 0
  for (let index = 0; index < nunbers.length; index+=1) {
    if (biguer < nunbers[index]) {
      biguer = nunbers[index]
    }
    return biguer;
  }
}

// Desafio 7
function catAndMouse(cat1, cat2, mouse) {
if (cat1[index] - mouse[index] > cat2[index] - mouse[index]) {
  return cat2
}else{
  return cat1;
}
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
