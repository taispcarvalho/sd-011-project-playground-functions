// Desafio 1
function compareTrue(expression, expression2) {
  if (expression && expression2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(stringArr) {
  let arr = [stringArr.pop(stringArr), stringArr.shift(stringArr)];
  return arr.join(', ');
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties * 1);
}

// Desafio 6
function highestCount(x) {
  let soma = 0;
  for (let index = 0; index < x.length; index += 1) {
    if (Math.max.apply(null, x) === x[index]) { soma += 1; }
  }
  return soma;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {

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
