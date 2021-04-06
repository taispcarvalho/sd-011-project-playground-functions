// Desafio 1
function compareTrue(valueA, valueB) {
  if (valueA === true && valueB === true) {
    return true;
  }
  return false;
}
console.log(compareTrue(false, true));

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}
console.log(calcArea(10, 50));
console.log(calcArea(5, 2));
console.log(calcArea(51, 1));

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}
console.log(splitSentence('go Trybe'));
console.log(splitSentence('Vamo que Vamo'));
console.log(splitSentence('foguete'));

// Desafio 4
function concatName(string) {
  let lastItem = string[string.length - 1].toString();
  let firstItem = string[0].toString();
  let item = (`${lastItem}, ${firstItem}`);
  return item;
}  
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));
console.log(concatName(['foguete', 'não', 'tem', 'ré']));
console.log(concatName(['captain', 'my', 'captain']));

// Desafio 5
function footballPoints(wins, ties) {
  let winsScore = wins * 3;
  let tiesScore = ties;
  let countScore = winsScore + tiesScore;
  return countScore;
}
console.log(footballPoints(14, 8));
console.log(footballPoints(1, 2));
console.log(footballPoints(0, 0));

// Desafio 6
function highestCount(numbers) { 
  let countHighestNumberAppears = 0;
  numbers.sort(function (a,b) {return b - a});
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[0] === numbers[index]){
      countHighestNumberAppears += 1;
    }
  }
  return countHighestNumberAppears;
}
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceMouseCat1 = Math.abs(mouse - cat1);
  let distanceMouseCat2 = Math.abs(mouse - cat2);
  if (distanceMouseCat1 < distanceMouseCat2) {
    return 'cat1';
  } else if (distanceMouseCat1 > distanceMouseCat2) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}
console.log(catAndMouse(4, 1, 2));
console.log(catAndMouse(18, 12, 6));
console.log(catAndMouse(4, 2, 2));

// Desafio 8
function dividers(number) {
  if (number % 15 === 0) {
    return 'fizzBuzz';
  }
  if(number % 3 === 0){
    return 'fizz';
  }  
  if(number % 5 === 0){
    return 'buzz';
  }
  return 'bug!';
}

function fizzBuzz(numbers) {
 let array = [];
  for (let number of numbers) {
    array.push(dividers(number));
  }
 return array;
}
console.log(fizzBuzz([2, 15, 7, 9, 45]));

// Desafio 9
function encode(string) {
  string = string.replace(/a/g, '1');
  string = string.replace(/e/g, '2');
  string = string.replace(/i/g, '3');
  string = string.replace(/o/g, '4');
  string = string.replace(/u/g, '5');
  return string;
}
function decode(string) {
  string = string.replace(/1/g, 'a');
  string = string.replace(/2/g, 'e');
  string = string.replace(/3/g, 'i');
  string = string.replace(/4/g, 'o');
  string = string.replace(/5/g, 'u');
  return string;
}
console.log(encode('hi there!'));
console.log(decode('h3 th2r2!'));

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
