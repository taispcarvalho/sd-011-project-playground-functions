// Desafio 1
function compareTrue(value1, value2) {
  return value1 && value2;
  // Oliva ajudou a turma fazendo esse desafio.
  // seu código aqui
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
  // seu código aqui
}
// Para o desafio 2 eu obtive ajuda no Stack Overflow.
/** Source: https://pt.stackoverflow.com/questions/399963/iniciante-em-javascipt */

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
  // seu código aqui
}
// Para o desafio 3 eu obitive ajuda usando o Devmidia.
/** Source https://www.devmedia.com.br/javascript-split-dividindo-separando-strings/39254 */

// Desafio 4
function concatName(array) {
  return `${array[array.length - 1]}, ${array[0]}`;
  // seu código aqui
}
// Para o desafio 4, a instrutora Caról, Me ajudou a compreender tamplate string.

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
  // seu código aqui
}

// Desafio 6
function highestCount(number) {
  let maxNumber = Math.max.apply(null, number);
  let repeatNumber = 0;
  for (let index = 0; index < number.length; index += 1) {
    if (number[index] === maxNumber) {
      repeatNumber += 1;
    }
  }
  return repeatNumber;
  // seu código aqui
}
// Para o desafio 6 obtive ajuda para a resolução atravez do developer mozilla.
/** Source: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/max */

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distance1 = Math.abs(mouse - cat1);
  let distance2 = Math.abs(mouse - cat2);

  if (distance1 < distance2) {
    return ('cat1');
  }
  if (distance1 > distance2) {
    return ('cat2');
  }
  return ('os gatos trombam e o rato foge');
  // seu código aqui
}
console.log(catAndMouse(12, 3, 2));
// Vitor Cardozo, Tales Coelho e Marlon Ramos [Todos da Turma 11] me ajudaram a resolver.
/** Source: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/abs */

// Desafio 8
function fizzBuzz(array) {
  let retorno = [];
  for (let index = 0; index < array.length; index += 1) {
    let verifica3 = array[index] % 3 === 0;
    let verifiva5 = array[index] % 5 === 0;
    retorno[index] = 'bug!';
    if (array[index] % 15 === 0) {
      retorno[index] = 'fizzBuzz';
    } else if (verifica3) {
      retorno[index] = 'fizz';
    } else if (verifiva5) {
      retorno[index] = 'buzz';
    }
  }
  return retorno;
}
// Igor Mendes me ajudou a tirar a complexidade da questão 8.

console.log(fizzBuzz([2, 15, 7, 9, 45]));
// Igor Mendes [Turma 11], ajudou a tirar a complexidade dessa função.
// Tales Coelho, Marlon Ramos, Vitor Cardozo, Rodolfo Ramos, Igor Mendes e Natali Lima me ajudaram a resolver/ endetender a questão
// Desafio 9
function encode(array) {
  for (let index = 0; index < array.length; index += 1) {
    array = array.replace('a', '1');
    array = array.replace('e', '2');
    array = array.replace('i', '3');
    array = array.replace('o', '4');
    array = array.replace('u', '5');
  }
  return array;
}

function decode(array) {
  for (let index = 0; index < array.length; index += 1) {
    array = array.replace('1', 'a');
    array = array.replace('2', 'e');
    array = array.replace('3', 'i');
    array = array.replace('4', 'o');
    array = array.replace('5', 'u');
  }
  return array;
  // seu código aqui
}
// Tales Coelho, Marlon Ramos, Vitor Cardozo, Iselen Igor Mendes e Natali Lima [Todos turma 11] me ajudaram a entender.

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
