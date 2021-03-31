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


function checkIfFollowTheRules(array) {
  for (let index in array) {
    let count = 0;
    for (let number of array) {
      if (array[index] === number) {
        count += 1;
      }
    }
    return count < 3 && array[index] < 9 && array[index] > 0 && array.length === 11
  }
}

function generatePhoneNumber(array) {  
  let formatedPhoneNumber = '';
  if (checkIfFollowTheRules()) {
    for (let index = 0; index < array.length; index += 1) {
      if (index === 0) {
        formatedPhoneNumber += '(';
      } else if (index === 2) {
        formatedPhoneNumber += ')';
      } else if (index === 7) {
        formatedPhoneNumber += '-';
      }
      formatedPhoneNumber += array[index];
    }
  } else {
    formatedPhoneNumber = "não é possível gerar um número de telefone com esses valores";
  }
  return formatedPhoneNumber;
}

let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]
console.log(generatePhoneNumber(myArray)); 

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
