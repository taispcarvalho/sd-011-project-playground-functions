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
  let myarr = (nome[3]) + ',' + (nome[0]);
  console.log(myarr);
}
concatName();

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3 + ties * 1);
}
console.log(footballPoints(1,2));

// Desafio 6
function highestCount() {

}

function catAndMouse(mouse, cat1, cat2) {
  if (mouse < cat2 && cat2 > cat1) {
    return ('cat1');
  } else if (cat1 === cat2) {
    return ('os gatos trombam e o rato foge');
  } else {
    return ('cat2');
  }
}
console.log(catAndMouse(0, 6, 12));

// Desafio 8

function fizzBuzz() {
  let numeros  = [7, 9];
  for (let index = 0; index < numeros.length; index ++) {    
    if ((numeros[index] % 3) === 0 && ((numeros[index] % 5) === 0)) {
      return (numeros[index],'fizzBuzz');
    }else if ((numeros[index] % 3) === 0 ) {
      return (numeros[index],'fizz');
    }else if ((numeros[index] % 5) === 0 ) {
      return (numeros[index],'buzz');
    }else if ((numeros[index] % 5) != 0 && ((numeros[index] % 5) != 0)) {
      return (numeros[index],'bug');
    }
  }
}
console.log(fizzBuzz());

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
  highestCount,
  fizzBuzz,
  footballPoints,
  splitSentence,
}