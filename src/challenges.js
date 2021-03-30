// Desafio 1
function compareTrue(value1, value2) {
  return value1 && value2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(array) {
  return array.split(' ');
}

// Desafio 4
function concatName(array) {
  return array[array.length - 1] + ', ' + array[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  return 3 * wins + ties;
}

// Desafio 6
function highestCount(array) {
  let highest = array[0];
  let count = 0;

  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > highest) {
      highest = array[index];
    }
  }

  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === highest) {
      count += 1;
    }
  }

  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse)) return 'cat2';
  else if (Math.abs(cat2 - mouse) > Math.abs(cat1 - mouse)) return 'cat1';
  else return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(array) {
  let div3 = false, div5 = false;
  for (let index = 0; index < array.length; index += 1){
    if (array[index] % 3 === 0) div3 = true;
    if (array[index] % 5 === 0) div5 = true;
    if (div3 && div5) array[index] = 'fizzBuzz';
    else if (div3) array[index] = 'fizz';
    else if (div5) array[index] = 'buzz';
    else array[index] = 'bug!';
    div3 = false;
    div5 = false;
  }
  return array;
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
