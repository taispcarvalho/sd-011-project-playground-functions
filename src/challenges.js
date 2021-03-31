// Desafio 1
function compareTrue(boo1, boo2) {
  // seu código aqui
  return boo1 && boo2;
}

console.log(compareTrue('True', 'True'));

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}

console.log(calcArea(10, 10));

// Desafio 3
function splitSentence(phrase) {
  // seu código aqui
  return phrase.split(' ');
}

console.log(splitSentence('Vamo que vamo!'));

// Desafio 4
function concatName(names) {
  // seu código aqui
  return names[names.length - 1] + ', ' + names[0];
}

console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return wins * 3 + ties;
}

console.log(footballPoints(1, 2));

// Desafio 6
function higherNumber(numbers) {
  let higher = numbers[0];
  for (let key of numbers) {
    if (key > higher) {
      higher = key;
    }
  }
  return higher;
}

console.log(higherNumber([9, 1, 2, 3, 9, 5, 7]));

function highestCount(numbers) {
  // seu código aqui
  let counter = 0;
  for (let key of numbers) {
    if (key === higherNumber(numbers)) {
      counter += 1;
    }
  }
  return counter;
}

console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));

// Desafio 7

function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let cat1dist = 0;
  let cat2dist = 0;

  if (cat1 > mouse){
    for (mouse; mouse < cat1; mouse += 1){
      cat1dist += 1;
    }
  } else if (mouse > cat1) {
    for (cat1; cat1 < mouse; cat1 += 1){
      cat1dist += 1;
    }
  }

  if (cat2 > mouse){
    for (mouse; mouse < cat2; mouse += 1){
      cat2dist += 1;
    }
  } else if (mouse > cat2) {
    for (cat2; cat2 < mouse; cat2 += 1){
      cat2dist += 1;
    }
  }

  if (cat1dist > cat2dist) {
    return 'cat2'
  } else if (cat1dist < cat2dist) {
    return 'cat1'
  } else if (cat1dist === cat2dist) {
    return 'os gatos trombam e o rato foge'
  }

}

console.log(catAndMouse(1, 0, 2));

// Desafio 8
function fizzBuzz(numbers) {
  // seu código aqui
  let returnArray = [];
  for (const key of numbers) {
  if ((key % 3) === 0 && (key % 5) === 0) {
    returnArray.push('fizzBuzz');
  } else if ((key % 3) === 0 && (key % 5) !== 0) {
    returnArray.push('fizz');
  } else if ((key %3 ) !== 0 && (key % 5) === 0) {
    returnArray.push('buzz');
  } else {
    returnArray.push('bug!');
  }
  }

  return returnArray;
}

console.log(fizzBuzz([2, 15, 7, 9, 45, 25]));

// Desafio 9
function encode(phrase) {
  // seu código aqui
  let phraseCode = '';
  for (const key of phrase) {
    switch (key) {
      case 'a':
        phraseCode += '1';
        break;
      case 'e':
        phraseCode += '2';
        break;
      case 'i':
        phraseCode += '3';
        break;
      case 'o':
        phraseCode += '4';
        break;
      case 'u':
        phraseCode += '5';
        break;
      default:
        phraseCode += key;
        break;
    }
  }
  return phraseCode;
}

console.log(encode('hi there!'));

function decode(phrase) {
  // seu código aqui
  let phraseDecode = '';
  for (const key of phrase) {
    switch (key) {
      case '1':
        phraseDecode += 'a';
        break;
      case '2':
        phraseDecode += 'e';
        break;
      case '3':
        phraseDecode += 'i';
        break;
      case '4':
        phraseDecode += 'o';
        break;
      case '5':
        phraseDecode += 'u';
        break;
      default:
        phraseDecode += key;
        break;
    }
  }
  return phraseDecode;
}

console.log(decode('h3 th2r2!'));

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
