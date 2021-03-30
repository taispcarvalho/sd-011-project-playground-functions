// Desafio 1
function compareTrue(value1, value2) {
  return value1 && value2;
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
  let newArray = [array[array.length - 1], array[0]];
  return newArray.join(', ');
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties * 1);
}

// Desafio 6
function highestNumber(numbers) {
  let max = numbers[0];

  for (let i in numbers) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }

  return max;
}

function highestCount(numbers) {
  let number = highestNumber(numbers);
  let count = 0;

  for (let i in numbers) {
    if (numbers[i] === number) {
      count += 1;
    }
  }

  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let first = mouse - cat1;
  let second = mouse - cat2;
  let msg = '';

  if (first < 0) {
    first *= -1;
  } else if (second < 0) {
    second *= -1;
  }

  if (first === second) {
    msg = 'os gatos trombam e o rato foge';
  } else if (first > second) {
    msg = 'cat2';
  } else {
    msg = 'cat1';
  }

  return msg;
}

console.log(catAndMouse(1, 0, 2));

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
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
