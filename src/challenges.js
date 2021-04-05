// Desafio 1
function compareTrue(value1, value2) {
  return value1 && value2;
}
// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}
// Desafio 3
function splitSentence(myString) {
  myString = myString.split(' ');
  return myString;
}
// Desafio 4
function concatName(myArray) {
  let firstIten = myArray[0];
  let lastIten = myArray[myArray.length - 1];
  let newArray = `${lastIten}, ${firstIten}`;
  return newArray;
}
// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}
// Desafio 6
function highestCount(arrayNumbers) {
  let arrayAux = arrayNumbers.sort((a, b) => b - a);
  let count = 1;
  let highest = arrayAux[0];

  for (let index = 1; index < arrayAux.length; index += 1) {
    if (arrayAux[index] === highest) {
      count += 1;
    }
  }
  return count;
}
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distCat1 = Math.abs(cat1 - mouse);
  let distCat2 = Math.abs(cat2 - mouse);
  if (distCat1 === distCat2) {
    return 'os gatos trombam e o rato foge';
  }
  if (distCat1 > distCat2) {
    return 'cat2';
  }
  return 'cat1';
}
// Desafio 8
function aux(number) {
  if (number % 3 === 0 && number % 5 === 0) {
    return 'fizzBuzz';
  }
  if (number % 3 === 0) {
    return 'fizz';
  }
  if (number % 5 === 0) {
    return 'buzz';
  }
  return 'bug!';
}
function fizzBuzz(numberOfArray) {
  let arrayAux = [];
  for (let index of numberOfArray) {
    arrayAux.push(aux(index));
  }
  return arrayAux;
}
console.log(fizzBuzz([2, 15, 7, 9, 45]));
console.log(fizzBuzz([7, 9]));
console.log(fizzBuzz([9, 25]));
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
