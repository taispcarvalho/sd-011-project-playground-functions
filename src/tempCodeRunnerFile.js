function generatePhoneNumber(array) {
let resultado = '';
let numeroRepetido = [];
  if(array.length !== 11) {
    resultado =  ('Array com tamanho incorreto.')
  }
  for (let numeroZero of array) {
    if (numeroZero < 0) {
    resultado = ('não é possível gerar um número de telefone com esses valores');
    }
  }
  for (let numeroNove of array) {
    if (numeroNove > 9) {
    resultado = ('não é possível gerar um número de telefone com esses valores');
    }
  }
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
  return generatePhoneNumber(resultado);
}

function numeroTelefone(array) {
let numeroDeTelefone = generatePhoneNumber(array);
let primeirosNumero = ('(' + array[0] + array[1] + ') ');
let numeroMeio = (array[2]+ array[3]+ array[4]+ array[5]+ array[6] + ' - ');
let ultimoNumero = (array[7]+ array[8]+ array[9]+ array[10]+ array[11]);
let numeroTotal = primeirosNumero + numeroMeio + ultimoNumero;
  
  return numeroTelefone(numeroTotal);
}