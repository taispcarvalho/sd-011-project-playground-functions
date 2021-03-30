// Desafio 1
function compareTrue(value1, value2) {
  if (value1 == true && value2 == true) {
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
  return string.split(' ');
}

// Desafio 4
function concatName(array) {
  let first = array[0];
  let last = array[array.length - 1];
  let concatFirstLast = `${last},${first}`;
  return concatFirstLast;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties * 1);
}

// Desafio 6
function highestCount(array) {
  let ordemArray = array.sort((a, b) => { return a - b; });

  let sumRepeatLargestNumber = 0;

  for (let i = 1; i <= ordemArray.length; i += 1) {
    if (ordemArray[i] === ordemArray[i + 1]) {
      sumRepeatLargestNumber += 1;
    }
  }
  return sumRepeatLargestNumber;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (cat1 === cat2) {
    return 'os gatos trombam e o rato foge';
  } else if ((cat1 - mouse) > (cat2 - mouse)) {
    return cat2;
  } 
  return cat1;
}

// Desafio 8
function fizzBuzz(array) {
  let result = [];
  for (let i = 0; i < array.length; i += 1) {
    if (i % 15 === 0) {
      result.push('FizzBuzz');
    } else if (i % 3 === 0) {
      result.push('Fizz');
    } else if (i % 5 === 0) {
      result.push('Buzz');
    } else {
      result.push('bug!');
    }
  }
  return result;
}

// Desafio 9
function encode(string) {
  const letterChange = { a: 1, e: 2, i: 3, o: 4, u: 5};
  return string.replace(/[a e i o u]/g, match => letterChange[match]);
}

// Desafio 10
function decode() {

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
