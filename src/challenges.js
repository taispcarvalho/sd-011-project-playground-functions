// Desafio 1
function compareTrue(b1, b2) {
  return b1 && b2
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2
}

// Desafio 3
function splitSentence(str) {
  return str.split(' ')
}

// Desafio 4
function concatName(arr) {
  return arr.join(', ')
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties
}

// Desafio 6
function highestCount(arr) {
  let highest = 0
  let count = 0

  for (num of arr) {
    if (num > highest) {
      highest = num
    }
  }

  for (num of arr) {
    if (num === highest) {
      count += 1
    }
  }

  return count
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1m = cat1 - mouse
  let cat2m = cat2 - mouse

  if (cat1m > cat2m) {
    return 'cat1'
  }
  else if (cat1m < cat2m) {
    return 'cat2'
  }
  else {
    return 'os gatos trombam e o rato foge'
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
