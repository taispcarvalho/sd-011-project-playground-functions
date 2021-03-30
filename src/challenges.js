console.log (fizzBuzz([2, 15, 7, 9, 45]))
// Desafio 1
function compareTrue(parameter1, parameter2) {
  return (parameter1 && parameter2);
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}
// Desafio 3
function splitSentence(sentence) {
  let split = [];
  let index = 0;
  split[0] = '';
  for (let char of sentence) {
    if (char === ' ') {
      index += 1;
      split[index] = '';
    } else {
      split[index]+=char;
    }
  } 
  console.log (split);
  return split;
}

// Desafio 4
function concatName(nameArray) {
  return (nameArray[(nameArray.length - 1)]+ ', ' + nameArray[0]);
}

// Desafio 5
function footballPoints(wins, ties) {
  return ((wins * 3) + ties)
}

// Desafio 6
function highestCount(numbers) {
  let counter = 0;
  let highest;
  for (let currentNumber of numbers) {
    if ((currentNumber > highest) || (highest === undefined)){
      highest = currentNumber;
      counter = 1;
    } else if (currentNumber === highest) {
      counter += 1;
    }
  }
  console.log (counter);
  return (counter);
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    return ('cat1');
  } else if (Math.abs(cat2 - mouse) < Math.abs(cat1 - mouse)) {
    return ('cat2');
  }else {
    return ('os gatos trombam e o rato foge');
  }
}

// Desafio 8
function fizzBuzz(numbers) {
  let fizzBuzzArray = [];
  for (let index = 0; index < numbers.length; index +=1) {
    if ((Number.isInteger(numbers[index]/3)) && (Number.isInteger(numbers[index]/5))) {
      fizzBuzzArray[index] = 'fizzBuzz';
    } else if ((Number.isInteger(numbers[index]/3))) {
      fizzBuzzArray[index] = 'fizz';
    } else if (Number.isInteger(numbers[index]/5)) {
      fizzBuzzArray[index] = 'Buzz';
    } else {
      fizzBuzzArray[index] = 'bug!';
    }
  }
  return (fizzBuzzArray);
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
