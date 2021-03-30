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
/* Souce: https://www.youtube.com/watch?v=jxWxJ4JbzPI */
function catAndMouse(mouse, cat1, cat2) {
  let distCat1FromM = Math.abs(mouse - cat1);
  let distCat2FromM = Math.abs(mouse - cat2);
  if (distCat1FromM < distCat2FromM) return 'cat1';
  if (distCat1FromM > distCat2FromM) return 'cat2';
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] % 15 === 0) {
      res.push('fizzBuzz');
    } else if (arr[i] % 3 === 0) {
      res.push('fizz');
    } else if (arr[i] % 5 === 0) {
      res.push('buzz');
    } else {
      res.push('bug!');
    }
  }
  return res;
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
