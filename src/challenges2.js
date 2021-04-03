// Desafio 10
function techList(array, name) {
  let output = [];
  let object = {};
  let vetor = array.sort();
  for (let n in vetor) {
    object = {
      tech: vetor[n],
      name,
    };
    output.push(object);
  }
  if (output.length === 0) {
    output = 'Vazio!';
  }
  return output;
}

// Desafio 11
function repeatNumber(number, array) {
  let counter = 0;
  for (let n in array) { // varre elementos e compara com o number
    if (array[n] === number) {
      counter += 1;
    }
  }
  return counter; // qtd de vezes que number foi encontrado no array
}

function testeCondicoes(array) {
  let ok = true;
  for (let i in array) {
    if (array[i] < 0 || array[i] > 9 || repeatNumber(array[i], array) >= 3) {
      ok = false;
    }
  }
  return ok;
}

function generatePhoneNumber(array) {
  let output = '';
  if (array.length !== 11) {
    output = 'Array com tamanho incorreto.';
  } else if (testeCondicoes(array) === false) {
    output = 'não é possível gerar um número de telefone com esses valores';
  } else {
    output = `(${array[0]}${array[1]}) ${array[2]}${array[3]}${array[4]}${array[5]}${array[6]}-${array[7]}${array[8]}${array[9]}${array[10]}`;
  }
  return output;
}

// Desafio 12

function testaLado(ladoTeste, lado1, lado2) {
  let ok = false;
  if (ladoTeste < lado1 + lado2 && ladoTeste > Math.abs(lado1 - lado2)) {
    ok = true;
  }
  return ok;
}

function triangleCheck(lineA, lineB, lineC) {
  let ok = false;
  if (testaLado(lineA, lineB, lineC) === true && testaLado(lineB, lineA, lineC) === true && testaLado(lineC, lineA, lineB) === true) {
    ok = true;
  }
  return ok;
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
