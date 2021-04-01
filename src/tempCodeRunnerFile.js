function generatePhoneNumber(array) {
  let resultado = '';
  let index = 0;
  let numero = array[index];
  let numeroRepetido = [];
  if (array.length !== 11) {
    resultado = ('Array com tamanho incorreto.');
  } else if (numero < 0 || numero > 9)
    resultado = ('não é possível gerar um número de telefone com esses valores');
  for (let index of array) {
    for (let indexNumeroRepetido of array) {
      if (indexNumeroRepetido === index) {
        numeroRepetido[index] = (numeroRepetido[index] || 0) + 1;0
      } if (numeroRepetido[index] >= 3) {
      resultado = ('não é possível gerar um número de telefone com esses valores');
      }
    }
  }
  return generatePhoneNumber(resultado);
}
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2];
console.log(generatePhoneNumber(array));