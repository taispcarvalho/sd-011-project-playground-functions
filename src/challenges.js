// Desafio 1
function compareTrue(a, b) {
  return a && b;
}
console.log(compareTrue(true, true));
// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}
console.log(calcArea(51, 1));
// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}
console.log(splitSentence('go Trybe'));

// Desafio 4
function concatName(array) {
  return (`${array[array.length - 1]}, ${array[0]}`);
}
console.log(concatName(['foguete', 'não', 'tem', 'ré']));

// Desafio 5
function footballPoints(wins, ties) {
  return ((wins * 3) + ties);
}
console.log(footballPoints(0, 0));

// Desafio 6
function highestCount(array) {
  let counter = 0;
  let highestNumber = Math.max.apply(null, array);
  for (let index = 0; index < array.length; index += 1) {
    if (highestNumber === array[index]) {
      counter += 1;
    }
  }
  return counter;
}
console.log(highestCount([0, 4, 4, 4, 9, 2, 1]));
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    return ('cat1');
  }
  if (Math.abs(cat2 - mouse) < Math.abs(cat1 - mouse)) {
    return ('cat2');
  }
  return ('os gatos trombam e o rato foge');
}
console.log(catAndMouse(1, 0, 2));
// Desafio 8
function fizzBuzz(array) {
  let newArray = [];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] % 3 === 0  && array[index] % 5 === 0) {
      newArray.push('fizzBuzz');
    }
    else if (array[index] % 3 === 0) {
      newArray.push('fizz');
    }
    else if (array[index] % 5 === 0) {
      newArray.push('buzz')
    }
    else {
      newArray.push('bug!');
    }
 }
 return newArray;
}

console.log(fizzBuzz([2, 15, 7, 9, 45]));

// Desafio 9
function encode(string) {
  let string2 = string.split('');
  for (let index = 0; index < string2.length; index += 1) {
    if (string2[index] === 'a') {
      string2[index] = '1';
    }
    else if (string2[index] === 'e') {
      string2[index] = '2';
    }
    else if (string2[index] === 'i') {
      string2[index] = '3';
    }
    else if (string2[index] === 'o') {
      string2[index] = '4';
    }
    else if (string2[index] === 'u') {
      string2[index] = '5';
    }
}
return string2.join('');
}
console.log(encode('hi there!'));

function decode(string) {
  let string2 = string.split('');
  for (let index = 0; index < string2.length; index += 1) {
    if (string2[index] === '1') {
      string2[index] = 'a';
    }
    else if (string2[index] === '2') {
      string2[index] = 'e';
    }
    else if (string2[index] === '3') {
      string2[index] = 'i';
    }
    else if (string2[index] === '4') {
      string2[index] = 'o';
    }
    else if (string2[index] === '5') {
      string2[index] = 'u';
    }
}
  return string2.join('');
}
console.log(decode('h3 th2r2!'));

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
