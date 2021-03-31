// Desafio 1
function compareTrue(param1, param2) {
  if (param1 && param2) {
    return true;
  }
  return false;
}
console.log(compareTrue(true, false));

// Desafio 2
function calcArea(base, height) {
  let triangle = (base * height) / 2;
  return triangle;
}
console.log(calcArea(10, 50));
console.log(calcArea(5, 2));
console.log(calcArea(51, 1));

// Desafio 3
function splitSentence(string) {
  let separateString = string.split(' ');
  return separateString;
}
console.log(splitSentence('go Trybe'));
console.log(splitSentence('vamo que vamo'));
console.log(splitSentence('foguete'));

// Desafio 4
function concatName(array) {
  let first = array[0];
  let last = array[array.length - 1];
  let concat = `${last}, ${first}`;
  return concat;
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));
console.log(concatName(['foguete', 'não', 'tem', 'ré']));
console.log(concatName(['captain', 'my', 'captain']));

// Desafio 5
function footballPoints(wins, ties) {
  let score = 0;

  if (wins) {
    score += wins * 3;
  }

  if (ties) {
    score += ties * 1;
  }

  return score;
}
console.log(footballPoints(14, 8));
console.log(footballPoints(1, 2));
console.log(footballPoints(0, 0));

// Desafio 6
function highestCount(array) {
  let counter = 0;
  let highest = Math.max(...array);
  for (let i = 0; i <= array.length; i += 1) {
    if (array[i] >= highest) {
      counter += 1;
    }
  }
  return counter;
}
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));
console.log(highestCount([0, 4, 4, 4, 9, 2, 1]));
console.log(highestCount([0, 0, 0]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1Distance = Math.abs(cat1 - mouse);
  let cat2Distance = Math.abs(cat2 - mouse);

  if (cat2Distance < cat1Distance) {
    return 'cat2';
  }
  if (cat1Distance < cat2Distance) {
    return 'cat1';
  }
  return 'os gatos trombam e o rato foge';
}
console.log(catAndMouse(0, 3, 2));
console.log(catAndMouse(0, 6, 18));
console.log(catAndMouse(10, 4, 22));
console.log(catAndMouse(2, 0, 0));

// Desafio 8
function fizzBuzz(array) {
  let resultado = [];

  for (let counter = 0; counter < array.length; counter += 1) {

    if ((array[counter] % 3 === 0) && (array[counter] % 5 === 0)) {
      resultado.push('fizzBuzz');
    } else if (array[counter] % 5 === 0) {
      resultado.push('buzz');
    } else if (array[counter] % 3 === 0) {
      resultado.push('fizz');
    } else {
      resultado.push('bug!');
    }
  }
  console.log(`Fizzbuzz (${array}):`);
  return resultado;
}
console.log(fizzBuzz([2, 15, 7, 9, 45]));
console.log(fizzBuzz([7, 9]));
console.log(fizzBuzz([9, 25]));

// Desafio 9
function encode(string) {
  let arrNew = string.split('');
  for (let letter = 0; letter < arrNew.length; letter += 1) {
    if (arrNew[letter] === 'a') {
      arrNew[letter] = 1;
    }
    if (arrNew[letter] === 'e') {
      arrNew[letter] = 2;
    }
    if (arrNew[letter] === 'i') {
      arrNew[letter] = 3;
    }
    if (arrNew[letter] === 'o') {
      arrNew[letter] = 4;
    }
    if (arrNew[letter] === 'u') {
      arrNew[letter] = 5;
    }
  }
  arrNew = arrNew.join('');
  return arrNew;
}
console.log(encode('hi there!'));
console.log(encode('hello world!'));
console.log(encode('a,e,i,o,u'));

function decode(string) {
  let arrNew = string.split('');
  for (let letter = 0; letter < arrNew.length; letter += 1) {
    if (arrNew[letter] == 1) {
      arrNew[letter] = 'a';
    }
    if (arrNew[letter] == 2) {
      arrNew[letter] = 'e';
    }
    if (arrNew[letter] == 3) {
      arrNew[letter] = 'i';
    }
    if (arrNew[letter] == 4) {
      arrNew[letter] = 'o';
    }
    if (arrNew[letter] == 5) {
      arrNew[letter] = 'u';
    }
  }
  arrNew = arrNew.join('');
  return arrNew;
}
console.log(decode('h3 th2r2!'));
console.log(decode('h2ll4 w4rld!'));
console.log(decode('1,2,3,4,5'));

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
