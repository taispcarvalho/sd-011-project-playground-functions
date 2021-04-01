// Desafio 1
function compareTrue(parm1, parm2) {
  return parm1 && parm2;
}

// Desafio 2
function calcArea(base, altura) {
  return (base * altura) / 2;
}

// Desafio 3
function splitSentence(frase) {
  return frase.split(' ');
}

// Desafio 4
function concatName(strArr) {
  return (strArr[strArr.length - 1] + ', ' + strArr[0]);
}

// Desafio 5
function footballPoints(wins, ties) {
  return ((wins * 3) + (ties * 1));
}

// Desafio 6
function highestCount(numbers) {
  let maior = 0;
  let contador = 0;
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] > maior) {
      maior = numbers[i];
    }
  }
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] === maior) {
      contador += 1;
    }
  }
  return (contador);
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaCat1 = Math.abs(cat1 - mouse);
  let distanciaCat2 = Math.abs(cat2 - mouse);
  if (distanciaCat1 < distanciaCat2) {
    return 'cat1';
  } if (distanciaCat2 < distanciaCat1) {
    return 'cat2';
  } if (distanciaCat1 === distanciaCat2) {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(numerosDesafio8) {
  let conteudoArray = [];
  for (let i = 0; i < numerosDesafio8.length; i += 1) {
    if (numerosDesafio8[i] % 3 === 0 && numerosDesafio8[i] % 5 === 0) {
      conteudoArray.push('fizzBuzz');
    } else if (numerosDesafio8[i] % 3 === 0) {
      conteudoArray.push('fizz');
    } else if (numerosDesafio8[i] % 5 === 0) {
      conteudoArray.push('buzz');
    } else {
      conteudoArray.push('bug!');
    }
  }
  return conteudoArray;
}

// Desafio 9
function encode(stringEncode) {
  let codigo = [];
  for (let i = 0; i < stringEncode.length; i += 1) {
    if (stringEncode[i] === 'a') {
      codigo.push('1');
    } else if (stringEncode[i] === 'e') {
      codigo.push('2');
    } else if (stringEncode[i] === 'i') {
      codigo.push('3');
    } else if (stringEncode[i] === 'o') {
      codigo.push('4');
    } else if (stringEncode[i] === 'u') {
      codigo.push('5');
    } else {
      codigo.push(stringEncode[i]);
    }
  }
  return codigo.join('');
}

function decode(stringDecode) {
  let codifica = [];
  for (let i = 0; i < stringDecode.length; i += 1) {
    if (stringDecode[i] === '1') {
      codifica.push('a');
    } else if (stringDecode[i] === '2') {
      codifica.push('e');
    } else if (stringDecode[i] === '3') {
      codifica.push('i');
    } else if (stringDecode[i] === '4') {
      codifica.push('o');
    } else if (stringDecode[i] === '5') {
      codifica.push('u');
    } else {
      codifica.push(stringDecode[i]);
    }
  }
  return codifica.join('');
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
