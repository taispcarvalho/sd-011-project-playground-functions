// Desafio 1 - FEITO
function compareTrue(boo1, boo2) {
  return boo1 && boo2;
}
// Desafio 2 -FEITO
function calcArea(base, height) {
  return (base * height)/2
}
// Desafio 3 -FEITO
function splitSentence(phrase) {
  let arrayPhrase = phrase.split(' ');
  return arrayPhrase;
}
// Desafio 4 -FEITO - NEED REVIEW
function concatName(arrayName) {
  return arrayName[arrayName.length -1].concat(", " + arrayName[0]);
}
// Desafio 5 -FEITO
function footballPoints(wins, ties) {
  let points=(wins * 3)+ ties;
  return points;
}
// Desafio 6 -FEITO - NEED REVIEW
function highestCount(numberArray) {
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
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if(cat1 - mouse === cat2 - mouse){
      resultado = "os gatos trombam e o rato foge"
  }
  else if(cat1 - mouse <cat2 -mouse){
      resultado = 'cat1'
  }else{
      resultado = 'cat2'
  }
  return resultado;
}

// Desafio 8 -FEITO - NEED REVIEW
function fizzBuzz(arrayFizzBuzz) {
  secondArray=[];
  for(index=0; index<arrayFizzBuzz.length; index+=1){
    if(arrayFizzBuzz[index]%3===0 && arrayFizzBuzz[index]%5===0){
      secondArray.push('fizzBuzz')
    }else if(arrayFizzBuzz[index]%5===0){
      secondArray.push('buzz')
    }else if (arrayFizzBuzz[index]%3===0){
      secondArray.push('fizz')
    }else{
      secondArray.push('bug!')
    }
  }
  return secondArray
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
