// Desafio 1
function compareTrue(value1, value2) {
if (value1 === true && value2 === true){
  return true
}  else{
  return false
  }                                                                                                                                                                           
} //console.log( compareTrue(true,true))

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
} // console.log(calcArea(10, 50))

// Desafio 3
function splitSentence(frase) {
  return frase.split(' ');
} // console.log(splitSentence("go Trybe"))

// Desafio 4
function concatName(array) {
  return `${array[array.length - 1]}, ${array[0]}`;
} // console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']))

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
} // console.log(footballPoints(14,8))

// Desafio 6
function highestCount(arra) {
  let moreNumber = 0;
  let cont = 0;
  for (let index = 0; index < arra.length; index += 1) {
    if (arra[index] >= moreNumber) {
      moreNumber = arra[index];
      cont += 1;
    }
  }
  return cont;
} console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let run1 = Math.abs(mouse - cat1);
  let run2 = Math.abs(mouse - cat2);
  if (run2 > run1) {
    return 'cat1';
  } if (run1 > run2) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
} // console.log(catAndMouse(5, 3, 3))

// Desafio 8
function fizzBuzz(numero) {
  let resultado = []
  for (let chave in numero) {
    if ((numero[chave] % 3 === 0) && (numero[chave] % 5 ===0)) {
      resultado.push('fizzBuzz');
    } else if (numero[chave] % 3 === 0) {
      resultado.push('fizz');
    } else if (numero[chave] % 5 === 0) {
      resultado.push('buzz');
    } else {
      resultado.push('bug')
    }
  }
  return resultado
} // console.log(fizzBuzz([2, 15, 7, 9, 45]))

// Desafio 9
function encode(frase) {
  let novaFrase = '';
  for (let index in frase) {
    if (frase[index] === 'a') {
      novaFrase += '1';
    } else if (frase[index] === 'e') {
      novaFrase += '2';
    } else if (frase[index] === 'i') {
      novaFrase += '3';
    } else if (frase[index] === 'o') {
      novaFrase += '4';
    } else if (frase[index] === 'u') {
      novaFrase += '5';
    } else {
      novaFrase += frase[index];
    }
  }
  return novaFrase;
} console.log(encode('hi, there'))
function decode(frase) {
  let novaFrase = '';
  for (let index in frase) {
    if (frase[index] === '1') {
      novaFrase += 'a';
    } else if (frase[index] === '2') {
      novaFrase += 'e';
    } else if (frase[index] === '3') {
      novaFrase += 'i';
    } else if (frase[index] === '4') {
      novaFrase += 'o';
    } else if (frase[index] === '5') {
      novaFrase += 'u';
    } else {
      novaFrase += frase[index];
    }
  }
  return novaFrase;

} console.log(decode('h3,th2r2'))

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
