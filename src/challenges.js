// Desafio 1
function compareTrue(number, number2) {
  return number && number2 === true;
}
console.log(compareTrue(false));

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}
console.log(calcArea(5, 2));

// Desafio 3
function splitSentence(nome) {
  let frase = nome.split(' ');
  return frase;
}
console.log(splitSentence('foguete'));

// Desafio 4
function concatName() {
    let nome = ['Rafael', 'Batista', 'de', 'Oliveira'];
    return(nome[3] + ', ' +  nome[0]);
}
console.log(concatName());

// Desafio 5
function footballPoints() {

}

// Desafio 6
function highestCount() {

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
