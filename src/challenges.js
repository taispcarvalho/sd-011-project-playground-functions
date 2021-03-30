// Desafio 1
function compareTrue(bool1, bool2) {
  return bool1 && bool2;
}

console.log(compareTrue(false, true));
console.log(compareTrue(true, false));
console.log(compareTrue(false, false));
console.log(compareTrue(true, true));

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

console.log(calcArea(10, 50));
console.log(calcArea(5, 2));
console.log(calcArea(51, 1));

// Desafio 3
function splitSentence(sentence) {
  let wordArray = [];
  let currentWord = '';

  for (let i = 0; i < sentence.length; i += 1) {
    if (sentence[i] === ' ') {
      wordArray.push(currentWord);
      currentWord = '';
    } else if (i === sentence.length - 1) {
      currentWord += sentence[i];
      wordArray.push(currentWord);
    } else {
      currentWord += sentence[i];
    }
  }
  
  return wordArray;
}

console.log(splitSentence('go Trybe'));
console.log(splitSentence('vamo que vamo'));
console.log(splitSentence('foguete'));

// Desafio 4
function concatName(nameArray) {
  let firstName = nameArray[0];
  let lastName = nameArray[nameArray.length - 1];

  let nameString = `${lastName}, ${firstName}`;

  return nameString;
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
function highestCount(intArray) {
  let sortedArray = intArray.sort().reverse();
  let count = 1;
  let highest = sortedArray[0];

  for(let i = 1; i < sortedArray.length; i += 1) {
    if(sortedArray[i] === highest) {
      count += 1;
    } else {
      break;
    }
  }

  return count;
}

console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));
console.log(highestCount([0, 4, 4, 4, 9, 2, 1]));
console.log(highestCount([0, 0, 0]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1Dist = Math.abs(cat1 - mouse);
  let cat2Dist = Math.abs(cat2 - mouse);

  if (cat1Dist === cat2Dist) {
    return 'os gatos trombam e o rato foge';
  } else if (cat1Dist > cat2Dist) {
    return 'cat1';
  } else {
    return 'cat2';
  }
}

console.log(catAndMouse(0, 3, 2));
console.log(catAndMouse(0, 6, 12));
console.log(catAndMouse(0, 6, -6));

// Desafio 8
function fizzBuzz(intArray) {
  let fizzBuzzArray = [];

  for (let num of intArray) {
    if (num % 3 === 0) {
      if (num % 5 === 0) {
        fizzBuzzArray.push('fizzBuzz');
      } else {
        fizzBuzzArray.push('fizz');
      }
    } else if (num % 5 === 0) {
      fizzBuzzArray.push('buzz');
    } else {
      fizzBuzzArray.push('bug!');
    }
  }

  return fizzBuzzArray;
}

console.log(fizzBuzz([2, 15, 7, 9, 45]));
console.log(fizzBuzz([7, 9]));
console.log(fizzBuzz([9, 25]));

// Desafio 9
function encode() {

}

function decode() {

}

module.exports = {
  compareTrue,
  calcArea,
  splitSentence,
  concatName,
  footballPoints,
  highestCount,
  catAndMouse,
  fizzBuzz,
  encode,
  decode,
};