// Desafio 1
function compareTrue(case1, case2) {
  if (case1 && case2) {
    return true;
  }
    return false;
}
// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}
// Desafio 3
function splitSentence(frase) {
  return frase.split(" ");
}
// Desafio 4
function concatName(array) {
  return array[array.length - 1] + ', ' + array[0];
  
}
// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}
// Desafio 6

function highestCount(array) {

  function highestNumber(array) {
    let higherNum = 0;
    for (let index = 0; index < array.length; index += 1) {
      if (array[index] > array[index + 1]){
        higherNum = array[index];
      }
    }
    return higherNum;
  }
  let count = 0;
    for (let secondIndex = 0; secondIndex < array.length; secondIndex += 1) {
      if (array[secondIndex] === highestNumber(array)){
        count += 1;
      }
    }
    return count;
  }
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distcat1 = Math.abs(mouse - cat1); 
  let distcat2 = Math.abs(mouse - cat2);
  if (distcat1 === distcat2){
    return 'os gatos trombam e o rato foge';
  }
  else if (distcat1 < distcat2){
    return 'cat1';
  }
    return 'cat2'
  }
console.log(catAndMouse(10, 4, 22))

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
