// Desafio 1
function compareTrue(older18, hasLicense) {
  return older18 && hasLicense;
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(sentence) {
  return sentence.split(' ');
}

// Desafio 4
function concatName(arrayName) {
  return (arrayName[arrayName.length - 1] + ', ' + arrayName[0]);
}

// Desafio 5
function footballPoints(wins, ties) {
  return ((wins * 3) + (ties * 1));
}

// Desafio 6
function calculateHighestNumber(arrayNumbers) {
  let highestNumber = arrayNumbers[0];

  for (let number of arrayNumbers) {
    if (number > highestNumber) {
      highestNumber = number;
    }
  }

  return highestNumber;
}

function mostRepeatedNumber(arrayNumbers, numberX) {
  let amountNumberX = 0;

  for (let number of arrayNumbers) {
    if (numberX === number) {
      amountNumberX += 1;
    }
  }

  return amountNumberX;
}

function highestCount(arrayNumbers) {
  let numberX = calculateHighestNumber(arrayNumbers);
  let amountHighestNumber = mostRepeatedNumber(arrayNumbers, numberX);

  return amountHighestNumber;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    return ('cat1');
  } else if (Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse)) {
    return ('cat2');
  } else {
    return ('os gatos trombam e o rato foge');
  }
}

// Desafio 8
function fizzBuzz(arrayFizzBuzzNumbers) {
  let arrayFizzBuzz = [];


  for (let number of arrayFizzBuzzNumbers) {
    let isDivisibleBy3 = number % 3 === 0
    let isDivisibleBy5 = number % 5 === 0

    if (isDivisibleBy3) {
      if (isDivisibleBy5) {
        arrayFizzBuzz.push('fizzBuzz');
      } else {
        arrayFizzBuzz.push('fizz');
      }
    } else if (isDivisibleBy5) {
      arrayFizzBuzz.push('buzz');
    } else {
      arrayFizzBuzz.push('bug!');
    }
  }

  return arrayFizzBuzz;
}

// Desafio 9
function encode(sentence) {
  let encodedSentence = ''

  for (let index = 0; index < sentence.length; index += 1) {
    if (sentence[index] === 'a') {
      encodedSentence += '1';
    } else if (sentence[index] === 'e') {
      encodedSentence += '2';
    } else if (sentence[index] === 'i') {
      encodedSentence += '3';
    } else if (sentence[index] === 'o') {
      encodedSentence += '4';
    } else if (sentence[index] === 'u') {
      encodedSentence += '5';
    } else {
      encodedSentence += sentence[index];
    }
  }
  return encodedSentence
}

function decode(sentence) {
  let decodedSentence = ''

  for (let index = 0; index < sentence.length; index += 1) {
    if (sentence[index] === '1') {
      decodedSentence += 'a';
    } else if (sentence[index] === '2') {
      decodedSentence += 'e';
    } else if (sentence[index] === '3') {
      decodedSentence += 'i';
    } else if (sentence[index] === '4') {
      decodedSentence += 'o';
    } else if (sentence[index] === '5') {
      decodedSentence += 'u';
    } else {
      decodedSentence += sentence[index];
    }
  }

  return decodedSentence
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
