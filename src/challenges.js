function compareTrue(parameter1, parameter2) {
  return (parameter1 && parameter2);
}

function calcArea(base, height) {
  return ((base * height) / 2);
}

function splitSentence(sentence) {
  let split = [];
  let index = 0;
  split[0] = '';
  for (let char of sentence) {
    if (char === ' ') {
      index += 1;
      split[index] = '';
    } else {
      split[index] += char;
    }
  }
  return (split);
}

function concatName(nameArray) {
  let formattedName = (`${nameArray[(nameArray.length - 1)]}, ${nameArray[0]}`);
  return (formattedName);
}

function footballPoints(wins, ties) {
  return ((wins * 3) + ties);
}

function highestCount(numbers) {
  let counter = 0;
  let highest;
  for (let currentNumber of numbers) {
    if ((currentNumber > highest) || (highest === undefined)) {
      highest = currentNumber;
      counter = 1;
    } else if (currentNumber === highest) {
      counter += 1;
    }
  }
  return (counter);
}

function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    return ('cat1');
  }
  if (Math.abs(cat2 - mouse) < Math.abs(cat1 - mouse)) {
    return ('cat2');
  }
  if (Math.abs(cat2 - mouse) === Math.abs(cat1 - mouse)) {
    return ('os gatos trombam e o rato foge');
  }
}

function findDivisible(fizzBuzzNumber) {
  let divisible = 1;
  if (fizzBuzzNumber % 3 === 0) {
    divisible *= 3;
  }
  if (fizzBuzzNumber % 5 === 0) {
    divisible *= 5;
  }
  return divisible;
}

function fizzBuzz(numbers) {
  let fizzBuzzArray = [];
  for (let currentNumber of numbers) {
    let divisibleBy = findDivisible(currentNumber);
    switch (divisibleBy) {
    case 3:
      fizzBuzzArray.push('fizz');
      break;
    case 5:
      fizzBuzzArray.push('buzz');
      break;
    case 15:
      fizzBuzzArray.push('fizzBuzz');
      break;
    default:
      fizzBuzzArray.push('bug!');
    }
  }
  return fizzBuzzArray;
}

function encode(toCodeString) {
  let codedString = toCodeString.replace(/a/g, '1');
  codedString = codedString.replace(/e/g, '2');
  codedString = codedString.replace(/i/g, '3');
  codedString = codedString.replace(/o/g, '4');
  codedString = codedString.replace(/u/g, '5');
  return (codedString);
}

function decode(toDecodeString) {
  let decodedString = toDecodeString.replace(/1/g, 'a');
  decodedString = decodedString.replace(/2/g, 'e');
  decodedString = decodedString.replace(/3/g, 'i');
  decodedString = decodedString.replace(/4/g, 'o');
  decodedString = decodedString.replace(/5/g, 'u');
  return (decodedString);
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
