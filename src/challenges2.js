// Desafio 10
function techList(tech, name) {
  let object = {};
  let array = [];

}

// Desafio 11
function generatePhoneNumber(numbers) {

  for (let index = 0; index < numbers.length; index += 1) {
    let contador = 0;
    for (let index = 0; index < numbers.length; index += 1) {
      if (numbers[index] = numbers[index]);
      contador += 1;
      if (contador >= 3) {
        return 'Não é possível gerar um número de telefone com esses valores';
      }
      if (numbers.length !== 11) {
          return 'Array com tamanho incorreto';
        } if (numbers.some((elemento) => elemento < 0)) {
          return 'Não é possível gerar um número de telefone com esses valores';
        } if (numbers.some((elemento) => elemento > 9)) {
          return 'Não é possível gerar um número de telefone com esses valores';
        }
          return `(${numbers[0]}${numbers[1]}) ${numbers[2]}${numbers[3]}${numbers[4]}${numbers[5]}${numbers[6]}-${numbers[7]}${numbers[8]}${numbers[9]}${numbers[10]}`;
      }
      return numbers;
    } 
  }
  console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  
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
