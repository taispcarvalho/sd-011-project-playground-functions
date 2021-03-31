// Desafio 1
function compareTrue(firstValue, secondValue) {
  return firstValue && secondValue;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(sentence, separator) {
  return sentence.split(separator);
}

// Desafio 4
function concatName(array) {
  return `${array[array.length - 1]}, ${array[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties * 1;
}

// Desafio 6
function biggest(array) {
  let higher = array[0];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > higher) {
      higher = array[index];
    }
  }
  return higher;
}
function highestCount(array) {
  let target = biggest(array);
  let counter = 0;
  for (let index in array) {
    if (array[index] === target) {
      counter += 1;
    }
  }
  return counter;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let dist1 = Math.abs(mouse - cat1);
  let dist2 = Math.abs(mouse - cat2);
  if (dist1 > dist2) {
    return 'cat2';
  }
  if (dist2 > dist1) {
    return 'cat1';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(array) {
  let newArray = [];

  array.forEach(function (e) {
    if (e % 3 === 0 && e % 5 === 0) {
      newArray.push('fizzBuzz');
    } else if (e % 3 === 0) {
      newArray.push('fizz');
    } else if (e % 5 === 0) {
      newArray.push('buzz');
    } else {
      newArray.push('bug!');
    }
  });
  return newArray;
}

// Desafio 9
function encode(word) {
  let encoded = '';
  let codes = {
    a: '1',
    e: '2',
    i: '3',
    o: '4',
    u: '5',
  };
  for (let i = 0; i < word.length; i += 1) {
    for (let j in codes) {
      if (word[i] === j) {
        encoded += codes[j];
      }
    }
    if (!encoded[i]) {
      encoded += word[i];
    }
  }
  return encoded;
}

function decode(word) {
  let decoded = '';
  for (let i = 0; i < word.length; i += 1) {
    switch (word[i]) {
      case '1':
        decoded = `${decoded}a`;
        break;
      case '2':
        decoded = `${decoded}e`;
        break;
      case '3':
        decoded = `${decoded}i`;
        break;
      case '4':
        decoded = `${decoded}o`;
        break;
      case '5':
        decoded = `${decoded}u`;
        break;
      default:
        decoded += word[i];
    }
  }
  return decoded;
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
