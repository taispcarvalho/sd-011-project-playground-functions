// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
  return true;
} else {
  return false;
} } ;

// Desafio 2
function calcArea(base, height) {
 return (base * height) / 2;
};

// Desafio 3 // referência: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split
function splitSentence(string) {
  return string.split(' ');
};

// Desafio 4
function concatName(strings) {
  let firstString = strings[0];
  let laststring = strings[strings.length -1];
  return laststring + ', ' + firstString;
};

// Desafio 5
function footballPoints(wins, ties) {
  let resultWins = wins * 3;
  return resultWins + ties;
};

// Desafio 6
function findMaxNumber (numbers) { 
  let maxNumber = numbers[0];
  for (let index = 0 ; index < numbers.length; index += 1) { 
  if (numbers[index] > maxNumber) {
    maxNumber = numbers[index];
  }
}
  return maxNumber;
} 
function highestCount(numbers) {
  let numbersOfNumbers = 0;
  for(let index = 0; index < numbers.length; index += 1) {
  if (findMaxNumber(numbers) === numbers[index]) {
    numbersOfNumbers += 1;
  }
} 
return numbersOfNumbers;
}

// Desafio 7 
function catAndMouse(mouse, cat1, cat2) {

  let distanceCat1 = cat1 - mouse;
  let distanceCat2 = cat2 - mouse;

  if (Math.abs(distanceCat1) > Math.abs(distanceCat2)) {
    return 'cat2';
  } else if (Math.abs(distanceCat1) < Math.abs(distanceCat2)) {
    return 'cat1';
  } else { 
    return 'os gatos trombam e o rato foge';
  } 
}; 

// Desafio 8
function fizzBuzz(numbers) {

  let encodesNumbers = [];
  
  for (let index = 0; index < numbers.length; index += 1) {
    if(numbers[index] % 3 === 0 && numbers[index] % 5 === 0) {
      encodesNumbers.push('fizzBuzz');
    } else if (numbers[index] % 5 === 0) {
      encodesNumbers.push('buzz');
    } else if (numbers[index] % 3 === 0) {
      encodesNumbers.push('fizz')
    } else {
      encodesNumbers.push('bug!');
    }
  }
  return encodesNumbers
};

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
