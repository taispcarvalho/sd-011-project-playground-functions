// Desafio 1 - FEITO
function compareTrue(boo1, boo2) {
  return boo1 && boo2;
}
// Desafio 2 -FEITO
function calcArea(base, height) {
  return (base * height) / 2;
}
// Desafio 3 -FEITO
function splitSentence(phrase) {
  let arrayPhrase = phrase.split(' ');
  return arrayPhrase;
}
// Desafio 4 -FEITO
function concatName(arrayName) {
  return arrayName[arrayName.length - 1].concat(', ' + arrayName[0]);
}
// Desafio 5 -FEITO
function footballPoints(wins, ties) {
  let points = (wins * 3) + ties;
  return points;
}
// Desafio 6 -FEITO
function highestCount(numberArray) {
  let highestNumber = 0;
  let highestNumberCount = 0;
  for (let index = 0; index < numberArray.length; index += 1){
    if (highestNumber < numberArray[index]){
      highestNumber = numberArray[index];
    }
  }
  for (let index2 = 0; index2 < numberArray.length; index2 += 1){
    if (highestNumber === numberArray[index2]){
    highestNumberCount = highestNumberCount + 1;
    } else {
    highestNumberCount+=0;
    }
  }

return highestNumberCount;
}
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
 let cat1Distance = 0;
 let cat2Distance = 0;
 let result = 0;
 if (mouse >= cat1){
  cat1Distance = (mouse - cat1);
 } else {
  cat1Distance = (cat1 - mouse);
 }
 if (mouse >= cat2){
  cat2Distance = (mouse - cat2);
 } else {
   cat2Distance = (cat2 - mouse);
 }
 if (cat1Distance === cat2Distance){
  result = 'os gatos trombam e o rato foge';
 } else if (cat1Distance<cat2Distance){
  result = 'cat1';
 } else {
  result = 'cat2';
 }
 return result
}

// Desafio 8 -FEITO
function fizzBuzz(arrayFizzBuzz) {
  secondArray = [];
  for (index = 0; index < arrayFizzBuzz.length; index += 1){
    if (arrayFizzBuzz[index]%3 === 0 && arrayFizzBuzz[index]%5 === 0){
      secondArray.push('fizzBuzz');
    } else if (arrayFizzBuzz[index]%5 === 0){
      secondArray.push('buzz');
    } else if (arrayFizzBuzz[index]%3 === 0){
      secondArray.push('fizz');
    } else {
      secondArray.push('bug!');
    }
  }
  return secondArray
}
// Desafio 9 -FEITO
function encode(encoder) {
  let result = encoder.replace(/a/g, '1');
  result = result.replace(/e/g, '2');
  result = result.replace(/i/g, '3');
  result = result.replace(/o/g, '4');
  result = result.replace(/u/g, '5');
    
return result
}
function decode(decoder) {
  let result = decoder.replace(/1/g, 'a');
  result = result.replace(/2/g, 'e');
  result = result.replace(/3/g, 'i');
  result = result.replace(/4/g, 'o');
  result = result.replace(/5/g, 'u');
    
return result  
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
