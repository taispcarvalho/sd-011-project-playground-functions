// Desafio 1
function compareTrue(bool1,bool2) {
  return bool1 && bool2;
}

// Desafio 2
function calcArea(base,height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(sentence) {
  return sentence.split(' ');
}

// Desafio 4
function concatName(arrayStrings) {
  let posicao1 = arrayStrings[0];
  let posicao2 = arrayStrings[arrayStrings.length-1]
  return posicao1 + ', ' + posicao2;
}

// Desafio 5
function footballPoints(wins,ties) {
  return (3 * wins + ties);
}

// Desafio 6
function highestCount(arrayValores) {
  let countHigh = 0;
  function highestNumber(arrayValores){
    return Math.max.apply(null, arrayValores);
  }
  for(let index = 0;index<arrayValores.length;index+=1){
    if(highestNumber(arrayValores) === arrayValores[index]){
      countHigh+=1;
    }
  }
  return countHigh;
}

// Desafio 7
function catAndMouse(mouse,cat1,cat2) {
  if(Math.abs(Math.abs(mouse)-Math.abs(cat1)) > Math.abs(Math.abs(mouse)-Math.abs(cat2))){
    return 'cat2';
  }
  else if(Math.abs(Math.abs(mouse)-Math.abs(cat1)) === Math.abs(Math.abs(mouse)-Math.abs(cat2))){
    return 'os gatos trombam e o rato foge';
  }
  else{
    return 'cat1';
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
