// Desafio 10
function techList(nameTech, nome) {
  let arrTechs = [];
  if (!nameTech) {
    return [];
  }
  for (let index = 0; index < nameTech.length; index += 1) {
    arrTechs.push({
      tech: nameTech[index], 
      name: nome
    })
  }
  return arrTechs
}


function checkNumberPhone (phoneNumber) {
  let repete = 0;
  if (phoneNumber.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let index in phoneNumber) {
    if (phoneNumber[index] < 0){
      return 'não é possível gerar um número de telefone com esses valores, seja menor que 0';
    }
    if (phoneNumber[index] > 9) {
      return 'não é possível gerar um número de telefone com esses valores, maior que 9';
    }
    repete = 0;
    for (let repeteIndex = 0; repeteIndex < phoneNumber.length; repeteIndex += 1) {
      if (phoneNumber[index] === phoneNumber[repeteIndex]) {
        repete += 1;
      }
      if (repete >= 3) {
        return 'não é possível gerar um número de telefone com esses valores, repete 3 vezes ou mais'
      }
    }
  }
}
// Desafio 11
function generatePhoneNumber(arrNumber) {
  if (checkNumberPhone(arrNumber)) {
    return checkNumberPhone(arrNumber);
  }
  let numberPhone = '(';
  for (let index = 0; index < arrNumber.length; index += 1) {
    if(numberPhone.length === 3) {
      numberPhone += ') ';
    }
    else if(numberPhone.length === 10) {
      numberPhone += '-';
    }
    numberPhone += arrNumber[index];
  }
  return numberPhone;
}
console.log(generatePhoneNumber([1, 2, 2, 4, 5, 6, 7, 8, 9, 0, 1],));


// Desafio 12
function triangleCheck() {
  
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
