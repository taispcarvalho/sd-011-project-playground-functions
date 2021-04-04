// Desafio 10
// Para resolver o problema de endentação.
/** Source:  https://eslint.org/docs/2.0.0/rules/guard-for-in */
function techList(array, myName) {
  let retorno = [];
  for (let index in array.sort()) {
    if ({}.hasOwnProperty.call(array, index)) {
      retorno[index] = {
        tech: array[index],
        name: myName,
      };
    }
  }
  if (retorno.length === 0) {
    return 'Vazio!';
  }
  return retorno;
  // seu código aqui
}

// Desafio 11
// Para ajuda nesse desafio, obtive ajuda do Marlon Ramos, ao qual me explicou como criar as funções auxiliares.
function repeatNumber(numbers, x) {
  let repetidos = 0;
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] === x) {
      repetidos += 1;
    }
  }

  return repetidos;
}

function numbereleven(number) {
  for (let index of number) {
    if (index < 0 || index > 9 || repeatNumber(number, index) > 2) {
      return false;
    }
  }
}
// Para resolução final obtive ajuda do Marlon e também do Regex
/** Soucer: https://medium.com/@alexandreservian/regex-um-guia-pratico-para-express%C3%B5es-regulares-1ac5fa4dd39f */
function generatePhoneNumber(numberPhone) {
  let arraynumber = '';
  let numbercell = '';
  let RegExp = /(\d{2})(\d{5})(\d{4})/;
  if (numberPhone.length !== 11) {
    arraynumber = `${'Array com tamanho incorreto.'}`;
  } else if (numbereleven(numberPhone) === false) {
    arraynumber = `${'não é possível gerar um número de telefone com esses valores'}`;
  } else {
    for (let index of numberPhone) {
      numbercell = numbercell.concat(index);
    }
    arraynumber = numbercell.replace(RegExp, '($1) $2-$3');
  }
  return arraynumber;
  // seu código aqui
}
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));

// Desafio 12
// Para completar o desafio, obtive ajuda do Igor Mendes e do Marlon Ramos e o Vitor Cardoso, Ambos da Turma 11;
function triangleCheck(lineA, lineB, lineC) {
  let angl1 = Math.abs(lineA + lineB);
  let angl2 = Math.abs(lineA - lineB);
  let value = false;

  if (lineC < angl1 && lineC > angl2) {
    value = true;
  }
  return value;
  // seu código aqui
}
console.log(triangleCheck(10, 14, 99));

// Desafio 13
// Para completar esse desafio eu obtive ajuda no Developer Mozilla.
/** Source: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Number */
/** Source: https://www.w3schools.com/jsref/jsref_regexp_digit.asp */

function hydrate(string) {
  string = string.replace(/\D/g, '');
  let numberBebidas = 0;
  for (let index = 0; index < string.length; index += 1) {
    numberBebidas += Number(string[index]);
  }
  if (numberBebidas === 1) {
    return `${numberBebidas} copo de água`;
  }
  return `${numberBebidas} copos de água`;
  // seu código aqui
}
console.log(hydrate('1 cachaça, -5 cervejas e 3 copo de vinho'));
module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
