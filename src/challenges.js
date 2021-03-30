// Desafio 1
function compareTrue(a, b) {
  return a && b;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(arr) {
  return arr.split(' ');
}

// Desafio 4
function concatName(arr) {
  return `${arr[arr.length - 1]}, ${arr[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties * 1;
}

// Desafio 6
function highestCount(arr) {
  let highestNumberInArray = Math.max(...arr);
  let timesRepeat = 0;
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === highestNumberInArray) {
      timesRepeat += 1;
    }
  }
  return timesRepeat;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (cat1 - mouse < cat2 - mouse) {
    return 'cat1';
  } else if (cat2 - mouse < cat1 - mouse) {
    return 'cat2';
  } else if(cat1 === cat2){
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(array) {
  let finalArray = [];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] % 15 === 0) {
      finalArray.push('fizzBuzz');
    } else if (array[i] % 3 === 0) {
      finalArray.push('fizz');
    } else if (array[i] % 5 === 0) {
      finalArray.push('buzz');
    } else {
      finalArray.push('bug!');
    }
  }
  return finalArray;
}

// Desafio 9
// link sobre o metodo replace utilizado neste exercicio: https://www.w3schools.com/jsref/jsref_replace.asp
function encode(str) {
  let replaced = str.replace(/a/g, 1);
  replaced = replaced.replace(/e/g, 2);
  replaced = replaced.replace(/i/g, 3);
  replaced = replaced.replace(/o/g, 4);
  replaced = replaced.replace(/u/g, 5);
  return replaced;
}

function decode(str) {
  let replaced = str.replace(/1/g, 'a');
  replaced = replaced.replace(/2/g, 'e');
  replaced = replaced.replace(/3/g, 'i');
  replaced = replaced.replace(/4/g, 'o');
  replaced = replaced.replace(/5/g, 'u');
  return replaced;
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
