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
  } else {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(value) {
  ret = [];
  for (let index = 0; index < value.length; index += 1) {
    if (value[index] % 3 === 0 && value[index] % 5 === 0) {
      ret.push('fizzBuzz');
    } else if (value[index] % 3 === 0) {
      ret.push('fizz');
    } else if (value[index] % 5 === 0) {
      ret.push('buzz');
    } else {
      ret.push('bug!');
    }
  }
  return ret;
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
