// Desafio 1
function compareTrue(val1, val2) {
  return val1 && val2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(str) {
  return str.split(' ');
}

// Desafio 4
function concatName(arr) {
  let res = [];
  res.push(arr[arr.length - 1]);
  res.push(arr[0]);
  return res.join(', ');
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}

// Desafio 6
function highestNumber(arr) {
  let max = arr[0];
  for (let i in arr) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  return max;
}

function highestCount(arr) {
  let count = 0;
  for (let i in arr) {
    if (highestNumber(arr) === arr[i]) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (cat1 + mouse < cat2 + mouse) {
    return cat1;
  }
  if (cat2 + mouse < cat1 + mouse) {
    return cat2;
  }
  if (cat1 + mouse === cat2 + mouse) {
    return 'os gatos trombam e o rato foge';
  }
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
