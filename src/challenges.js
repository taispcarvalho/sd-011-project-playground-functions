// Desafio 1
function compareTrue(var1, var2) {
  return var1 && var2;
}

// Desafio 2
function calcArea(base, altura) {
  return (base * altura) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(array) {
  for (let index = 0; index < array.length; index += 1){
    return array = array[array.length - 1] + ', ' + array[0];
  }
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function findNumber(valor) {
  let numbers = 0;
  for (let index = 0; index < valor.length; index += 1) {
    if (valor[index] > numbers) {
      valor = valor[index];
    }
  }
  return valor;
}

function highestCount(var1) {
  var1 = [];
  let resultado = 0;
  for (let index1 = 0; index1 < var1.length; index1 += 1) {
    if (findNumber() === var1[index1])
      resultado += 1;
  }
  return resultado;
}
console.log(highestCount())
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  mouse = 10
  cat1 = 5
  cat2 = 5
  if (mouse - cat1 < mouse - cat2){
    return 'cat1';
  } else if (mouse - cat1 === mouse - cat2) {
    return 'os gatos trombam e o rato foge';
  } else {
    return 'cat2'
  }
  
}
console.log(catAndMouse());
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
