// Desafio 1
function compareTrue(param1, param2) {
  if (param1 && param2 === true) {
    return true;
  } else {
    return false;
  }
}
console.log(compareTrue(true, true));
// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}
console.log(calcArea(10, 50));
// Desafio 3
function splitSentence(frase) {
  let space = ' ';
  let fraseParaSeparar = frase.split(space);
  return fraseParaSeparar;
}
console.log(splitSentence('go Trybe'));
// Desafio 4
function concatName(array) {
  let fraseConcatenada = '';
  fraseConcatenada += array[array.length - 1];
  fraseConcatenada += ', ';
  fraseConcatenada += array[0];
  return fraseConcatenada;
}
console.log(concatName(['captain', 'my', 'captain']));
// Desafio 5
function footballPoints(wins, ties) {
  let winPoints = 3 * wins;
  let tiePoints = 1 * ties;
  let teamPoints = winPoints + tiePoints;
  return teamPoints;
}
console.log(footballPoints(14, 8));
// Desafio 6
function highestCount() {
  // seu código aqui
}
// Desafio 7
function catAndMouse(mousePosition, catOnePosition, catTwoPosition) {
  let distanciaCat1 = Math.abs[catOnePosition - mousePosition];
  let distanciaCat2 = Math.abs[catTwoPosition - mousePosition];
  if (distanciaCat1 > distanciaCat2) {
    return 'cat2';
  } if (distanciaCat2 > distanciaCat1) {
    return 'cat1';
  }
  return 'os gatos trombam e o rato foge';
}
console.log(catAndMouse(2, 4, 3));
// Desafio 8
function fizzBuzz(arr) {
  let array = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (arr[index] % 3 === 0 && arr[index] % 5 === 0) {
      array.push('fizzBuzz')
    } if (arr[index] % 5 === 0) {
      array.push('buzz');
    } if (arr[index] % 3 === 0) {
      array.push('fizz');
    } 
      array.push('bug!')
    }
    return array;
}
let lista = [9, 25];
console.log(fizzBuzz(lista));
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
