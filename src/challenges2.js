// Desafio 10
function techList(nameTech, name) {
  let arrTechs = [];
  nameTech = nameTech.sort();
  if (!nameTech) {
    return [];
  }
  for (let index = 0; index < nameTech.length; index += 1) {
    arrTechs.push({
      tech: nameTech[index],
      name: name,
    });
  }
  return arrTechs;
}

function repeteNumber(num, arrNumber) {
  let repete = 0;
  for (let index = 0; index < arrNumber.length; index += 1) {
    if (num === arrNumber[index]) {
      repete += 1;
    }
    if (repete >= 3) {
      return true;
    }
  }
  return false;
}

function menor0Maior9(num) {
  return num < 0 || num > 9;
}

function checkNumberPhone(phoneNumber) {
  if (phoneNumber.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let index = 0; index < phoneNumber.length; index += 1) {
    if (menor0Maior9(phoneNumber[index]) || repeteNumber(phoneNumber[index], phoneNumber)) {
      return 'não é possível gerar um número de telefone com esses valores';
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
    if (numberPhone.length === 3) {
      numberPhone += ') ';
    } else if (numberPhone.length === 10) {
      numberPhone += '-';
    }
    numberPhone += arrNumber[index];
  }
  return numberPhone;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < lineB + lineC && lineA > Math.abs(lineB - lineC)) {
    return true;
  }
  return false;
}

// Desafio 13
function hydrate(str) {
  let total = 0;
  let agua = str.match(/\d+/g);
  for (let index = 0; index < agua.length; index += 1) {
    total += +agua[index];
  }
  if (total === 1) {
    total += ' copo de água';
  } else {
    total += ' copos de água';
  }
  return total;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
