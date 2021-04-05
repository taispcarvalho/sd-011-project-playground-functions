// Desafio 1
function compareTrue(value1, value2) {
  return value1 && value2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(phrase) {
  return phrase.split(' ');
}

// Desafio 4
function concatName(strArray) {
  return `${strArray.slice(-1)}, ${strArray[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(numArray) {
  let highestValue = Math.max.apply(null, numArray);
  let repeat = 0;
  for (let index = 0; index < numArray.length; index += 1) {
    if (highestValue === numArray[index]) {
      repeat += 1;
    }
  }
  return repeat;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let positionCat1 = Math.abs(mouse - cat1);
  let positionCat2 = Math.abs(mouse - cat2);
  if (positionCat1 === positionCat2) {
    return 'os gatos trombam e o rato foge';
  } else if (positionCat1 < positionCat2) {
    return 'cat1';
  }
  return 'cat2';
}
// Desafio 8
function fizzBuzz(numbers) {
  let results = [];
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 3 === 0 && numbers[index] % 5 !== 0) {
      results.push('fizz');
    } else if (numbers[index] % 5 === 0 && numbers[index] % 3 !== 0) {
      results.push('buzz');
    } else if (numbers[index] % 3 === 0 && numbers[index] % 5 === 0) {
      results.push('fizzBuzz');
    } else {
      results.push('bug!');
    }

  }
  return results;
}

// Desafio 9
function encode(encodeString) {
  for (let index = 0; index < encodeString.length; index += 1) {
    encodeString = encodeString.replace('a', '1');
    encodeString = encodeString.replace('e', '2');
    encodeString = encodeString.replace('i', '3');
    encodeString = encodeString.replace('o', '4');
    encodeString = encodeString.replace('u', '5');
  }
  return encodeString;
}

// Desafio 9
function decode(decodeString) {
  for (let index = 0; index < decodeString.length; index += 1) {
    decodeString = decodeString.replace('1', 'a');
    decodeString = decodeString.replace('2', 'e');
    decodeString = decodeString.replace('3', 'i');
    decodeString = decodeString.replace('4', 'o');
    decodeString = decodeString.replace('5', 'u');
  }
  return decodeString;
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
