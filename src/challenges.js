// Desafio 1
function compareTrue(bool1, bool2) {
  return bool1 && bool2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * (height / 2));
}

// Desafio 3
function splitSentence(str) {
  return str.split(' ');
}

// Desafio 4
function concatName(array) {
  return (array.pop() + ', ' + array.shift());
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties * 1);
}

// Desafio 6
function highestCount(array) {
  let countNumber = 0;

  function findHighestNumber() {
  let highestNumber = array[0];
    for (let index in array) {
      if (array[index] > highestNumber) {
        highestNumber = array[index];
      }
    return highestNumber;
    }
  }

  function countingHighestNumber() {
    for (let index in array) {
      if (findHighestNumber() === array[index]) {
        countNumber += 1;
      } 
    }
    return countNumber;
  }
  
  return countingHighestNumber()
}

// Desafio 7
function catAndMouse(cat1, cat2) {
  if (cat1 === cat2) {
    return 'os gatos trombam e o rato foge';
  } else if (cat1 > cat2){
    return 'cat2';
  } else {
    return 'cat1';
  }
}


// Desafio 8
function fizzBuzz(array) {
  let newArray = []
  for (let index in array) {
    if (array[index] % 5 === 0 && array[index] % 3 === 0) {
      newArray.push('fizzBuzz')
    } else if (array[index] % 3 === 0) {
      newArray.push('fizz');
    } else if (array[index] % 5 === 0) {
      newArray.push('buzz');
    } else {
      newArray.push('bug!');
    }
  } 
  return newArray;
}

let myArray =  [7, 9]
console.log(fizzBuzz(myArray));

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
