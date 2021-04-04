// Desafio 10
function techList(techList, name) {
  let newTechList = [];

  if (techList.length > 0) {
    for (let index = 0; index < techList.length; index += 1) {
      newTechList[index] = {};
      newTechList[index].tech = techList[index];
      newTechList[index].name = name;
    }
    newTechList = newTechList.sort((a, b) => (a.tech > b.tech) ? 1 : -1);
    return newTechList;
  } else {
    return 'Vazio!';
  }
}

console.log(techList([], 'Lucas'));

// Desafio 11
function phoneNumberSize(numberArray) {
  if (numberArray.length !== 11) {
    return true;
  }
}

function phoneNumberRange(numberArray) {
  for (let index = 0; index < numberArray.length; index += 1) {
    if (numberArray[index] < 0 || numberArray[index] > 9 ) {
      return true;
    }
  }
}

function phoneNumberRepetition(numberArray) {
  for (let number = 0; number < numberArray.length; number += 1) {
    let numberTimes = 0;
    for (let index = 0; index < numberArray.length; index += 1) {
      if (numberArray[number] === numberArray[index]) {
        numberTimes += 1;
        if (numberTimes >= 3) {
          return true;
        }
      }
    }
  }
}

function generatePhoneNumber(numbers) {
  if (phoneNumberSize(numbers) === true) {
    return 'Array com tamanho incorreto.';
  } else if (phoneNumberRange(numbers) === true || phoneNumberRepetition(numbers) === true) {
    return 'não é possível gerar um número de telefone com esses valores';
  } else {
    let phoneNumber = `(${numbers[0]}${numbers[1]}) ${numbers[2]}${numbers[3]}${numbers[4]}${numbers[5]}${numbers[6]} - ${numbers[7]}${numbers[8]}${numbers[9]}${numbers[10]}`;
    return phoneNumber;
  }
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
