function generatePhoneNumber(array) {
let resultado = '';
  if(array.length !== 11) {
  let resultado =  ('Array com tamanho incorreto.')
  }
  return resultado;
}

function numeroZero(array) {
let resultado = '';
let verificaZero = generatePhoneNumber(array);
  for (let numeroZero of array) {
    if (numeroZero < 0) {
    resultado ('não é possível gerar um número de telefone com esses valores');
    }
  }
  return resultado;
}

function numeroNove(array) {
let resultado = '';
let verificaNove = generatePhoneNumber(array);
  for (let numeroNove of array) {
    if (numeroNove > 9) {
    let resultado = ('não é possível gerar um número de telefone com esses valores');
    }
  }
  return resultado
}

function maiorValor(array) {
let newArray = generatePhoneNumber(array);
let numeroRepetido = [];
for (let index of newArray) {
  for (let indexNumeroRepetido of newArray) {
    if (indexNumeroRepetido === index){
      numeroRepetido [index] = (numeroRepetido[index] || 0) + 1;
    }
  }
  if (numeroRepetido[index] >= 3) {
    let resultado = ('não é possível gerar um número de telefone com esses valores');
    }
  }
}

function generatePhoneNumber(array) {
  return ('(' + array[0] + array[1] + ')' + array[2]+ array[3]+ array[4]+ array[5]+ array[6] + ' - '+ array[7]+ array[8]+ array[9]+ array[10]+ array[11]);
}
  console.log(generatePhoneNumber([2, 3, 2, 5, 8, 2, 3, 8, 9, 1, 9]));