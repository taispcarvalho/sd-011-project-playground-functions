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
  return frase.split(' ');
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
      if (array[index] > array[index + 1]) {
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


// Desafio 8
function fizzBuzz(array) {
  let stringResult = [];
  for(let index = 0; index < array.length; index += 1) {
    stringResult.push(checkDivider(array[index]));
  }
  return stringResult;
}
function checkDivider(value) {
  if (value % 3 === 0 && value % 5 === 0) {
    return 'fizzBuzz';
  }
  else if(value % 3 === 0) {
    return 'fizz';
  }
  else if(value % 5 === 0) {
    return 'buzz';
  }
  return 'bug!';
}
// Desafio 9

function encode(string) {
  string = string.replace(/a/g, '1');
  string = string.replace(/e/g, '2');
  string = string.replace(/i/g, '3');
  string = string.replace(/o/g, '4');
  string = string.replace(/u/g, '5');
  return string;
}
console.log(encode('hi there'))

function decode(string) {
  string = string.replace(/1/g, 'a');
  string = string.replace(/2/g, 'e');
  string = string.replace(/3/g, 'i');
  string = string.replace(/4/g, 'o');
  string = string.replace(/5/g, 'u');
  return string;
}
console.log(decode('h3 th2r2'))



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
