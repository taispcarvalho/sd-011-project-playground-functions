// Desafio 1
function compareTrue(valor1, valo2) {
  return valor1 && valo2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(word) {
  return word.split(' ');
}

// Desafio 4
function concatName(names) {
  let firstAndLast = names[names.length - 1].concat(', ') + names[0];
  return firstAndLast.toString();
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties);
}

// Desafio 6
function maxNum(numbers) {
  let higherNum = 0;
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > higherNum) {
      higherNum = numbers[index];
    }
  }
  return higherNum;
}

function highestCount(numbers) {
  let timesNum = 0;
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] === maxNum(numbers)) {
      timesNum += 1;
    }
  }
  return timesNum;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distCat1 = Math.abs(cat1 - mouse);
  let distCat2 = Math.abs(cat2 - mouse);
  let winner = '';
  if (distCat1 === distCat2) {
    winner = 'os gatos trombam e o rato foge';
  } else if (distCat2 > distCat1) {
    winner = 'cat1';
  } else {
    winner = 'cat2';
  }
  return winner;
}

// Desafio 8
function fizzBuzz(numbers) {
  let phrase = [];
  for (let index = 0; index < numbers.length; index += 1) {
    switch (true) {
    case (numbers[index] % 15 === 0):
      phrase.push('fizzBuzz');
      break;
    case (numbers[index] % 3 === 0):
      phrase.push('fizz');
      break;
    case (numbers[index] % 5 === 0):
      phrase.push('buzz');
      break;
    default:
      phrase.push('bug!');
    }
  }
  return phrase;
}

// Desafio 9
function encode(phrase) {
  let leters = phrase.split('');
  let output = [];
  for (let index = 0; index < leters.length; index += 1) {
    switch (true) {
    case (leters[index] === 'a'):
      output.push(1);
      break;
    case (leters[index] === 'e'):
      output.push(2);
      break;
     case (leters[index] === 'i'):
      output.push(3);
      break;
     case (leters[index] === 'o'):
      output.push(4);
      break;
     case (leters[index] === 'u'):
      output.push(5);
      break;
     default: 
      output.push(leters[index]);
    }
  }
  return output.join('');
}
function decode(phrase) {
  let leters = phrase.split('');
  let output = [];
  for (let index = 0; index < leters.length; index += 1) {
    if (leters[index] === '1') {
      output.push('a');
    } else if (leters[index] === '2') {
      output.push('e');
    } else if (leters[index] === '3') {
      output.push('i');
    } else if (leters[index] === '4') {
      output.push('o');
    } else if (leters[index] === '5') {
      output.push('u');
    } else {
      output.push(leters[index]);
    }
  }
  return output.join('');
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
