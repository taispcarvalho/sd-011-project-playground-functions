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
<<<<<<< HEAD
  let firstAndLast = names[names.length - 1].concat(', ') + names[0];
=======
  let firstAndLast = names[names.length - 1].concat(', ') + names[0]
>>>>>>> 185557e3b63404597a94e635e379a9c02c84e207
  return firstAndLast.toString();
}
// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties);
}

// Desafio 6
function highestCount(numbers) {
  let higherNum = 0;
  let timesNum = 0;
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > higherNum) {
      higherNum = numbers[index];
    }
  }
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] === higherNum) {
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
    if (numbers[index] % 3 === 0 && numbers[index] % 5 === 0) {
      phrase.push('fizzBuzz');
    } else if (numbers[index] % 3 === 0) {
      phrase.push('fizz');
    } else if (numbers[index] % 5 === 0) {
      phrase.push('buzz');
    } else {
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
    if (leters[index] === 'a') {
      output.push(1);
    } else if (leters[index] === 'e') {
      output.push(2);
    } else if (leters[index] === 'i') {
      output.push(3);
    } else if (leters[index] === 'o') {
      output.push(4);
    } else if (leters[index] === 'u') {
      output.push(5);
    } else {
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
