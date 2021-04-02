function numeroZeroNove(array) {
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] < 0 || array[index] > 9) {
      return false;
    }
  }
  return true;
}
function repeticaoNumero(array) {
  let contador = 0;
  for (let index = 0; index < array.length; index += 1) {
    for (let indexCont = 0; indexCont < array.length; indexCont += 1) {
      if (array[indexCont] === array[index]) {
        contador += 1;
      }
    }
    if (contador >= 3) {
      return false;
    }contador = 0;
  }
  return true;
}
function generatePhoneNumber(array) {
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  if (!numeroZeroNove(array) || !repeticaoNumero(array)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  if (array.length === 11) {
    let primeiraParte = `(${array[0]}${array[1]}) ${array[2]}${array[3]}`;
    let segundaParte = `${array[4]}${array[5]}${array[6]} - ${array[7]}`;
    let ultimaParte = `${array[8]}${array[9]}${array[10]}`;
    return (primeiraParte + segundaParte + ultimaParte);
  }
  return generatePhoneNumber(array);
}
//Se tamanho do array 0 ou maior que 11 funciona
//Arrumar contador de repetição e se o numero dentro do array é maior que 9

let arr = [1, 2, 3, 1, 5, 12, 7, 8, 9, 2, 3];
console.log(generatePhoneNumber(arr));