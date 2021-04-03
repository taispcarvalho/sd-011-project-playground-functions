// Desafio 1
function compareTrue(value1, value2) {
  if (value1 && value2 === true) {
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
  let output = [];
  let text = '';
  for (let index = 0; index < frase.length; index += index) {
    text += frase[index];
    if (frase[index] === ' ') {
      output.push(text);
      text = '';
    }
  }
  return output;
}

// Desafio 4
function concatName(frase) {
  let output = '';
  for (let index = 0; index < frase.length; index += index) {
    output += frase[index];
    index = frase.length - 1;
    output += `, ${frase[index]} `;
  }
  console.log(output);
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
