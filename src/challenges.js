// Desafio 1
function compareTrue(a, b) {
  let value1 = a;
  let value2 = b;
  return a && b;
}

// Desafio 2
function calcArea(a, b) {
  let base = a;
  let heigth = b;
  return a * b / 2;
}

// Desafio 3
function splitSentence(sentence) {
  return sentence.split(" ");
}

// Desafio 4
function concatName(strings) {
  let firstString = strings[0];
  let lastString = strings[strings.length - 1];
  return lastString + ', ' + firstString;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = wins * 3 + ties;
  return pontos;
}

// Desafio 6
function highestCount(numeros) {
  let highestNumber = 0;
  for (let index of numeros) {
    if (index > highestNumber) {
      highestNumber = index;
    }  
  }
let counter = 0;
for (let index2 in numeros) {
  if (numeros[index2] === highestNumber) {
    counter += 1;
    }
  }
  return counter;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = Math.abs(cat1 - mouse);
  let distanceCat2 = Math.abs(cat2 - mouse);
  if (distanceCat1 === distanceCat2) {
    return "os gatos trombam e o rato foge";
  } else if (distanceCat1 > distanceCat2) {
    return 'cat2';
  }
  return 'cat1'; 
}

// Desafio 8
function fizzBuzz(array) {
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] % 3 == 0 && array [i] % 5 == 0){
      return "fizzBuzz";
    } else if (array[i] % 3 == 0) {
      return "fizz";
    } else if (array [i] % 5 == 0) {
      return "Buzz";
    } else {
      return "bug!"
    }
  }
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
