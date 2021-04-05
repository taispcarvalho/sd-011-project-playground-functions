// Desafio 10
function techList(arrayValue, nome) {
  arrayValue = arrayValue.sort();
  let arrayOfObjects = [];
  if (arrayValue.length === 0) {
    return 'Vazio!';
  }
  for (let index = 0; index < arrayValue.length; index += 1) {
    let objectArray = {
      tech: arrayValue[index],
      name: nome,
    };
    arrayOfObjects.push(objectArray);
  }
  return arrayOfObjects;
}

// Desafio 11
function generatePhoneNumber(number) {
  if (number.length !== 11) {
    return 'Array com tamanho incorreto';
  }
  let repetNumber = 0;
  for (let index in number) {
    for (let index2 in number) {
      if (number[index2] === number[index]) {
        if (index2 === index) {
          break;
        } else if (index2 !== index) {
          repetNumber += 1;
        }
      }
    }
    if(number[index] < 0 || number[index] > 9 || repetNumber >= 5) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }

  return '(' + number[0] + number[1] + ') ' + number[2] + number[3] + 
  number[4] + number[5] + '-' + number[6] + number[7] + number[8] + number[9];
}

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
