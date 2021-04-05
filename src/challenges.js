// Desafio 1
function compareTrue(value1, value2) {
  return value1 && value2
}
console.log(compareTrue(false, true));
console.log(compareTrue(true, false));
console.log(compareTrue(false, false));
console.log(compareTrue(true, true));

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}
console.log(calcArea(10, 50));
console.log(calcArea(5, 2));
console.log(calcArea(51, 1));

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}
console.log(splitSentence('go Trybe'));
console.log(splitSentence('vamo que vamo'));
console.log(splitSentence('foguete'));

// Desafio 4
function concatName(nameString) {
  let firstName = nameString[0];
  let lastName = nameString[nameString.length - 1];
  let concatString = `${lastName}, ${firstName}`;

  return concatString;
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));
console.log(concatName(['foguete', 'não', 'tem', 'ré']));
console.log(concatName(['captain', 'my', 'captain']));

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}
console.log(footballPoints(14, 8));
console.log(footballPoints(1, 2));
console.log(footballPoints(0, 0));

// Desafio 6
function highestCount(listNumbers) {
  let highestNumber = listNumbers[0];
  
  for (let index = 0; index < listNumbers.lenght; index += 1) {
    if (listNumbers[index] > highestNumber) {
      highestNumber = listNumbers[index];
    }
  }

  let appearNumber = 0;
  for (let index = 0; index < listNumbers.lenght; index += 1) {
    if (listNumbers[index] === highestNumber) {
      appearNumber = appearNumber + 1;
    }
  }
  return appearNumber;
}

console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));
console.log(highestCount([0, 4, 4, 4, 9, 2, 1]));
console.log(highestCount([0, 0, 0]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let positionCat1 = Math.abs(cat1 - mouse);
  let positionCat2 = Math.abs(cat2 - mouse);

  if (positionCat1 === positionCat2) {
    return 'Os gatos trombam e o rato foge'
  }
  
  if (positionCat1 > positionCat2) {
    return 'Cat2';
  }

  return 'Cat1'
}
console.log(catAndMouse(0, 3, 2));
console.log(catAndMouse(0, 6, 12));
console.log(catAndMouse(0, 6, -6));

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
