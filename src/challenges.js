// Desafio 1
function compareTrue(value1, value2) {
  return value1 && value2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  let splittedArray = string.split(' ');
  return splittedArray;
}

// Desafio 4
function concatName(array) {
  let reversedArray = array.reverse();
  let newArray = [];
  newArray.push(reversedArray[0], reversedArray[reversedArray.length - 1]);
  let lastArray = newArray.join(', ');
  return lastArray;
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties * 1;
}

// Desafio 6
function highestCount(array) {
  let highestNumber = 0;
  let counter = 0;
  for (let index of array) {
    if (index > highestNumber) {
      highestNumber = index;
      counter = 1;
    } else if (index === highestNumber) {
      counter += 1;
    }
  }
  return counter;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = Math.abs(mouse - cat1);
  let distanceCat2 = Math.abs(mouse - cat2);
  if (distanceCat1 < distanceCat2) {
    return 'cat1';
  } if (distanceCat1 > distanceCat2) {
    return 'cat2';
  } return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(array) {
  function numberToWord(number) {
    if (number % 3 === 0 && number % 5 === 0) {
      return 'fizzBuzz';
    } if (number % 3 === 0) {
      return 'fizz';
    } if (number % 5 === 0) {
      return 'buzz';
    } else {
      return 'bug!';
    }
  }
  let translation = [];
  for (let number of array) {
      translation.push(numberToWord(number));
  } return translation;
}
console.log(fizzBuzz([2, 15, 7, 9, 45]));

// Desafio 9
function encode(string) {
  let split = string.split('');
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let encoded = [];
  for (let character of split) {
    if (vowels.indexOf(character) >= 0) {
      encoded.push(vowels.indexOf(character) + 1);
    } else encoded.push(character);
  } return encoded.join('');
}
function decode(encoded) {
  let split = encoded.split('');
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let numbers = ['1', '2', '3', '4', '5'];
  let decoded = [];
  for (let character of split) {
    if (numbers.indexOf(character) >= 0) {
      decoded.push(vowels[numbers.indexOf(character)]);
    } else decoded.push(character);
  } return decoded.join('');
}
console.log(decode(encode('hi, there!')));

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
