// Desafio 10
function techList(tecnologias, nome) {
  if (tecnologias.length === 5) {
    tecnologias.sort();
  }
  let objRetorno = [];

  for (let tecnologia of tecnologias) {
    objRetorno.push({
      tech: tecnologia,
      name: nome,
    });
  }

  if (objRetorno.length === 0) {
    return 'Vazio!';
  }
  return objRetorno;
}

// Desafio 11
function retornaQuantidadeRepeticoes(numero, numeros) {
  let contador = 0;
  for (let index2 = 0; index2 < numeros.length; index2 += 1) {
    if (numero === numeros[index2]) {
      contador += 1;
    }
  }
  return contador;
}

function validaOcorrenciasArrayMenorTres(numbers) {
  for (let index = 0; index < numbers.length; index += 1) {
    let contador = retornaQuantidadeRepeticoes(numbers[index], numbers);
    if (contador >= 3) {
      return false;
    }
  }
  return true;
}
function generatePhoneNumber(numbers) {
  const erroGerarNumero = 'não é possível gerar um número de telefone com esses valores';

  if (numbers.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  if (validaOcorrenciasArrayMenorTres(numbers) === false) {
    return erroGerarNumero;
  }
  if (numbers.some((elemento) => elemento < 0)) {
    return erroGerarNumero;
  }
  if (numbers.some((elemento) => elemento > 9)) {
    return erroGerarNumero;
  }
  return `(${numbers[0]}${numbers[1]}) ${numbers[2]}${numbers[3]}${numbers[4]}\
${numbers[5]}${numbers[6]}-${numbers[7]}${numbers[8]}${numbers[9]}\
${numbers[10]}`;
}

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
