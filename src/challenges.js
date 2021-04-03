// Desafio 1
function compareTrue(num, num2) {
  return num && num2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(value) {
  let ret = [];
  let aux = '';
  for (let letras of value) {
    if (letras === ' ') {
      ret.push(aux);
      aux = '';
    } else {
      aux += letras;
    }
  }
  ret.push(aux);
  return ret;
}

// Desafio 4
function concatName(value) {
  let index = value.length - 1;
  let ret = `${value[index]}, ${value[0]}`;
  return ret;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(value) {
  let maior = value[0];
  let qtMaior = 1;
  for (let index = 1; index < value.length; index += 1) {
    if (value[index] === maior) {
      qtMaior += 1;
    } else if (value[index] > maior) {
      qtMaior = 1;
      maior = value[index];
    }
  }
  return qtMaior;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(mouse - cat1) < Math.abs(mouse - cat2)) {
    return 'cat1';
  } if (Math.abs(mouse - cat1) > Math.abs(mouse - cat2)) {
    return 'cat2';
  } return 'os gatos trombam e o rato foge';
}

// Desafio 8
function divisionFor (value1, value2) {
  if (value1 % value2 === 0) {
    return true;
  } return false;
}
function fizzBuzz(value) {
  let ret = [];
  for (let index = 0; index < value.length; index += 1) {
    if (divisionFor(value[index],3) && divisionFor(value[index],5)) {
      ret.push('fizzBuzz');
    } if (divisionFor(value[index], 3)) {
      ret.push('fizz');
    } if (divisionFor(value[index], 3)) {
      ret.push('buzz');
    } else {
      ret.push('bug!');
    }
  }
  return ret;
}

// Desafio 9
function encode(value) {
  let aux = 0;
  let value1 = '';
  for (let letras of value) {
    if (letras === 'a') {
      value1 += '1';
    } else if (letras === 'e') {
      value1 += '2';
    } else if (letras === 'i') {
      value1 += '3';
    } else if (letras === 'o') {
      value1 += '4';
    } else if (letras === 'u') {
      value1 += '5';
    } else {
      value1 += value[aux];
    }
    aux += 1;
  }
  return value1;
}

function decode(value) {
  let aux = 0;
  let value1 = '';
  for (let letras of value) {
    if (letras === '1') {
      value1 += 'a';
    } else if (letras === '2') {
      value1 += 'e';
    } else if (letras === '3') {
      value1 += 'i';
    } else if (letras === '4') {
      value1 += 'o';
    } else if (letras === '5') {
      value1 += 'u';
    } else {
      value1 += value[aux];
    }
    aux += 1;
  }
  return value1;
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
