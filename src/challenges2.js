// Desafio 10
//  .sort() ordena os elementos, link sobre o metodo sort utilizado para este exercicio: https://www.w3schools.com/jsref/jsref_sort.asp
function techList(arr, nome) {
  if (arr.length === 0) {
    return 'Vazio!';
  }
  let arrayOrdenada = arr.sort();
  let obj = [];
  for (let i = 0; i < arr.length; i += 1) {
    obj[i] = {
      tech: arrayOrdenada[i],
      name: nome,
    };
  }
  return obj;
}

// Desafio 11
function generatePhoneNumber() {}

// Desafio 12
function triangleCheck(a, b, c) {
  let param = [a, b, c, a, b];
  for (let i = 0; i < 3; i += 1) {
    if (
      param[i] < param[i + 1] + param[i + 2] &&
      param[i] > Math.abs(param[i + 1] - param[i + 2])
    ) {
      return true;
    }
  }
  return false;
}

// Desafio 13
//  utilizado metodo replace com os parametros /\D/gim, onde o g acha todas as letras em vez de parar ao achar a primera, o i ignora maiusculas e minusculas o /\D/ procurara por todos os caracteres que sao letras, explicando mais claramente agora o /\D/gi procura todas as letras na string nao importa se estao maiusculas ou minusculas e troca ela por '', ou seja no final so restará os numeros da string.
//  segue o link: https://www.w3schools.com/jsref/jsref_regexp_digit_non.asp
function hydrate(a) {
  let replaced = a.replace(/\D/gi, '');
  let numbers = 0;
  for (let i = 0; i < replaced.length; i += 1) {
    numbers += Number(replaced[i]);
  }
  if (numbers === 1) {
    return `1 copo de água`;
  }
  return `${numbers} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
