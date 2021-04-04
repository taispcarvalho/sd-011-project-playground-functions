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
  console.log(nome[3], nome[0]);
}
concatName();

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties * 1;
}
console.log(footballPoints(1, 2));

// Desafio 6
// function highestCount(numero) {
//   numero = Math.max(...[5,4,4,2,10,15,15,12,6,15]);  
//   let maiorNumero = numero;
//   for (let i = 1; i < numero.length; i++) {
//     if(numero[i] > maiorNumero) {
//       maiorNumero = numero[i];
//     }
//   }
//   return maiorNumero;   
// }
// console.log(highestCount());

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (mouse < cat2 && cat2 > cat1) {
    return ('cat1');
  } else if (cat1 === cat2) {
    return ('os gatos trombam e o rato foge');
  } else {
    return ('cat2');
  }
}
console.log(catAndMouse(0, 6, 6));

// Desafio 8
function fizzBuzz() {
  for (let i = 0; )
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
  splitSentence,
};
