// Desafio 1
function compareTrue(number, number2) {
  return number && number2 === true;
}
console.log(compareTrue(false));

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}
console.log(calcArea(5, 2));

// Desafio 3
function splitSentence(nome) {
  let frase = nome.split(' ');
  return frase;
}
console.log(splitSentence('foguete'));

// Desafio 4
function concatName(nome) {  
  let last = nome[nome.length-1];
  let first = nome[0];
  let lastfirst = (last + ', ' +  first);
  return(lastfirst);
}
console.log(concatName(['alberto','silva','candido']));

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3 + ties * 1);
}
console.log(footballPoints(1, 2));

// Desafio 6
function highestCount(valor) {
  let contador = 0;
  let maior = 0;
  for (let index = 0; index < valor.length; index++) {
    if (valor[index] > maior) {
      maior = valor[index];
    }
  }
  for (let i = 0; i < valor.length; i++) {
    if (valor[i] === maior) {
      contador +=1;
    }       
  }
  return contador;
}
console.log(highestCount([9,5,10,4,20,40,2,40,7,40]));


function catAndMouse(mouse, cat1, cat2) {  
  let distanciagato1 = Math.abs(cat1 - mouse)
  let distanciagato2 = Math.abs(cat2 - mouse)
    if (distanciagato1 < distanciagato2) {
      return 'cat1';
  } else if (distanciagato2 < distanciagato1) {
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}
console.log(catAndMouse(0, 7, 6));
// Desafio 8

function fizzBuzz(numeros) {
  let newarray = [] 
  for (let index = 0; index < numeros.length; index ++) {    
    if (numeros[index] % 3 === 0 && numeros[index] % 5 === 0) {
      newarray.push('fizzBuzz');
    }else if ((numeros[index] % 3) === 0 ) {
      newarray.push('fizz');
    }else if ((numeros[index] % 5) === 0 ) {
      newarray.push('buzz');
    }else if ((numeros[index] % 5) != 0 && ((numeros[index] % 5) != 0)) {
      newarray.push('bug!');
    }
  }
  return newarray;
}
console.log(fizzBuzz([2, 15, 7, 9, 45]));

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < (lineB + lineC) && lineB < (lineA+lineB) && lineC < (lineA+lineB)) {
    return true;
  } else {
  }
  return false;
}
console.log(triangleCheck(10,14,8 ));

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  highestCount,
  fizzBuzz,
  footballPoints,
  splitSentence,
  triangleCheck,
};