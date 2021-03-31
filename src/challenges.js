// Desafio 1
function compareTrue(value1, value2) {
  return value1 && value2;
  // seu código aqui
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
  // seu código aqui
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
  // seu código aqui
}

// Desafio 4
function concatName(array) {
  return `${array[array.length - 1]}, ${array[0]}`;
  // seu código aqui
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
  // seu código aqui
}

// Desafio 6
function highestCount(number) {
  let maxNumber = Math.max.apply(null, number);
  let repeatNumber = 0;
  for (let index = 0; index < number.length; index += 1) {
    if (number[index] === maxNumber) {
      repeatNumber += 1;
    }
  }
  return repeatNumber;
  // seu código aqui
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distance1 = Math.abs(mouse - cat1);
  let distance2 = Math.abs(mouse - cat2);

  if (distance1 < distance2) {
    return ('cat1');
  }
  if (distance1 > distance2) {
    return ('cat2');
  }
    return ('os gatos trombam e o rato foge');
  // seu código aqui
}
console.log(catAndMouse(12, 3, 2));
// Desafio 8
function fizzBuzz(array) {
  let number = [];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      number.push('fizzBuzz');
    } else if (array[index] % 3 === 0) {
      number.pus('fizz');
    } else if (array[index] % 5 === 0 ){
      number.push('buzz');
    } 
    else if (array[index] % 3 !== 0 && array[index] % 5 !== 0) {
      number.push ('bug!');
    }
  }
  return number;
  // seu código aqui
}
console.log(fizzBuzz([2, 15, 7, 9, 45]))
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
