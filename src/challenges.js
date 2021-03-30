// Desafio 1
function compareTrue(n, m) {
  // seu código aqui
  if (n === true && m === true){
    return true;
  }else if (n === true && m === false) {
    return false;
  }else if (n === false && m === true){
    return false;
  }else{
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let triangle = (base*height)/2;
  return triangle;
}

// Desafio 3
function splitSentence() {
  // seu código aqui
  let listText = text.split(' ');
  return listText;
}

// Desafio 4
function concatName(array) {
  // seu código aqui
  let firstIndex = array[0];
  let lastIndex = array[array.length - 1];
  let textConcat = lastIndex + ' , ' + firstIndex;
  return textConcat;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let totalPoints = (wins * 3) + (ties * 1);
  return totalPoints;
}

// Desafio 6
function highestCount(array) {
  // seu código aqui
  let biggerNumber = 0;
  let countNumber = 0;

  for(let index =0; index < array.length; index+=1){
    if(array[index] > biggerNumber){
      biggerNumber = array[index];
    }
  }

  for(let index = 0; index < array.length; index+=1){
    countNumber+=1;
  }

  return countNumber;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let longCat1 = mouse - cat1;
  let longCat2 = mouse - cat2;

  if (longCat1 < longCat2){
    return('cat2');
  }else if (longCat1 > longCat2){
    return('cat1');
  }else {
    return('os gatos trombam e o rato foge')
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
