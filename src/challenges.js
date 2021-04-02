// Desafio 1
function compareTrue(param1, param2) {
  return param1 && param2;
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
  return `${array[array.length - 1]}, ${array[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return 3 * wins + ties;
}

// Desafio 6
function highestCount(array) {
  let highNumber = Math.max.apply(null, array);
  let repeatedTimes = 0;

  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === highNumber) {
      repeatedTimes += 1;
    }
  }
  return repeatedTimes;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1Distance = Math.abs(mouse - cat1);
  let cat2Distance = Math.abs(mouse - cat2);

  if (cat1Distance < cat2Distance) {
    return 'cat1';
  } else if (cat2Distance < cat1Distance) {
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge';
  }
  return catAndMouse;
}

console.log(catAndMouse(1, 4, 3));

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
