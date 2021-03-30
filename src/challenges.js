// Desafio 1 - FEITO
function compareTrue(boo1, boo2) {
  return boo1 && boo2;
}
console.log(compareTrue(false,true));


// Desafio 2 -FEITO
function calcArea(base, height) {
  return (base * height)/2
}
console.log(calcArea(51,1));

// Desafio 3 -FEITO
function splitSentence(phrase) {
  let arrayPhrase = phrase.split(' ');
  return arrayPhrase;
}
console.log(splitSentence('go trybe'))

// Desafio 4 -FEITO
function concatName(...arrayName) {
  return arrayName[arrayName.length -1].concat(',' + arrayName[0]);
}
console.log(concatName('Lucas', 'Cassiano', 'Ferraz', 'Paolillo'));

// Desafio 5 -FEITO
function footballPoints(wins, ties) {
  let points=(wins * 3)+ ties;
  return points;
}
console.log(footballPoints(0,0));

// Desafio 6 -FEITO
function highestCount(...numberArray) {
  let highestNumber= 0;
  let highestNumberCount=0;
for(let index = 0; index<numberArray.length; index+=1){
    if(highestNumber<numberArray[index]){
        highestNumber=numberArray[index]
    }
}
for(let index2 = 0; index2<numberArray.length; index2+=1){
  if(highestNumber===numberArray[index2]){
     highestNumberCount=highestNumberCount + 1;
  }else{
      highestNumberCount+=0;
  }
}

return highestNumberCount;
}
console.log(highestCount(0, 0, 0));

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
