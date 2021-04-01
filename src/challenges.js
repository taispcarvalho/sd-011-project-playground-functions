// Desafio 1
function compareTrue(condition1, condition2) {
  if (condition1 === true && condition2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(phrase) {
  let finalArray = [];
  let word = '';
  for (let index = 0; index < phrase.length; index += 1) {
    if (phrase[index] === ' ') {
      finalArray.push(word);
      word = '';
    } else if (index === phrase.length - 1) {
      word += phrase[index];
      finalArray.push(word);
    } else {
      word += phrase[index];
    }
  }
  return finalArray;
}

// Desafio 4
function concatName(input) {
  return `${input[input.length - 1]}, ${input[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties * 1);
}

// Desafio 6
function highestCount(input) {
  let majorNumber = input[0];
  let counter = 1;
  for (let index = 1; index < input.length; index += 1) {
    if (input[index] > majorNumber) {
      majorNumber = input[index];
      counter = 1;
    } else if (input[index] === majorNumber) {
      counter += 1;
    }
  }
  return counter;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1Distance = Math.abs(mouse - cat1);
  let cat2Distance = Math.abs(mouse - cat2);
  if (cat1Distance === cat2Distance) {
    return 'os gatos trombam e o rato foge';
  }
  if (cat1Distance > cat2Distance) {
    return 'cat2';
  }
  return 'cat1';
}

// Desafio 8
function checkCondition(valueToCheck, index) {
  if (valueToCheck[index] % 3 === 0 && valueToCheck[index] % 5 !== 0) {
    return 'fizz';
  }
  if (valueToCheck[index] % 3 !== 0 && valueToCheck[index] % 5 !== 0) {
    return 'bug!';
  }
}
function checkBothCondition(valueToCheck, index) {
  if (valueToCheck[index] % 5 === 0 && valueToCheck[index] % 3 !== 0) {
    return 'buzz';
  }
  if (valueToCheck[index] % 5 === 0 && valueToCheck[index] % 3 === 0) {
    return 'fizzBuzz';
  }
}
function fizzBuzz(input) {
  let result = [];
  for (let index = 0; index < input.length; index += 1) {
    if (checkCondition(input, index) !== undefined) {
      result.push(checkCondition(input, index));
    }
    if (checkBothCondition(input, index) !== undefined) {
      result.push(checkBothCondition(input, index));
    }
  }
  return result;
}

// Desafio 9
function searchOnEncode(index, workingWord) {
  let translate = { a: '1', e: '2', i: '3', o: '4', u: '5' };
  let workingWordSplited = workingWord.split('');
  for (let indexOfTranslate in translate) {
    if (indexOfTranslate === workingWord[index]) {
      workingWordSplited[index] = translate[indexOfTranslate];
    }
  }
  return workingWordSplited.join('');
}
function encode(word) {
  let workingWord = word;
  for (let index = 0; index <= word.length; index += 1) {
    workingWord = searchOnEncode(index, workingWord);
  }
  return workingWord;
}

function searchOnDecode(index, workingWord) {
  let translate = { a: '1', e: '2', i: '3', o: '4', u: '5' };
  let workingWordSplited = workingWord.split('');
  for (let indexOfTranslate in translate) {
    if (translate[indexOfTranslate] === workingWord[index]) {
      workingWordSplited[index] = indexOfTranslate;
    }
  }
  return workingWordSplited.join('');
}
function decode(word) {
  let workingWord = word;
  for (let index = 0; index < word.length; index += 1) {
    workingWord = searchOnDecode(index, workingWord);
  }
  return workingWord;
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
