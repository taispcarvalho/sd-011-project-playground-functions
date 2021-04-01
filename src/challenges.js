// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 && valor2) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  let stringToSplit = string;
  let stringSplited = stringToSplit.split(' ');
  return stringSplited;
}

// Desafio 4
function concatName(array) {
  return `${array[array.length - 1]}, ${array[0]}`;
}
// Desafio 5
function footballPoints(wins, ties) {
  let winsPoints = wins * 3;
  return winsPoints + ties;
}

// Desafio 6

function highestCount(array) {
  let cont = 0;
  let biggerNumber = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (biggerNumber <= array[index]) {
      biggerNumber = array[index];
    }
  }
  for (let index = 0; index < array.length; index += 1) {
    if (biggerNumber === array[index]) {
      cont += 1;
    }
  }
  return cont;
}

// Desafio 7

function catAndMouse(mouse, cat1, cat2) {
  let firthCat, secondCat;
  if (cat1 < mouse && cat2 > mouse) {
    firthCat = mouse - cat1;
    secondCat = cat2 - mouse;
  } else if (cat2 < mouse && cat1 > mouse) {
    firthCat = cat1 - mouse;
    secondCat = mouse - cat2;
  } else {
    firthCat = cat1 - mouse;
    secondCat = cat2 - mouse;
  }

  function mouseCatch(firth, second) {
    if (firth === second) {
      return 'os gatos trombam e o rato foge';
    } else if (firth < second) {
      return 'cat1';
    }
    return 'cat2';
  }

  return mouseCatch(firthCat, secondCat);
}

// Desafio 8

function fizzBuzz(array) {
  let newArray = [];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      newArray.push('fizzBuzz');
    } else if (array[index] % 3 === 0) {
      newArray.push('fizz');
    } else if (array[index] % 5 === 0) {
      newArray.push('buzz');
    } else {
      newArray.push('bug!');
    }
  }
  return newArray;
}

// Desafio 9
function encode(string) {
  let stringEncode = string.replace('a', 1);
  stringEncode = stringEncode.replace('e', 2);
  stringEncode = stringEncode.replace('i', 3);
  stringEncode = stringEncode.replace('o', 4);
  stringEncode = stringEncode.replace('u', 5);
  return stringEncode;
}

function decode(string) {
  let stringDecode = string.replace(1, 'a');
  stringDecode = stringDecode.replace(2, 'e');
  stringDecode = stringDecode.replace(3, 'i');
  stringDecode = stringDecode.replace(4, 'o');
  stringDecode = stringDecode.replace(5, 'u');
  return stringDecode;
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
