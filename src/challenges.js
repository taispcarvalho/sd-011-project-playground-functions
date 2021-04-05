// Desafio 1
function compareTrue(value1, value2) {
  return value1 && value2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(phrase) {
  let arrayPhrase = phrase.split(' ');
  return arrayPhrase;
}

// Desafio 4
function concatName(name) {
  for (let index = 0; index <= name.length; index++) {
    return name.toString ((index = name.length - 1) + (index = 0))
  }  
  let stringName = name[name.length - 1] + ',' + name[0];
  return stringName.toString();
}

// Desafio 5
function footballPoints(wins, ties) {
  let totalPoints = (wins * 3) + ties;
  return totalPoints;
} 

// Desafio 6
function highestCount(maximNumber) {
  let maior = Math.max(...maximNumber);
  let contador = 0;
  for (let index = 0; index < maximNumber.length; index += 1) {
    if (maior === maximNumber[index]) {
      contador += 1;
    } else {}
  } return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (mouse - cat1 > mouse - cat2) {
    console.log('cat2');
  } else if (mouse - cat1 < mouse - cat2) {
    return 'cat1';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz() {

// Desafio 9
function encode() {

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
}