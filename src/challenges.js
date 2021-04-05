// Desafio 1
function compareTrue(value1, value2) {
  if (value1 && value2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(frase) {
  let output = [];
  let text = '';
  for (let index = 0; index < frase.length; index += 1) {
    if (frase[index] === ' ') {
      index += 1;
      output.push(text);
      text = '';
    }
    text += frase[index];
  }
  output.push(text);
  return output;
}

// Desafio 4
function concatName(frase) {
  let output = '';
  let aux = '';
  for (let index = 0; index < frase.length; index += 1) {
    aux += frase[index];
    index = frase.length - 1;
    output += `${frase[index]}, `;
    output += aux;
  }
  return output;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pts = wins * 3 + ties;
  return pts;
}

// Desafio 6
function highestCount(sequencia) {
  let qtd = 0;
  let maior = 0;
  for (let index = 0; index < sequencia.length; index += 1) {
    if (sequencia[index] > maior) {
      qtd = 0;
      maior = sequencia[index];
    }
    if (sequencia[index] === maior) {
      qtd += 1;
    }
  }
  return qtd;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let mouseDistanceCat1 = Math.abs(mouse - cat1);
  let mouseDistanceCat2 = Math.abs(mouse - cat2);
  if (mouseDistanceCat1 < mouseDistanceCat2) {
    return 'cat1';
  } if (mouseDistanceCat2 < mouseDistanceCat1) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(sequencia) {
  let output;
  for (let index = 0; index < sequencia.length; index += 1) {
    switch (sequencia[index]) {
    case sequencia[index] % 15 === 0:
      output.push('FizzBuzz');
      break;
    case sequencia[index] % 3 === 0:
      output.push('fizz');
      break;
    case sequencia[index] % 5 === 0:
      output.push('buzz');
      break;
    default:
      output.push('bug!');
      break;
    }
  }
  return output;
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
