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
function generatePhoneNumber(arr) {
  if (arr.length < 11) {
    return 'Array com tamanho incorreto.';
  }
  if (arr.filter(num0A9).length !== 11 || repeatNum(arr)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  return `(${arr[0]}${arr[1]}) ${arr[2]}${arr[3]}${arr[4]}${arr[5]}${arr[6]}-${arr[7]}${arr[8]}${arr[9]}${arr[10]}`;
}

console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));

function repeatNum(arr) {
  //  arrOrdenada ordena todos os números de arr de forma crescente.
  let arrOrdenada = arr.sort();
  //  loop para verificar se o indice 0 é igual ao indice 1 e 2, caso for retornará falso, já que o array está ordenado de forma crescente, e se o indice 0 for igual ao indice 1 e 2 significa que o numero apareceu 3 vezes.
  for (let i = 0; i < arr.length; i += 1) {
    if (
      arrOrdenada[i] === arrOrdenada[i + 1] &&
      arrOrdenada[i] === arrOrdenada[i + 2]
    )
      return true;
  }
  return false;
}

//função abaixo verifica se o número igual ou maior a 0 e menor que 10, 0 à 9.
function num0A9(arr) {
  return arr >= 0 && arr < 10;
}

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
//  utilizado metodo replace com os parametros /\D/gi, onde o g === global acha todas as letras em vez de parar ao achar a primera, o i ignora maiusculas e minusculas o /\D/ procurara por todos os caracteres que sao letras, explicando mais claramente agora o /\D/gi procura todas as letras na string nao importa se estao maiusculas ou minusculas e troca ela por '' === remove ela, ou seja no final so restará os numeros da string.
//  segue o link: https://www.w3schools.com/jsref/jsref_regexp_digit_non.asp
function hydrate(a) {
  let replaced = a.replace(/\D/gi, '');
  let numbers = 0;
  for (let i = 0; i < replaced.length; i += 1) {
    numbers += Number(replaced[i]);
  }
  return numbers === 1 ? '1 copo de água' : `${numbers} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
