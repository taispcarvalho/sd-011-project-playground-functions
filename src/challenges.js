// Desafio 1
function compareTrue(older18, hasLicense) {
  return older18 && hasLicense;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(sentence) {
  let arraySentence = sentence.split(' ');
  return arraySentence;
}

// Desafio 4
function concatName(arrayName) {
  let concatenedName = `${arrayName[arrayName.length - 1]}, ${arrayName[0]}`;
  return concatenedName;
}

// Desafio 5
function footballPoints(wins, ties) {
  let totalPoints = (wins * 3) + (ties * 1);
  return totalPoints;
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
  let answer = '';
  let distance1 = Math.abs(cat1 - mouse);
  let distance2 = Math.abs(cat2 - mouse);

  if (distance1 < distance2) {
    answer = 'cat1';
  } else if (distance1 > distance2) {
    answer = 'cat2';
  } else {
    answer = 'os gatos trombam e o rato foge';
  }
  return answer;
}

// Desafio 8
function fizzbuzzDivision(numberX) {
  let divisors = [15, 5, 3, 1];
  let fizzbuzz = ['fizzBuzz', 'buzz', 'fizz', 'bug!'];
  
  for (let index = 0; index < divisors.length; index += 1) {
    if (numberX % divisors[index] === 0) {
      return fizzbuzz[index];
    }
  }
}

function fizzBuzz(arrayFizzBuzzNumbers) {
  let arrayFizzBuzz = [];

  for (let number of arrayFizzBuzzNumbers) {
    arrayFizzBuzz.push(fizzbuzzDivision(number));
  }

  return arrayFizzBuzz;
}

// Desafio 9
function translator(character, dictionary) {
  for (let key of Object.keys(dictionary)) {
    if (character === key) {
      return dictionary[key];
    } 
  }
  return character;
}

function encode(sentence) {
  let objectVowels = { a: '1', e: '2', i: '3', o: '4', u: '5' };
  let encodedSentence = '';

  for (let index = 0; index < sentence.length; index += 1) {
    encodedSentence += translator(sentence[index], objectVowels);
  }
  return encodedSentence;
}

console.log(encode('hi there!'));
console.log(decode('h111555 a31'))

function decode(sentence) {
  let objectNumbers = { 1: 'a', 2: 'e', 3: 'i', 4: 'o', 5: 'u' };
  let decodedSentence = '';

  for (let index = 0; index < sentence.length; index += 1) {
    decodedSentence += translator(sentence[index], objectNumbers);
  }
  return decodedSentence;
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
