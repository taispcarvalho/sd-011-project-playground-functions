// Desafio 1
function compareTrue(value1, value2) {
  return (value1 && value2);
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(sentece) {
  return sentece.split(' ');
}

// Desafio 4
function concatName(arrayNames) {
  return arrayNames[arrayNames.length - 1].concat(`, ${arrayNames[0]}`);
}

// Desafio 5
function footballPoints(wins, ties) {
  return ((wins * 3) + ties);
}

// Desafio 6
function highestCount(arrayNumbers) {
  let higherNumber = arrayNumbers[0];
  let repeater = 0;

  for (let index = 0; index < arrayNumbers.length; index += 1) {
    if (arrayNumbers[index] > higherNumber) {
      higherNumber = arrayNumbers[index];
    }
  }

  for (let index = 0; index < arrayNumbers.length; index += 1) {
    if (arrayNumbers[index] === higherNumber) {
      repeater += 1;
    }
  }
  return repeater;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat2pos = mouse - cat1;
  let cat1pos = mouse - cat2;

  if ((cat2pos < cat1pos) * -1) {
    return 'cat2';
  } 
  
  else if ((cat1pos < cat2pos) * -1) {
    return 'cat1';
  } 
  
  else if (cat1pos === cat2pos) {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz() {
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
