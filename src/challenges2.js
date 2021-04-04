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
  if (arr.length !== 11) {
    return 'Array com tamanho incorreto.';
  } else if (num0A9(arr) || numbersRepeat(arr)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  return returnNum(arr);
}

console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));

function returnNum(arr) {
  let ddd = `${arr[0]}${arr[1]}`;
  let firstNumber = `${arr[2]}${arr[3]}${arr[4]}${arr[5]}${arr[6]}`;
  let secondNumber = `${arr[7]}${arr[8]}${arr[9]}${arr[10]}`;
  return `(${ddd}) ${firstNumber}-${secondNumber}`;
}

function num0A9(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] < 0 || arr[i] > 9) {
      return true;
    }
  }
  return false;
}

function numbersRepeat(arr) {
  let sorted = [...arr].sort();
  for (let i = 0; i < sorted.length; i += 1) {
    if (sorted[i] === sorted[i + 1] && sorted[i] === sorted[i + 2]) {
      return true;
    }
  }
  return false;
}
// Desafio 12
function triangleCheck(a, b, c) {
  let param = [a, b, c, a, b];
  for (let i = 0; i < 5; i += 1) {
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
