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
  // let arrayString = [];
  // for (let number of array) {
  //   if (number % 3 === 0 && number % 5 === 0) {
  //     arrayString.push('fizzBuzz');
  //   } else if (number % 3 === 0) {
  //     arrayString.push('fizz');
  //   } else if (number % 5 === 0) {
  //     arrayString.push('buzz');
  //   } else arrayString.push('bug!');
  // }
  // return arrayString;

  // Consultei o repositório da Ana Clara Kyotoku e me baseei em seu código para encontrar uma solução que considero mais simples para este desafio.
// Link: https://github.com/tryber/sd-011-project-playground-functions/blob/anaclarabck-project-playground-functions/src/challenges.js
  function translation(number) {
    let divisors = [15, 3, 5];
    let words = ['fizzBuzz', 'fizz', 'buzz'];
    for (let index = 0; index < divisors.length; index += 1) {
      if (number % divisors[index] === 0) {
        return words[index];
      } return 'bug!'
    }
  }
  let newArray = [];
  for (let number of array) {
    newArray.push(translation(number));
  } return newArray;
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
