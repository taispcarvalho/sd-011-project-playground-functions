// Desafio 1
function compareTrue(value1, value2) {
  // seu código aqui
  return value1 && value2;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(frase) {
  // seu código aqui
  let palavras = frase.split(' ');
  return palavras;
}

// Desafio 4
function concatName(itens) {
  // seu código aqui
  let firstItem = itens[itens.length - 1];
  let secondItem = itens[0];
  return firstItem + ', ' + secondItem;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let pontosVitoria = wins * 3;
  let pontosTotais = pontosVitoria + ties;
  return pontosTotais;
}

// Desafio 6
function highestNumber(numbers) {
  let maiorNum = 0;
  for (let index = 0; index < numbers.length; index += 1) {
    if (maiorNum < numbers[index]) {
      maiorNum = numbers[index];
    }
  }
  return maiorNum;
}

function highestCount(numbers) {
  // seu código aqui
  let highest = highestNumber(numbers);
  let repetition = 0;
  for (let number of numbers) {
    if (number === highest) {
      repetition += 1;
    }
  }
  return repetition;
}

// Desafio 7
function distancia(p1, p2) {
  return Math.abs(p2 - p1);
}

function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let result;
  let re1 = distancia(cat1, mouse);
  let re2 = distancia(cat2, mouse);
  if (re1 < re2) {
    result = 'cat1';
  } else if (re1 > re2) {
    result = 'cat2';
  } else {
    result = 'os gatos trombam e o rato foge';
  }
  return result;
}

// Desafio 8
function isFizzBuzz(number) {
  if ((number % 3 === 0) && (number % 5 === 0)) {
    return 'fizzBuzz';
  } if (number % 3 === 0) {
    return 'fizz';
  } if (number % 5 === 0) {
    return 'buzz';
  }
  return 'bug!';
}

function fizzBuzz(numbers) {
  // seu código aqui
  for (let index = 0; index < numbers.length; index += 1) {
    numbers[index] = isFizzBuzz(numbers[index]);
  }
  return numbers;
}

// Desafio 9
function encode(value) {
  // seu código aqui
  let char = value.split('');
  for (let index in char) {
    if (char[index] === 'a') {
      char[index] = '1';
    } else if (char[index] === 'e') {
      char[index] = '2'/
    } else if (char[index] === 'i') {
      char[index] = '3';
    } else if (char[index] === 'o') {
      char[index] = '4';
    } else if (char[index] === 'u') {
      char[index] = '5';
    }
  }
  return char.join('');
}

function decode(value) {
  // seu código aqui
  let char = value.split('');
  for (let index in char) {
    if (char[index] === '1') {
      char[index] = 'a';
    } else if (char[index] === '2') {
      char[index] = 'e';
    } else if (char[index] === '3') {
      char[index] = 'i';
    } else if (char[index] === '4') {
      char[index] = 'o';
    } else if (char[index] === '5') {
      char[index] = 'u';
    }
  }
  return char.join('');
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
