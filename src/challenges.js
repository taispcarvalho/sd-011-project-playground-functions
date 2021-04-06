// Desafio 1
function compareTrue(bool1, bool2) {
  return bool1 && bool2
}
console.log(compareTrue(true, false));

// Desafio 2
function calcArea(base, height) {
  return base * height / 2
}
// console.log(calcArea(51, 1));

// Desafio 3
function splitSentence(originalString) { 
  return originalString.split(' ');
}
// console.log(splitSentence('vamo que vamo'));

// Desafio 4
function concatName(stringExterna) {
  let arrai = stringExterna;
  return arrai[arrai.length-1] + ', ' + arrai[0]
}
    // console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}
// console.log(footballPoints(0, 0));

// Desafio 6
function highestCount(arrayDeNumeros) {
  let sortedArray = (arrayDeNumeros.sort()); 
  let highestNumber = sortedArray[sortedArray.length-1]; 
  let frequencyHighest = 0;
  for(let index = 0; index < arrayDeNumeros.length; index += 1){
    let verifiedNumber = arrayDeNumeros[index];
    if (highestNumber === verifiedNumber){
      frequencyHighest += 1;
    }
  }
  return frequencyHighest
  }
  console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));
  
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let catWinner ='';  
  let cat1Distance = Math.abs(mouse - cat1);
  let cat2Distance = Math.abs(mouse - cat2);

  if(cat1Distance < cat2Distance){
    catWinner = 'cat1';
  }else if(cat2Distance < cat1Distance){
    catWinner = 'cat2';
  }else if(cat1Distance === cat2Distance){
    catWinner = 'os gatos trombam e o rato foge';
  }
  return catWinner
}
console.log(catAndMouse(10, 22, 22));

// Desafio 8
function fizzBuzz(arrai) {
  let hello = [];
  for (let index = 0; index < arrai.length; index += 1){
    if(arrai[index] % 15 === 0){
      hello.push('fizzBuzz');
    }else if (arrai[index] % 3 === 0){
      hello.push('fizz');
    }else if (arrai[index] % 5 === 0){
      hello.push('buzz');
    }else {
      hello.push('bug!');
    }
   
  }
  return hello;
}
console.log(fizzBuzz([9, 25]));

// Desafio 9
function encode(string) {
  let newString = string; 
  for (index of string) {
    newString = newString.replace(/a/g, '1');
    newString = newString.replace(/e/g, '2');
    newString = newString.replace(/i/g, '3');
    newString = newString.replace(/o/g, '4');
    newString = newString.replace(/u/g, '5');
  }
  return newString;
}
console.log(encode("hai thara cum ovo deeeeeeeepascoau"));
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
