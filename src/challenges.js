// Desafio 1
function compareTrue(valorOne, ValorTwo) {
  return valorOne && ValorTwo;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(SeparateWords) {
  return (SeparateWords.split(' '));
}

// Desafio 4
function concatName(myArray) {
  let formatName = myArray[myArray.length - 1] + ', ' + myArray[0];
  return formatName;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = wins * 3 + ties * 1;
  return points;
}

// Desafio 6
function highestCount(listOfNumbers) {
  let count = 0;
  let highestNumber = listOfNumbers[0];
  for (let index = 1; index < listOfNumbers.length; index += 1) {
    if (listOfNumbers[index] > highestNumber) {
      highestNumber = listOfNumbers[index];
    }
  }
  for (let index = 0; index < listOfNumbers.length; index += 1) {
    if (listOfNumbers[index] === highestNumber) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (cat1 < mouse) {
    cat1 = mouse - cat1;
  }
  if (cat2 < mouse) {
    cat1 = mouse - cat2;
  }
  if (cat1 > mouse) {
    cat1 = cat1 - mouse;
  }
  if (cat2 > mouse) {
    cat2 = cat2 - mouse;
    }
  if (cat1 < cat2) {
    console.log('cat1');
  } 
  else if (cat2 < cat1) {
    console.log('cat2');
  }else {
  console.log('os gatos trombam e o rato foge');
  }
  return;
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
