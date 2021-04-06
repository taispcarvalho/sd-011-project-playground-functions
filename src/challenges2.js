// Desafio 10
function techList(tecnologias, nome) {
  let techs = [];
  if (tecnologias.length === 0) {
    return 'Vazio!';
  }
  for (let index in tecnologias.sort()) {
    if ({}.hasOwnProperty.call(tecnologias, index)) { // da uma propriedade propria pro for in, pra nao ter resultados inesperados.
      techs[index] = {
        tech: tecnologias[index],
        name: nome,
      };
    }
  }
  return techs;
}

// Desafio 11
function calculaRepeticoes(numeros, number) {
  let repeticoes = 0;
  for (let index = 0; index < numeros.length; index += 1) {
    if (number === numeros[index]) {
      repeticoes += 1;
    }
  }
  return repeticoes;
}

function verificaNumeros(numeros) {
  for (let index = 0; index < numeros.length; index += 1) {
    let moto = numeros[index];
    if (moto > 9 || moto < 0 || calculaRepeticoes(numeros, moto) > 2) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
}

function generatePhoneNumber(numeros) {
  let func = verificaNumeros(numeros);
  if (numeros.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  if (func) {
    return func;
  }
  let strNumber = '';
  let ordenedNumbers = /(\d{2})(\d{5})(\d{4})/;
  for (let index = 0; index < numeros.length; index += 1) {
    strNumber += numeros[index];
    strNumber = strNumber.replace(ordenedNumbers, '($1) $2-$3');
  }
  return strNumber;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {\
  let resultado = false;
  let somaDasMedidas = Math.abs(lineB + lineC);
  let diferenca = Math.abs(lineB - lineC);
  if (lineA > diferenca && lineA < somaDasMedidas) {
    resultado = true;
  }
  return resultado;
}

// Desafio 13
function hydrate() {
  
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
