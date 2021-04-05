// Desafio 1
function compareTrue(value1, value2) {
  return value1 && value2;
}

console.log(compareTrue(true, false));
console.log(compareTrue(false, true));
console.log(compareTrue(true, true));
console.log(compareTrue(false, false));

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

console.log(calcArea(10, 50));
console.log(calcArea(5, 2));
console.log(calcArea(51, 1));

// Desafio 3
function splitSentence(sentence) {
  let words = [];
  let cutSpace = '';

  for (let index = 0; index < sentence.length; index += 1) {
    if (sentence[index] === ' ') {
      words.push(cutSpace);
      cutSpace = '';
    } else if (index === sentence.length - 1) {
      cutSpace += sentence[index];
      words.push(cutSpace);
    } else {
      cutSpace += sentence[index];
    }
  }
  return words;
}
console.log(splitSentence('Go Trybe'));
console.log(splitSentence('Vamo que vamo'));
console.log(splitSentence('foquete'));

// Desafio 4
function concatName(names) {
  let firstName = names[0];
  let lastName = names[names.length - 1];

  let reverseName = `${lastName}, ${firstName}`;
  return reverseName;
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));
console.log(concatName(['foguete', 'não', 'tem', 'ré']));
console.log(concatName(['captain', 'my', 'captain']));

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}
console.log(footballPoints(14, 8));
console.log(footballPoints(1, 2));
console.log(footballPoints(0, 0));

// Desafio 6
function biggestNumber(numbers) {
  let biggest = 0;
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > biggest) {
      biggest = numbers[index];
    }
  }
  return biggest;
}
function highestCount(numbers) {
  let counter = 0;
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] === biggestNumber(numbers)) {
      counter += 1;
    }
  }
  return counter;
}
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));
console.log(highestCount([0, 4, 4, 4, 9, 2, 1]));
console.log(highestCount([0, 0, 0]));
// Desafio 7
/** function catAndMouse(mouse, cat1, cat2) {
  mouse;
  if (cat1 === cat2) {
    return 'The cats bump and the mouse scape';
  }
  else if (cat1 > cat2) {
    return 'cat2';
  }
  else {
    return 'cat1';
  }
} */

function catAndMouse(mouse, cat1, cat2) {
  let cat1Unity = Math.abs(cat1 - mouse);
  let cat2Unity = Math.abs(cat2 - mouse);

  if (cat1Unity === cat2Unity) {
    return 'os gatos trombam e o rato foge';
  }

  if (cat1Unity > cat2Unity) {
    return 'cat2';
  }

  return 'cat1';
}
console.log(catAndMouse(0, 3, 2));
console.log(catAndMouse(0, 6, 12));
console.log(catAndMouse(0, 2, 2));
console.log(catAndMouse(1, 0, 2));

// Desafio 8
function saveFizzBuzz(numbers) {
  if (numbers % 3 === 0 && numbers % 5 === 0) {
    return 'fizzBuzz';
  }

  if (numbers % 3 === 0) {
    return 'fizz';
  }

  if (numbers % 5 === 0) {
    return 'buzz';
  }

  return 'bug!';
}

function fizzBuzz(saveNumbers) {
  let arrayFizzBuzz = [];

  for (let index of saveNumbers) {
    arrayFizzBuzz.push(saveFizzBuzz(index));
  }
  return arrayFizzBuzz;
}
console.log(fizzBuzz([2, 15, 7, 9, 45]));
console.log(fizzBuzz([7, 9]));
console.log(fizzBuzz([9, 25]));

// Desafio 9
function encode(message) {
  let characters = {
    a: '1',
    e: '2',
    i: '3',
    o: '4',
    u: '5',
  };
  message = message.replace(/[aeiou]/gi, (index) => characters[index]);
  return message;
}

function decode(message) {
  let characters = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  message = message.replace(/[12345]/gi, (index) => characters[index]);
  return message;
}
console.log(encode('Hi, there!'));
console.log(encode('Rogerio Martins!'));

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
