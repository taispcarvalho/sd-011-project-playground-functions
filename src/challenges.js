// Desafio 1
function compareTrue(val1, val2) {
  return val1 && val2;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(word) {
  let arrWord = word.split(' ');
  return arrWord;
}

// Desafio 4
function concatName(arrWords) {
  let arrWords2 = arrWords[arrWords.length - 1] + ', ' + arrWords[0];
  return arrWords2;
}

// Desafio 5
function footballPoints(wins, ties) {
  let hits = 0;
  hits = (3 * wins) + ties;
  return hits;
}

// Desafio 6
function highestCount(arrNum) {

  arrNum.sort();
  let count = 0;

  let biggest = Math.max(...arrNum);

  for (let index = 0; index < arrNum.length; index += 1) {
    if (arrNum[index] === biggest) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {

  let whoCatches;
  let cat1Pos = Math.abs(cat1 - mouse);
  let cat2Pos = Math.abs(cat2 - mouse);

  if (cat1Pos < cat2Pos) {
    whoCatches = 'cat1';
  } else if (cat1Pos === cat2Pos) {
    whoCatches = 'os gatos trombam e o rato foge';
  } else {
    whoCatches = 'cat2';
  }

  return whoCatches;
}

// Desafio 8
function fizzBuzz(arrNum) {

  let result = [];
  for (let index = 0; index < arrNum.length; index += 1) {

    if (arrNum[index] % 5 === 0 && arrNum[index] % 3 === 0) {
      result.push('fizzBuzz');
    } else if (arrNum[index] % 5 === 0) {
      result.push('buzz');
    } else if (arrNum[index] % 3 === 0) {
      result.push('fizz');
    } else {
      result.push('bug!');
    }
  }
  return result;
}

// Desafio 9
function encode(words) {
  let arrVowels = words.split('');

  for (let index = 0; index < words.length; index += 1) {

    switch (arrVowels[index]) {
      case 'a':
        arrVowels[index] = 1;
        break;

      case 'e':
        arrVowels[index] = 2;
        break;

      case 'i':
        arrVowels[index] = 3;
        break;

      case 'o':
        arrVowels[index] = 4;
        break;

      case 'u':
        arrVowels[index] = 5;
        break;
    }
  }
  arrVowels = arrVowels.join('');
  return arrVowels;
}

function decode(words) {

  let arrVowels = words.split('');

  for (let index = 0; index < words.length; index += 1) {

    switch (arrVowels[index]) {
      case '1':
        arrVowels[index] = 'a';
        break;

      case '2':
        arrVowels[index] = 'e';
        break;

      case '3':
        arrVowels[index] = 'i';
        break;

      case '4':
        arrVowels[index] = 'o';
        break;

      case '5':
        arrVowels[index] = 'u';
        break;
    }
  }
  arrVowels = arrVowels.join('');
  return arrVowels;
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
