// Desafio 10
function techList() {
  // seu código aqui
}

// Desafio 11
function generatePhoneNumber(array) {
  if (array.length > 11) {
    return 'Array com tamanho incorreto.';
  }
  
  for (let index of array) {
    if (index < 0 || index > 9) {
      return 'não é possível gerar um número de telefone com esses valores.'
    } 
  }
  function repetition(array) {
    let counter = 0;
    for (let index2 of array) {
      for (let index3 of array) {
        if (index2 === index3) {
          counter += 1;
        }
      }
      if (counter >= 3) {
        return 'não é possível gerar um número de telefone com esses valores.'
      counter = 0;
      }
    }
  }
  function createPhoneNumber(array) {
    array.splice(0,0,'(');
    array.splice(3, 0, ')');
    array.splice(9, 0, '-');
    array.join('');
}
  return array; 
}
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA > lineB + lineC && lineA < Math.abs(lineB - lineC)) {
    return false;
  } return true;
}

// Desafio 13
function hydrate(string) {
  let parameter = /\d+/g;
  let list = string.match(parameter).map(Number);
  let soma = 0;
  for (let index of list) {
    soma += index;
  }
  if (soma === 1) {
    return '1 copo de água';
  } return soma + ' copos de água';
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
