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
  let space = ' ';
  let sentence = string.split(space);
  return sentence;
}
console.log(splitSentence('vamo que vamo'));

// Desafio 4
function concatName(array) {
  let newArray = `${array[array.length - 1]}, ${array[0]}`;
  return newArray;
}
console.log(concatName(['foguete', 'não', 'tem', 'ré']));

// Desafio 5
function footballPoints(wins, ties) {
  let game = wins * 3 + ties * 1;
  return game;
}
console.log(footballPoints(14, 8));

// Desafio 6
function highestCount(array) {
  let maiorNumero = 0;
  let numeroRepetido = 0;
  for (let index = 0; index < array.length; index += 1) {
    let possivelMaiorNumero = maiorNumero;
    maiorNumero = array[index];
    if (maiorNumero < possivelMaiorNumero) {
      maiorNumero = possivelMaiorNumero;
    }
  }
  for (let secondIndex = 0; secondIndex < array.length; secondIndex += 1) {
    if (maiorNumero === array[secondIndex]) {
      numeroRepetido += 1;
    }
  }
  return numeroRepetido;
}
console.log(highestCount([9, 3, 4, 6, 9, 5, 7]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distCat1 = mouse - cat1;
  let distCat2 = mouse - cat2;
  if (Math.abs(distCat1) > Math.abs(distCat2)) {
    return 'cat2';
  }
  if (Math.abs(distCat1) < Math.abs(distCat2)) {
    return 'cat1';
  }
  return 'os gatos trombam e o rato foge';
}
console.log(catAndMouse(0, 3, 2));
console.log(catAndMouse(0, 6, 12));
console.log(catAndMouse(0, 1, 1));

// Desafio 8
function fizzBuzz(num) {
  let array = [];
  for (let index = 0; index < num.length; index += 1) {
    let div3 = num[index] % 3 === 0;
    let div5 = num[index] % 5 === 0
    if (num[index] % 15 === 0) {
      array.push('fizzBuzz');
    } else if (div3) {
      array.push('fizz');
    } else if (div5) {
      array.push('buzz');
    } else {
      array.push('bug');
    }
  }
  return array;
  }
console.log(fizzBuzz([2, 15, 7, 9, 45]));

// Desafio 9
function encode(sentence) {
  for (let index = 0; index < sentence.length; index += 1) {
    sentence = sentence.replace('a', 1);
    sentence = sentence.replace('e', 2);
    sentence = sentence.replace('i', 3);
    sentence = sentence.replace('o', 4);
    sentence = sentence.replace('u', 5);
  }
  return sentence;
}
console.log(encode('hi there!'));

function decode(sentence2) {
  for (let secondIndex = 0; secondIndex < sentence2.length; secondIndex += 1) {
    sentence2 = sentence2.replace(1, 'a');
    sentence2 = sentence2.replace(2, 'e');
    sentence2 = sentence2.replace(3, 'i');
    sentence2 = sentence2.replace(4, 'o');
    sentence2 = sentence2.replace(5, 'u');
  }
  return sentence2;
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
