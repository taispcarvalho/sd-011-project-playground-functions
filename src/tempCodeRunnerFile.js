function generatePhoneNumber(array) {
let resultado = '';
  if(array.length !== 11) {
  let resultado =  ('Array com tamanho incorreto.')
  }
  return resultado;
}

function numeroZero(array) {
let resultado = '';
generatePhoneNumber(array);
  for (let numeroZero of array) {
    if (numeroZero < 0) {
    resultado ('não é possível gerar um número de telefone com esses valores');
    }
  }
  return resultado;
}

function numeroNove(array) {
let resultado = ' ';
generatePhoneNumber(array);
  for (let numeroNove of array) {
    if (numeroNove > 9) {
    let resultado = ('não é possível gerar um número de telefone com esses valores');
    }
  }
  return resultado
}

function maiorValor(array) {
generatePhoneNumber(array);
let numeroRepetido = [];
for (let index of array) {
  for (let indexNumeroRepetido of array) {
    if (indexNumeroRepetido === index){
      numeroRepetido [index] = (numeroRepetido[index] || 0) + 1;
    }
  }
  if (numeroRepetido[index] >= 3) {
    let resultado = ('não é possível gerar um número de telefone com esses valores');
    }
  }
  return resultado
}

function numeroTelefone(array) {
generatePhoneNumber(array);
  return ('(' + array[0] + array[1] + ')' + array[2]+ array[3]+ array[4]+ array[5]+ array[6] + ' - '+ array[7]+ array[8]+ array[9]+ array[10]+ array[11]);
}
  console.log(generatePhoneNumber([[3, 2, 6, 5, 8, 9, 7, 8]]));