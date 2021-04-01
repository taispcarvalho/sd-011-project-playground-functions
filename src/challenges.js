// Desafio 1
function compareTrue(param1, param2) {
  if (param1 === true && param2 === true) {
  return true;
  } 
  return false;
}
// console.log(compareTrue(true, true));

// Desafio 2
let area = 0;
function calcArea(base, height) {
  area = (base * height) / 2;
  return area;
}
// console.log(calcArea(5, 2));

// Desafio 3
function splitSentence(stringPhrase) {
  let splitPhrase = stringPhrase.split(' ');
  return splitPhrase;
}
// console.log(splitSentence('Go Trybe'));

// Desafio 4 
function concatName(namesList) {
  return (namesList[namesList.length - 1] +',' + ' ' + namesList[0]);
}
// console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
let points = 0;
let winPoints = 3;
let tiesPoints = 1;
function footballPoints(wins, ties) {
  points = (wins * winPoints) + (ties * tiesPoints);
  return points;
}
// console.log(footballPoints(14, 8));

// Desafio 6
function highestCount(numbers) {
  let repetitions = 0;
  let highestNumber = 0;
  for (let index = 0; index < numbers.length; index +=1){
  if (numbers[index] > highestNumber) {
  highestNumber = numbers[index];
  }
}
  for (let i = 0; i < numbers.length; i +=1){
  if (numbers[i] === highestNumber) {
  repetitions += 1;
   }
    } 
    return repetitions;
  }
    console.log(highestCount([ 0, 0, 0]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
    
   if(cat1 - mouse < 0) {
    cat1 - mouse === (cat1 - mouse) * -1;
    if ((cat1 - mouse) < (cat2 - mouse)) {
    return 'cat1';
  }
  } if (cat2 - mouse < 0){
  }
  cat2 - mouse === (cat2 - mouse) * -1;
    if ((cat1 - mouse) > (cat2 - mouse)) {
    return 'cat2';
  }
  else ((cat1 === cat2) || (cat1 - mouse) === (cat2 - mouse))
  return 'os gatos trombam e o rato foge';
}
console.log(catAndMouse(1, 0, 2))

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
