// Desafio 1
function compareTrue(bool1, bool2) {
  return bool1 && bool2
}
console.log(compareTrue(true, false));

// Desafio 2
function calcArea(base, height) {
  return base * height / 2
}
console.log(calcArea(51, 1));

// Desafio 3
function splitSentence(originalString) { 
  return originalString.split(' ');
}
console.log(splitSentence('vamo que vamo'));

// Desafio 4
function concatName(stringExterna) {
  let arrai = stringExterna;
  return arrai[0] + ', ' + arrai[arrai.length-1]
}
    console.log(concatName(['captain', 'my', 'captain']));

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}
console.log(footballPoints(0, 0));

// Desafio 6
function highestCount(arrayDeNumeros) {
  let sortedArray = (arrayDeNumeros.sort()); 
  let highestNumber = sortedArray[sortedArray.length-1]; 
  let frequencyHighest = 0;
  for(let index = 0; index < arrayDeNumeros.length; index += 1){
    numeroVerificando = arrayDeNumeros[index];
    if (highestNumber === numeroVerificando){
      frequencyHighest += 1;
    }
  }
  return frequencyHighest
  }
  console.log(highestCount([0, 4, 4, 4, 9, 2, 1]));
  
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if(cat1 > cat2){
    console.log('cat1');
  }else if(cat2 > cat1){
    console.log('cat2');
  }else if(mouse === cat1 && mouse === cat2){
    console.log('HAHAHAHAHHA');
  } else{
    console.log('nao sei oq fazer');
  }
  
}
console.log(catAndMouse(10, 12, 12));

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
