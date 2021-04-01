// Desafio 1
function compareTrue(value1, value2) {
  return value1 && value2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Auxiliary function for Desafio 3
function readWordAt(sentence, position) {
  let index;
  let word = '';

  for (index = position; sentence[index] !== ' ' && index < sentence.length; index += 1) {
    word += sentence[index];
  }

  return { read: word, end: index - 1 };
}

// Auxiliary function for Desafio 3
function getToNextWord(sentence, endOfWord) {
  let index;

  if (endOfWord === sentence.length - 1) {
    return null;
  }
  for (index = endOfWord + 1; sentence[index] === ' '; index += 1) ;

  return index;
}

// Desafio 3
function splitSentence(sentence) {
  let beginningOfWord = 0;
  let endOfWord = 0;
  let word;
  let splittedSentence = [];

  while (endOfWord < sentence.length - 1) {
    word = readWordAt(sentence, beginningOfWord);
    splittedSentence.push(word.read);
    endOfWord = word.end;
    beginningOfWord = getToNextWord(sentence, endOfWord);
  }

  return splittedSentence;
}

// Desafio 4
function concatName(names) {
  return `${names[names.length - 1]}, ${names[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}

// Desafio 6
function highestCount(numbers) {
  let numberFrequencies = [];

  for (let number of numbers) {
    if (!numberFrequencies[number]) {
      numberFrequencies[number] = 1;
    } else {
      numberFrequencies[number] += 1;
    }
  }

  return numberFrequencies[numberFrequencies.length - 1];
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = cat1 - mouse;
  let distanceCat2 = cat2 - mouse;

  if (distanceCat1 < 0) {
    distanceCat1 *= -1;
  }

  if (distanceCat2 < 0) {
    distanceCat2 *= -1;
  }

  if (distanceCat1 < distanceCat2) {
    return 'cat1';
  } if (distanceCat2 < distanceCat1) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
// function fizzBuzz(numbers) {
//   let answer = [];

//   for (let index = 0; index < numbers.length; index += 1) {
//     if (numbers[index] % 3 === 0 && numbers[index] % 5 !== 0) {
//       answer.push('fizz');
//     } else if (numbers[index] % 3 !== 0 && numbers[index] % 5 === 0) {
//       answer.push('buzz');
//     } else if (numbers[index] % 3 === 0 && numbers[index] % 5 === 0) {
//       answer.push('fizzBuzz');
//     } else {
//       answer.push('bug!');
//     }
//   }

//   return answer;
// }

// Auxiliary function for Desafio 8
function isDivisible(dividend, divisor) {
  if (dividend % divisor === 0) {
    return true;
  }

  return false;
}

// Auxiliary function for Desafio 8
function numberToFizzBuzz(number) {
  if (isDivisible(number, 15)) {
    return 'fizzBuzz';
  }
  if (isDivisible(number, 5)) {
    return 'buzz';
  }
  if (isDivisible(number, 3)) {
    return 'fizz';
  }
  return 'bug!';
}

// Desafio 8
function fizzBuzz(numbers) {
  for (let number of numbers) {
    let index = numbers.indexOf(number);
    numbers[index] = numberToFizzBuzz(number);
  }

  return numbers;
}

// Auxiliary function for Desafio 9
function parseCharacter(character, dictionaryOption) {
  let dictionary;

  if (dictionaryOption === 0) {
    dictionary = { a: '1', e: '2', i: '3', o: '4', u: '5' };
  } else {
    dictionary = { 1: 'a', 2: 'e', 3: 'i', 4: 'o', 5: 'u' };
  }

  if (dictionary[character]) {
    return dictionary[character];
  }

  return character;
}

// Desafio 9
function encode(message) {
  let encodedMessage = '';

  for (let character of message) {
    encodedMessage += parseCharacter(character, 0);
  }

  return encodedMessage;
}

function decode(encodedMessage) {
  let message = '';

  for (let character of encodedMessage) {
    message += parseCharacter(character, 1);
  }

  return message;
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
