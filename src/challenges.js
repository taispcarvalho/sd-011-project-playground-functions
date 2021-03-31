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
  let distanciaCat1 = cat1 - mouse;
  let distanciaCat2 = cat2 - mouse;
  if (distanciaCat1 < distanciaCat2) {
    return 'cat1';
  } if (distanciaCat2 < distanciaCat1) {
    return 'cat2';
  } else if (distanciaCat1 === distanciaCat2) {
    return 'Os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(numerosDesafio8) {
  let conteudoArray = [];
  for (let i = 0; i < numerosDesafio8.length; i += 1) {
    if (numerosDesafio8[i] % 3 === 0 && numerosDesafio8[i] % 5 === 0) {
      conteudoArray.push('fizzbuzz');
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
let string1 = "hi there!";
function encode(string1) {
  let codigo = [];
  for (let i = 0; i < string1.length; i += 1) {
    if (string1[i] === 'a') {
      codigo.push('1');
      console.log('teste')
    }
    else if (string1[i] === 'e') {
      codigo.push('2');
    } else if (string1[i] === 'i') {
      codigo.push('3');
    } else if (string1[i] === 'o') {
      codigo.push('4');
    } else if (string1[i] === 'u') {
      codigo.push('5');
    } else {
      codigo.push(string1[i]);
    }
  }
  console.log(codigo.join(''))
}
encode(string1);

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
