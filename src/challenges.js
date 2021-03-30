// Desafio 1
function compareTrue(input1, input2) {
  return (input1 && input2);
  // console.log(false&&false);
  // console.log(true&&true);
  // console.log(true&&false)
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return (area);
}

// Desafio 3
function splitSentence(string) {
  let char = '';
  let array = [];
  let newString = '';
  for (let index = 0; index <= string.length; index += 1) {
    char = string[index];
    if (char === ' ' || index === string.length) {
      array.push(newString);
      newString = '';
    } else {
      newString += char;
    }
  }
  return (array);
}

// Desafio 4
function concatName() {
  // seu código aqui
}

// Desafio 5
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

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
