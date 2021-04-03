// Desafio 10
function techList(techToLearn, myName) {
  if (techToLearn.length === 0) {
    return 'Vazio!';
  }
  let listOfTechToLearn = [];
  let techToLearnSorted = techToLearn.sort();
  for (let index = 0; index < techToLearn.length; index += 1) {
    let newObject = { tech: techToLearnSorted[index], name: myName };
    listOfTechToLearn.push(newObject);
  }
  return listOfTechToLearn;
}
// Desafio 11
function checkIsElevenNumbers(GrossPhone) {
  return (GrossPhone.length === 11);
}
function checkOutsideRange(GrossPhone) {
  let checker = true;
  for (let index = 0; index < 11; index += 1) {
    if (GrossPhone[index] > 9 || GrossPhone < 0) {
      checker = false;
      break;
    }
  }
  return checker;
}
function countRepetitions(GrossPhone, index) {
  let repetions = 0;
  for (let checking = 0; checking < 11; checking += 1) {
    if (GrossPhone[index] === GrossPhone[checking]) {
      repetions += 1;
    }
  }
  if ((repetions) >= 3) {
    return false;
  }
}
function checkRepetitions(GrossPhone) {
  let checker = true;
  for (let index = 0; index < 11; index += 1) {
    checker = countRepetitions(GrossPhone, index);
    if (checker === false) {
      break;
    }
    if (checker === undefined) {
      checker = true;
    }
  }
  return checker;
}
function checkIfNumberIsValid(GrossPhone) {
  if (checkIsElevenNumbers(GrossPhone) === false) {
    return 'Array com tamanho incorreto.';
  } if (checkRepetitions(GrossPhone) === false || checkOutsideRange(GrossPhone) === false) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  return true;
}
function fillTheNumber(GrossPhone) {
  let phoneNumber = ['('];
  for (let index = 0; index < 2; index += 1) {
    phoneNumber.push(GrossPhone[index]);
  }
  phoneNumber.push(')');
  for (let index = 2; index < 7; index += 1) {
    phoneNumber.push(GrossPhone[index]);
  }
  phoneNumber.push('-');
  for (let index = 7; index < 11; index += 1) {
    phoneNumber.push(GrossPhone[index]);
  }
  return console.log(phoneNumber.join(''));
}
function generatePhoneNumber(GrossPhone) {
  if (checkIfNumberIsValid(GrossPhone) === true) {
    fillTheNumber(GrossPhone);
  } else {
    return checkIfNumberIsValid(GrossPhone);
  }
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
