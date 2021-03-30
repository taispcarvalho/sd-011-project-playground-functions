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

  return highest;
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
    if (number % 3 === 0 && number % 5 !== 0) {
      arrayFizzBuzz.push('fizz');
    } else if (number % 3 !== 0 && number % 5 === 0) {
      arrayFizzBuzz.push('buzz');
    } else if (number % 3 === 0 && number % 5 === 0) {
      arrayFizzBuzz.push('fizzBuzz');
    } else {
      arrayFizzBuzz.push('bug!');
    }
  }
  return arrayFizzBuzz;
}

// Desafio 9
function turnVowelIntoNumbers (sentence, vowel, numberY){
  if (vowel === 'a'){
    vowel = numberY;
  }
}
function encode(sentence) {
  let encodedSentence = sentence.replace('a', '1').replace('e', '2').replace('i', '3').replace('o', '4').replace('u', '5')

  return encodedSentence
}

console.log(encode("hi there!"));

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
