// Desafio 10
function techList(technology, name) {
  if (technology.length === 0) {
    return 'Vazio!';
  }

  let orderTech = technology.sort();
  let listTech = [];

  for (let currTecnology of orderTech) {
    listTech.push({
      tech: currTecnology,
      name: name,
    });
  }

  return listTech;
}

// Desafio 11
function () {
  
  
}

function generatePhoneNumber(arrayNumbers) {
  if (arrayNumbers.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  
  let phoneNumber = '';
  let orderArrayNumbers = arrayNumbers.sort((a,b) => a - b);
  console.log(orderArrayNumbers)

  for (let index = 0; index < arrayNumbers.length; index += 1) {
    if (arrayNumbers[index] < 0 || arrayNumbers[index] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }

    phoneNumber = `(${arrayNumbers.slice(0, 2).join('')}) ${arrayNumbers.slice(2, 7).join('')}-${arrayNumbers.slice(7).join('')}`;
  }
  return phoneNumber;
}
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]))
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
