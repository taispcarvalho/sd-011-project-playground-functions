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
  return (array.length === 11); 
}

function checkRepeatdNumbers(array) {
  /// cria uma cópia da array reordenada, e não altera a array oiriginal
  let sortedNumbers = [...array].sort();
  let count = 0;
  for (let index = 0; index < array.length - 1; index += 1) {
    if (array[index] === array[index+1]) {
      count += 1;
      if (count >= 2) {
        return false;
      }
    } else {
      count = 0;
    }
  }  
  return true;
}

function checkIfBetween0to9(array) {
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > 9 || array[index] < 0) {
      return false;
    }
  }
  return true;
}

function generatePhoneNumber(array) {
  let formatedPhoneNumber = '';
  if (checkRepeatdNumbers(array) && checkIf11Numbers(array) && checkIfBetween0to9(array)) {
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
  } else if (checkIfBetween0to9(array) || checkRepeatdNumbers(array)){
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
