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
  return string.split(' ');
}

// Desafio 4
function concatName(array) {
  return `${array[array.length - 1]}, ${array[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return 3 * wins + ties;
}

// Desafio 6
function highestCount(array) {
  let maior = 0;
  let counter = 0;
  for (let i in array) {
    if (array[i] > maior) {
      maior = array[i];
    }
  }
  for (let i in array) {
    if (array[i] === maior) {
      counter += 1;
    }
  }
  return counter;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let dist1 = Math.abs(cat1 - mouse);
  let dist2 = Math.abs(cat2 - mouse);
  let output;
  if (dist1 < dist2) {
    output = 'cat1';
  } else if (dist2 < dist1) {
    output = 'cat2';
  } else {
    output = 'os gatos trombam e o rato foge';
  }
  return output;
}

// Desafio 8
function fizzBuzz(array) {
  let output = [];
  for (let n in array) {
    if (array[n] % 3 === 0 && array[n] % 5 === 0) {
      output.push('fizzBuzz');
    } else if (array[n] % 3 === 0) {
      output.push('fizz');
    } else if (array[n] % 5 === 0) {
      output.push('buzz');
    } else {
      output.push('bug!');
    }
  }
  return output;
}

// Desafio 9
function encode(array) {
  let output = [];
  for (let n in array) {
    switch (array[n]) {
    case 'a':
      output.push(1);
      break;
    case 'e':
      output.push(2);
      break;
    case 'i':
      output.push(3);
      break;
    case 'o':
      output.push(4);
      break;
    case 'u':
      output.push(5);
      break;
    default:
      output.push(array[n]);
    }
  }
  return output.join('');
}

function decode(array) {
  let output = [];
  for (let n in array) {
    switch (array[n]) {
    case '1':
      output.push('a');
      break;
    case '2':
      output.push('e');
      break;
    case '3':
      output.push('i');
      break;
    case '4':
      output.push('o');
      break;
    case '5':
      output.push('u');
      break;
    default:
      output.push(array[n]);
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
