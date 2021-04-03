// Desafio 1
function compareTrue(bool1, bool2) {
  return bool1 && bool2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  let stringSplited = (string.split(' '));
  return stringSplited;
}

// Desafio 4
function concatName(array) {
  let stringConcat = `${array[array.length - 1]}, ${array[0]}`;
  return stringConcat;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// função auxiliar Desafio 6
function findBiggestNumber(array) {
  let biggestNumber = array[0];
  for (let index = 0; index < array.length; index += 1) {
    if (biggestNumber < array[index]) {
      biggestNumber = array[index];
    }
  }
  return biggestNumber;
}

// Desafio 6
function highestCount(array) {
  // seu código aqui
  let biggestNumber = findBiggestNumber(array);
  let times = 0;

  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === biggestNumber) {
      times += 1;
    }
  }
  return times;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distCat1 = Math.abs((cat1) - (mouse));
  let distCat2 = Math.abs((cat2) - (mouse));
  let answer;

  if (distCat1 < distCat2) {
    answer = 'cat1';
  } else if (distCat2 < distCat1) {
    answer = 'cat2';
  } else {
    answer = 'os gatos trombam e o rato foge';
  }
  return answer;
}

// Desafio 8
function fizzBuzz(array) {
  let answerArray = [];
  for (let index = 0; index < array.length; index += 1) {
    let add = 'bug!';
    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      add = 'fizzBuzz';
    } else if (array[index] % 3 === 0) {
      add = 'fizz';
    } else if (array[index] % 5 === 0) {
      add = 'buzz';
    }
    answerArray.push(add);
  }
  return answerArray;
}

console.log(fizzBuzz([2, 15, 7, 9, 45]));
console.log(fizzBuzz([7, 9]));
console.log(fizzBuzz([9, 25]));

// Desafio 9
function encode(text) {
  let textEncode = text;
  textEncode = textEncode.replace('a', '1');
  textEncode = textEncode.replace('e', '2');
  textEncode = textEncode.replace('i', '3');
  textEncode = textEncode.replace('o', '4');
  textEncode = textEncode.replace('u', '5');
  return textEncode;
}

function decode(text) {
  let textDecode = text;
  textDecode = textDecode.replace('1', 'a');
  textDecode = textDecode.replace('2', 'e');
  textDecode = textDecode.replace('3', 'i');
  textDecode = textDecode.replace('4', 'o');
  textDecode = textDecode.replace('5', 'u');
  return textDecode;
}

console.log(encode('aeiou!'));
console.log(decode('12345!'));

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
