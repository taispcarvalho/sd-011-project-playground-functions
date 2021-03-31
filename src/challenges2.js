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
      name: anyName;
    })
  }
  return techListArray;
}
console.log(techList());

// Desafio 11
function generatePhoneNumber(array) {
  
  function checkIfFollowTheRules() {
    if (array.length !== 11) {
      return false;
    } else {
      for (let index in array) {
      let count = 0;
        for (let number of array) {
          if (array[index] == number) {
            count += 1;
            if(count > 2 || array[index] > 9 || array[index] < 0) {
              return false;
            }
          }
        }
      }
      return true;
    }
  }
if (checkIfFollowTheRules()) {
  let formatedPhoneNumber = '';
  for (let index = 0; index < array.length; index += 1) {
    if (index == 0) {
      formatedPhoneNumber += '(';
      formatedPhoneNumber += array[index];
    } else if (index == 2) {
      formatedPhoneNumber += ')';
      formatedPhoneNumber += array[index];
    } else if (index == 6) {
      formatedPhoneNumber += '-';
      formatedPhoneNumber += array[index];
    } else {
      formatedPhoneNumber += array[index];
    }
  }
  return formatedPhoneNumber;
  } else {
  return "não é possível gerar um número de telefone com esses valores";
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
