// Primeiro Commit
// Desafio 1
function compareTrue(bool1, bool2) {
  // seu código aqui
  return bool1 && bool2;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string1) {
  // seu código aqui
  return string1.split(' ');
}

// Desafio 4
function concatName(stringArray1) {
  // seu código aqui
  return `${stringArray1[stringArray1.length - 1]}, ${stringArray1[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let points = 0;
  for (let i = 0; i < wins; i += 1) {
    points += 3;
  }
  for (let i = 0; i < ties; i += 1) {
    points += 1;
  }
  return points;
}

// Desafio 6
function highestCount(numString1) {
  // seu código aqui
  let highestNumber = Math.max(...numString1);
  let highestTimes = 0;
  for (let i = 0; i < numString1.length; i += 1) {
    if (numString1[i] === highestNumber) {
      highestTimes += 1;
    }
  }
  return highestTimes;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let distance1 = Math.abs(mouse - cat1);
  let distance2 = Math.abs(mouse - cat2);
  if (distance1 < distance2) {
    return 'cat1';
  }
  if (distance1 > distance2) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
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
