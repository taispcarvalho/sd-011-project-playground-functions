// Desafio 10
function techList() {
  // seu código aqui
}

// Desafio 11
function generatePhoneNumber(arrayOfNumbers) {
  let telefone = [];

  for (let index in arrayOfNumbers){
    if (arrayOfNumbers[index] < 0 || arrayOfNumbers[index] > 9) {
      return 'Não é possível gerar um número de telefone com esses valores.'
    }
  }

  if (arrayOfNumbers.length === 11) {
    telefone.push ('(' + arrayOfNumbers[0] + arrayOfNumbers[1] + ') ' + arrayOfNumbers[2] + arrayOfNumbers[3] + arrayOfNumbers[4] + arrayOfNumbers[5] +  arrayOfNumbers[6] + '-' + arrayOfNumbers[7] + arrayOfNumbers[8] + arrayOfNumbers[9] + arrayOfNumbers[10]);
    return telefone;
  } 
  return 'Array com tamanho incorreto.'
}
  
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 8, 9, 0, 1]));
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 11, 7, 8, 9, 0, 1]));
  
    
  
  else if (arrayOfNumbers < 0 || arrayOfNumbers > 9) {
    return 'Não é possível gerar um número de telefone com esses valores.'

}
  
  for(let index in arrayOfNumbers){
    
  }
  return telefone;


    if (telefone[index] >= 0) {
    n.push(('(' + telefone[0] + telefone[1] + ') ' + telefone[2] + telefone[3] + telefone[4] + telefone[5] +  telefone[6] + '-' + telefone[7] + telefone[8] + telefone[9] + telefone[10]));
    } 
    if (telefone.length > 10) {
        console.log ('Array com tamanho incorreto.');
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
