// Desafio 10
function techList(techNamesArr, nomeAluno) {
  if (techNamesArr.length === 0) {
    return 'Vazio!';
  }
  let techListArr = [];
  let sortedTechNamesArr = techNamesArr.sort();
  for (let techName of sortedTechNamesArr) {
    techListArr.push({
      tech: techName,
      name: nomeAluno,
    });
  }
  return techListArr;
}

// Desafio 11
function invalidDigit(arrayPhoneNumber) {
  for (let num of arrayPhoneNumber){
    if (num < 0 || num > 9){
      return false;
    }
  }
  return true;
}

function countRepeatedNumber(num,arrayPhoneNumber) {
  let counts = 0;
  for (let key in arrayPhoneNumber) {
    if (arrayPhoneNumber[key] === num) {
      counts += 1;
    }
  }
  return counts;
}

function hasThreeOrMoreRepeats(arrayPhoneNumber) {
  let count = 0;
  for (let num of arrayPhoneNumber) {
    let count = countRepeatedNumber(num, arrayPhoneNumber);
    if (count > 2) {
      return false;
    }
  }
  return true;
}
function generatePhoneString(arrayPhoneNumber) {
  if (typeof arrayPhoneNumber === 'string') {
    return arrayPhoneNumber;
  }

  let phoneNumberString = `(${arrayPhoneNumber[0]}${arrayPhoneNumber[1]}) `;

  for (let i = 2; i < 7; i += 1) {
    phoneNumberString += arrayPhoneNumber[i];
  }

  phoneNumberString += '-';

  for (let i = 7; i < 11; i += 1) {
    phoneNumberString += arrayPhoneNumber[i];
  }
  return phoneNumberString;
}

function generatePhoneNumber(arrayPhoneNumber) {
  if (arrayPhoneNumber.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  if (invalidDigit(arrayPhoneNumber) && hasThreeOrMoreRepeats(arrayPhoneNumber)) {
    return generatePhoneString(arrayPhoneNumber);
  }
  return 'não é possível gerar um número de telefone com esses valores.';
}

// Desafio 12
function triangleCheck(lineA, libeB, lineC) {
  let checkSideA = lineA < libeB + lineC && lineA > Math.abs(lineB - lineC);
  let checkSideB = lineB < lineA + lineC && lineB > Math.abs(lineA - lineC);
  let checkSideC = lineC < lineB + lineC && lineC > Math.abs(lineB - lineA);
  if (checkSideA === true && checkSideB === true && checkSideC === true ) {
    return true;
  }
  return false;
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
