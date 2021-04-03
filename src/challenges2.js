// Desafio 10
function techList() {
  // seu código aqui
}

// Desafio 11
function generatePhoneNumber(telefone) {
  let n = [];
  let index = 0;

    if (telefone[index] >= 0) {
    n.push(('(' + telefone[0] + telefone[1] + ') ' + telefone[2] + telefone[3] + telefone[4] + telefone[5] +  telefone[6] + '-' + telefone[7] + telefone[8] + telefone[9] + telefone[10]));
    } 
    if (telefone.length > 10) {
        console.log ('Array com tamanho incorreto.');
    }
    for (index in telefone){
      if (telefone[index] < 0 || telefone[index] > 9) {
        console.log ('Não é possível gerar um número de telefone com esses valores.')
      }
    }
  return n.join('');
}

console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 5, 8]));
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, -3, 8]));

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
