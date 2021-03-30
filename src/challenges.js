// Desafio 1
function compareTrue(bool1, bool2) {
  if (bool1 === true && bool2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  if (base > 0 && height > 0) {
    return (base * height) / 2;
  }
  return 'erro';
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(string) {
  let results = [string[string.length - 1], string[0]];
  return results.join(', ');
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontuacaoWins = 0;
  let pontuacaoTies = 0;
  pontuacaoWins = wins * 3;
  pontuacaoTies = ties * 1;
  return pontuacaoWins + pontuacaoTies;
}

// Desafio 6 - voltar para refatorar
function highestNumber(array) {
  let max = 0;
  for (let i in array) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
}

function highestCount(array) {
  let max = highestNumber(array);
  let repeatCount = 0;
  for (let i in array) {
    if (array[i] === max) {
      repeatCount += 1;
    }
  }
  return repeatCount;
}

// Desafio 7
function catCheckDistance(mouse, cat1, cat2) {
  let catDistance1 = 0;
  let catDistance2 = 0;

  if (mouse > cat1) {
    catDistance1 = mouse - cat1;
  } else {
    catDistance1 = cat1 - mouse;
  }
  if (mouse > cat2) {
    catDistance2 = mouse - cat2;
  } else {
    catDistance2 = cat2 - mouse;
  }
  return [catDistance1, catDistance2];
}

function catAndMouse(mouse, cat1, cat2) {
  let catDistance1 = catCheckDistance(mouse, cat1, cat2)[0];
  let catDistance2 = catCheckDistance(mouse, cat1, cat2)[1];
  if (catDistance1 > catDistance2) {
    return 'cat1';
  } if (catDistance1 === catDistance2) {
    return 'os gatos trombam e o rato foge';
  }
  return 'cat2';
}

console.log(catAndMouse(1, 0, 2));

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
