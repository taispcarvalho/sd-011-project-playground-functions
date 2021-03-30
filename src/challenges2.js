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

// Desafio 11
function generatePhoneNumber(arrNumber) {
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

console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));


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
