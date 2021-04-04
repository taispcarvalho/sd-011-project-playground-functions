// Desafio 1
function compareTrue(value1, value2) {
  return value1 && value2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(phrase) {
  return phrase.split(' ');
}

// Desafio 4
function concatName(strArray) {
  return `${strArray.slice(-1)}, ${strArray[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3 ) + ties;
}

// Desafio 6
function highestCount(numArray) {
   let highestValue =Math.max.apply(null,numArray);
   let repeat = 0;
   for(let index=0; index < numArray.length;index +=1){
       if(highestValue === numArray[index]){
         repeat += 1
       }
   }
   return repeat;
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
