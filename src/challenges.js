// Desafio 1
function compareTrue(bool1, bool2) {
  return bool1 && bool2;
}

// Desafio 2
function calcArea(base, height) {
  return base * (height / 2);
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
  return (wins * 3) + ties;
}

function getHighest(array) {
  let max = array[0];
  for (let index in array) {
    if (array[index] > max) {
      max = array[index];
    }
  }
  return max;
}

function countApearences(num, array) {
  let counter = 0;
  for (let index in array) {
    if (num === array[index]) {
      counter += 1;
    }
  }
  return counter;
}

// Desafio 6
function highestCount(array) {
  let max = getHighest(array);
  let repeated = countApearences(max, array);
  return repeated;
}

function calcDist(mouse, cat) {
  let dist = Math.abs(mouse - cat);
  return dist;
}
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let dist1 = calcDist(mouse, cat1);
  let dist2 = calcDist(mouse, cat2);
  if (dist1 < dist2) {
    return 'cat1';
  }
  if (dist2 < dist1) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}
function checkDividers35(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    return 'fizzBuzz';
  }
  if (num % 3 === 0) {
    return 'fizz';
  }
  if (num % 5 === 0) {
    return 'buzz';
  }
  return 'bug!';
}

// Desafio 8
function fizzBuzz(array) {
  let anwser;
  for (let index = 0; index < array.length; index += 1) {
    anwser.push(checkDividers35(array[index]));
  }
  return anwser;
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
