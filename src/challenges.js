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
function splitSentence(string) {
  return string.split(' ');
  // seu código aqui
}

// Desafio 4

function concatName(array) {
  return `${array[array.length - 1]}, ${array[0]}`;
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
}


// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distance1 = mouse - cat1;
  let distance2 = mouse - cat2;
  let catMouse;

  if (distance1 > distance2) {
    catMouse.push('cat1');
  } else if (distance1 < distance2) {
    catMouse.push('cat2');
  } else if (distance1 === distance2) {
    catMouse.push('Os gatos trambaram e o rato foge');
  }

  

  console.log(catMouse);

  return catMouse;
  // seu código aqui
}
console.log(catAndMouse(12, 2, 3));
// Desafio 8
function fizzBuzz(array) {
  let number = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      number.push('fizzBuzz');
    } else if (array[index] % 3 === 0) {
      number.push('fizz');
    } else if (array[index] % 5 === 0) {
      number.push('buzz');
    } else if (array[index] % 3 !== 0 && array[index] % 5 !== 0){
<<<<<<< HEAD
      number.push('bug!');
=======
      number.push('bug!')
>>>>>>> 7ed11bfa41237af6e11d8321f198bbe842d350d9
    }
  }
  return number;
  // seu código aqui
}

<<<<<<< HEAD

=======
console.log(fizzBuzz([2, 15, 7, 9, 45]));
>>>>>>> 7ed11bfa41237af6e11d8321f198bbe842d350d9

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
