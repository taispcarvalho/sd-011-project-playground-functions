// Desafio 1
function compareTrue(firstBool, secondBool) {
  return firstBool && secondBool;
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
function concatName(array) {
  return array[array.length - 1] + ', ' + array[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(array) {
  let maiorNumero;
  let contador = 0;
  for (let index = 0; index < array.length; index += 1){
    if(index === 0 || array[index] >= maiorNumero){
      maiorNumero = array[index];
    }
  }
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === maiorNumero){
    contador += 1;
    }
  }
  return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let firstDistance;
  let secondDistance;
  if (mouse <= cat1){
    firstDistance = cat1 - mouse;
  } else {
    firstDistance = mouse - cat1;
  }

  if (mouse <= cat2){
    secondDistance = cat2 - mouse;
  } else {
    secondDistance = mouse - cat1;
  }

  if (firstDistance < secondDistance){
    return "cat1";
  } else if (firstDistance > secondDistance){
    return "cat2";
  } else {
    return "os gatos trombam e o rato foge";
  }
}

// Desafio 8
function fizzBuzz() {
  
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
