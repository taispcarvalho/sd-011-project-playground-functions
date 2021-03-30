// Desafio 1
function compareTrue(num1, num2) {
  if(num1 & num2) {
    return true;
  } else {
    return false;
  }
}

console.log(compareTrue(true, true));

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

console.log(calcArea(10, 50));
console.log(calcArea(5, 2));
console.log(calcArea(51, 1));

// Desafio 3
function splitSentence(string) {
  let array = string.split(' ');
  let newArray = [];
  newArray.push(array);
  return newArray;
}

console.log(splitSentence('Go Trybe'));

// Desafio 4
function concatName() {
  // seu código aqui
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties * 1;
}

console.log(footballPoints(14, 8));
console.log(footballPoints(1, 2));
console.log(footballPoints(0, 0));

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if(cat1 > cat2 ) {
    return 'cat1';
  } else if (cat2 > cat1) {
    return 'cat2';
  } else if (cat1 === cat2 && cat1 === mouse && cat2 === mouse){
    return 'Os gatos trombam e o rato foge';
  } else {
    return 'Os dois correm lado a lado empatadoooos!';
  }
}

console.log(catAndMouse(3, 2, 1));

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
