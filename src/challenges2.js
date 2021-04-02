// Desafio 10
function techList(array, nome) {
  // Criação de variáveis para armazenar info
  let newArr = [];
  let objNew = {};
  // Checar se o array tem conteudo
  if (array.length === 0) {
    return 'Vazio!';
  }
  // Colocar em ordem alfabetica
  array = array.sort();
  // Criação do conteudo do objNew
  for (let i = 0; i < array.length; i += 1) {
    objNew = {
      tech: array[i],
      name: nome,
    };
    newArr.push(objNew);
  }
  return newArr;
}
console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Thyago'));
console.log(techList(['Python'], 'Thyago'));
console.log(techList([], 'Thyago'));

// Desafio 11

//Crie uma função chamada generatePhoneNumber que receba uma array com 11 números e retorne um número de telefone, respeitando parênteses, traços e espaços.

// Exemplo: caso o parâmetro da função seja [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1], generatePhoneNumber deverá retornar (12) 34567-8901.

// Se a função receber um array com tamanho diferente de 11, a mesma deve retornar "Array com tamanho incorreto.".

// Caso algum dos números da array seja menor que 0, maior que 9 ou se repita 3 vezes ou mais, generatePhoneNumber deverá retornar a string "não é possível gerar um número de telefone com esses valores".
function generatePhoneNumber(array) {
  let code = [];
  let first = [];
  let second = [];
  for (let i = 0; i < array.length; i += 1) {
    if (array.length !== 11) {
      return 'Array com tamanho incorreto.';
    }
    if (array[i] < 0 || array[i] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    if (i >= 0 && i < 2) {
      code += array[i];
    }
    if (i >= 2 && i < 7) {
      first += array[i];
    }
    if (i >= 7 && i <= 10) {
      second += array[i];
    }
  }
  let phone = '(' + code + ')' + first + '-' + second;
  return phone;
}
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 0]));
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, -1]));
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 11]));

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
