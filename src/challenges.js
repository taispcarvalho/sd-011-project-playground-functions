// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  } else {
    return false;
  }
}
console.log(compareTrue(true, true));

// Desafio 2
function calcArea(base, heigth) {
  return (base * heigth) / 2;
}
console.log(calcArea(51, 1));


// Desafio 3
function splitSentence(param1) {
    return param1.split(' ');
}
console.log(splitSentence('go Trybe'));

// Desafio 4
function concatName(arrayString) {
  let item = arrayString[arrayString.length - 1] + ', ' + arrayString[0];
  return item;
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + (ties * 1);
  return points;
}
console.log(footballPoints(1, 2));

// Desafio 6
function highestCount(arrayNumbers) {
  let repetition = 0;
  let maior = Math.max.apply(null, arrayNumbers);
  for (let index = 0; index < arrayNumbers.length; index += 1) {
    if (arrayNumbers[index] === maior)  {
      repetition += 1 }
  } 
  return repetition;   
}
console.log(highestCount([0, 0, 0]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {  
  let distanceMouseCat1 = Math.abs(cat1 - mouse);
  let distanceMouseCat2 = Math.abs(cat2 - mouse);
  if (distanceMouseCat2 < distanceMouseCat1) {
    return 'cat2';
  } else if (distanceMouseCat2 > distanceMouseCat1) {
    return 'cat1';
  } else {
    return 'os gatos tombam e o rato foge'
  }  
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
