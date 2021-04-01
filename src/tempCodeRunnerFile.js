function generatePhoneNumber(array) {
  let resultado = '';
  if (array.length !== 11) {
    resultado = ('Array com tamanho incorreto.');
  }
  return resultado;
}

function numeroZero(array) {
  let resultado = '';
  generatePhoneNumber(array);
  for (let numero0 of array) {
    if (numero0 < 0) {
      resultado = ('não é possível gerar um número de telefone com esses valores');
    }
  }
  return numeroZero(resultado);
}

function numeroNove(array) {
  let resultado = '';
  generatePhoneNumber(array);
  for (let numero9 of array) {
    if (numero9 > 9) {
      resultado = ('não é possível gerar um número de telefone com esses valores');
    }
  }
  return numeroNove(resultadoNove);
}

function maiorValor(array) {
  generatePhoneNumber(array);
  let numeroRepetido = [];
  let resultado = '';
  for (let index of array) {
    for (let indexNumeroRepetido of array) {
      if (indexNumeroRepetido === index) {
        numeroRepetido [index] = (numeroRepetido[index] || 0) + 1;
      }
    }
    if (numeroRepetido[index] >= 3) {
      resultado = ('não é possível gerar um número de telefone com esses valores');
    }
  }
  return maiorValor(resultado);
}

function numeroTelefone(array) {
  generatePhoneNumber(array);
  let resultadoPrimeirosNumeros = numeroTelefone('(' + array[0] + array[1] + ')');
  let resultadoNumerosMeio = numeroTelefone(+ array[2] + array[3] + array[4]+ array[5]+ array[6] + ' - ');
  let resultadoUltimosNumeros = numeroTelefone(array[7]+ array[8]+ array[9]+ array[10]+ array[11]);

  return numeroTelefone(resultadoPrimeirosNumeros + resultadoNumerosMeio + resultadoUltimosNumeros);
}
  console.log(generatePhoneNumber([[3, 2, 6, 5, 8, 9, 7, 8, 9, 0, 3]]));