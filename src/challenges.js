// Desafio 1
function compareTrue(param1, param2) {
  return param1 && param2;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(sentence) {
  let sentencesArray = sentence.split(' ');
  return sentencesArray;
}

// Desafio 4
function concatName(nameArray) {
  let firstName = nameArray[0];
  let lastNameArrayPosition = nameArray.length - 1;
  let lastName = nameArray[lastNameArrayPosition];

  return `${lastName}, ${firstName}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = wins * 3 + ties;
  return points;
}

// Desafio 6
function highestCount(numberArray) {
  let accumulator = 0;
  let counter = 0;

  for (let i = 0; i < numberArray.length; i += 1) {
    let currentValue = numberArray[i];

    if (accumulator < currentValue) {
      accumulator = currentValue;
      counter = 1;
    } else if (accumulator === currentValue) {
      counter += 1;
    }
  }

  return counter;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceFromCat1 = Math.abs(mouse - cat1);
  let distanceFromCat2 = Math.abs(mouse - cat2);

  if (distanceFromCat1 < distanceFromCat2) {
    return 'cat1';
  }
  if (distanceFromCat1 > distanceFromCat2) {
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
