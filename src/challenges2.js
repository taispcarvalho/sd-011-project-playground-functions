// Desafio 10 - ok
function techList(tech, name) {
  let nomesOrdenados = tech.sort();
  let novaLista = [];
  let objeto = {};
  if (tech.length <= 0) {
    return 'Vazio!';
  }
  for (let index = 0; index < tech.length; index += 1) {
    objeto = {
      tech: nomesOrdenados[index],
      name: `${name}`,
    };
    novaLista.push(objeto);
  }
  return novaLista;
}
console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Fernando'));

// Desafio 11
function generatePhoneNumber(array) {
  let telDdd = [];
  let tel1 = [];
  let tel2 = [];
  switch (true) {
  case array.length !== 11:
    return 'Array com tamanho incorreto.';
  case verificaNumero (array):
    return 'não é possível gerar um número de telefone com esses valores';
  default:
    for (let index = 0; index <= 1; index += 1) {
      telDdd.push(array[index]);
    }
    for (let index = 2; index <= 6; index += 1) {
      tel1.push(array[index]);
    }
    for (let index = 7; index <= 10; index += 1) {
      tel2.push(array[index]);
    }
    return `(${telDdd.join('')}) ${tel1.join('')}-${tel2.join('')}`; // As conversões em string de todos os elementos de um array são juntados em apenas uma string.
  }
}
function verificaNumero(array) { // verificando se o array seja menor que 0, maior que 9 ou se repita 3 vezes ou mais,
  let numeroErrado = false;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > 9 || array[index] < 0) {
      numeroErrado = true;
      return numeroErrado;
    }
    let numeroRepetido = 0;
    for (let index2 = index; index2 < array.length; index2 += 1) {
      if (array[index] === array[index2]) {
        numeroRepetido += 1;
        if (numeroRepetido >= 3) {
          numeroErrado = true;
          return numeroErrado;
        }
      }
    }
  }
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA + lineB <= lineC || lineA + lineC <= lineB || lineB + lineC <= lineA) {
    return 'false';
  }
  return 'true';
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
