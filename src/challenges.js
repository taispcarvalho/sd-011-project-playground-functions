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
  return string.split(' ');
}

// Desafio 4
function concatName(strings) {
  let space = ', ';
  return strings[strings.length - 1] + space + strings[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}

// Desafio 6
function highestCount(numbers) {
  let numMax = 0;
  for (let index = 0; index < numbers.length; index += 1) {
    numMax = Math.max(...numbers);
  }

  let quantNumMax = 0;
  for (let index = 0; index < numbers.length; index += 1) {
    quantNumMax += numbers[index] === numMax;
  }
  return quantNumMax;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distance1 = Math.abs(mouse - cat1);
  let distance2 = Math.abs(mouse - cat2);
  let cat;
  if (distance1 > distance2) {
    cat = 'cat2';
  } else if (distance2 > distance1) {
    cat = 'cat1';
  } else {
    cat = 'os gatos trombam e o rato foge';
  }
  return cat;
}

// Desafio 8
function checkFizzBuzz(numberArray) {
  if (numberArray % 15 === 0) {
    return 'fizzBuzz';
  } if (numberArray % 5 === 0) {
    return 'buzz';
  } if (numberArray % 3 === 0) {
    return 'fizz';
  }
  return 'bug!';
}
function fizzBuzz(nArray) {
  let result = [];
  for (let index = 0; index < nArray.length; index += 1) {
    result.push(checkFizzBuzz(nArray[index]));
  }
  return result;
}

// Desafio 9
function encode(str1) {
  let phrase = str1.replace(/a/g, '1')
    .replace(/e/g, '2')
    .replace(/i/g, '3')
    .replace(/o/g, '4')
    .replace(/u/g, '5');
  return phrase;
}

function decode(str2) {
  let nStr = str2.replace(/1/g, 'a')
    .replace(/2/g, 'e')
    .replace(/3/g, 'i')
    .replace(/4/g, 'o')
    .replace(/5/g, 'u');
  return nStr;
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
