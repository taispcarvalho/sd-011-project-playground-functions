// Desafio 10
function techList(anyArray, anyName) {
  if (anyArray.length === 0) {
    return 'Vazio!';
  }
  let sortedTechs = anyArray.sort();
  let techListArray = [];
  for (let techs of sortedTechs) {
    techListArray.push({
      tech: techs,
      name: anyName,
    });
  }
  return techListArray;
}

// Desafio 11
function checkIf11Numbers(array) {
  return array.length === 11;
}

function checkIfFollowTheRules(array) {
  for (let index = 0; index < array.length; index += 1) {
    let count = 0;
    for (let number of array) {
      if (array[index] === number) {
        count += 1;
      }
    }
    return count < 3 && array[index] < 9 && array[index] > 0;
  }
}

function generatePhoneNumber(array) {
  let formatedPhoneNumber = '';
  if (checkIfFollowTheRules(array) && checkIf11Numbers(array)) {
    for (let index = 0; index < array.length; index += 1) {
      if (index === 0) {
        formatedPhoneNumber += '(';
      } else if (index === 2) {
        formatedPhoneNumber += ') ';
      } else if (index === 7) {
        formatedPhoneNumber += '-';
      }
      formatedPhoneNumber += array[index];
    }
  } else if (checkIf11Numbers(array) === false) {
    formatedPhoneNumber = 'Array com tamanho incorreto.';
  } else {
    formatedPhoneNumber = 'não é possível gerar um número de telefone com esses valores';
  }
  return formatedPhoneNumber;
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
