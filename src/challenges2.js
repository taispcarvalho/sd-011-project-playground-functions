// Desafio 10
function techList(array, name) {
  // seu código aqui
  if (array.length === 0) {
    return 'Vazio!';
  }

  array = array.sort();
  let objectsArray = [];
  let autor = name;
  for (let techCompany of array) {
    let object = {
      tech: techCompany,
      name: name,
    };
    objectsArray.push(object);
  }
  return objectsArray;
}

// Desafio 11
function arraySize(array) {
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
}

function checkNumbersUndersAndOvers(array) {
  for (n of array) {
    if (n < 0) {
      return 'não é possível gerar um número de telefone com esses valores'
    }
  }
  for (n of array) {
    if (n > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
}

function checkNumbersRepeating(array) {
  let numRepeat = [];
  for (let n of array) {
    for (let n2 of array) {
      if (n2 === n) {
        numRepeat[n] = (numRepeat[n] || 0) + 1;
      }
    }
    if (numRepeat[n] > 8) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
}

function generatePhoneNumber(array) {
  let checkSizeConsistency = arraySize(array);
  let checkUndersAndOversConsistency =  checkNumbersUndersAndOvers(array);
  let checkRepeatConsistency = checkNumbersRepeating(array);
  if (typeof checkSizeConsistency === 'string') {
    return checkSizeConsistency;
  } else if (typeof checkRepeatConsistency === 'string') {
    return checkRepeatConsistency;
  } else if (typeof checkUndersAndOversConsistency === 'string') {
    return checkUndersAndOversConsistency;
  }


  return `(${array[0]}${array[1]}) ${array[2]}${array[3]}${array[4]}${array[5]}${array[6]}-${array[7]}${array[8]}${array[9]}${array[10]}`
}


// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  listSides = [lineA, lineB, lineC]
  for (n in listSides) {
    sideBuffer = listSides.slice(n,n+1);
    if (sideBuffer >= (listSides[0]+listSides[1]) || sideBuffer <= Math.abs(listSides[0]-listSides[1])) {
      return false;
    } else {
      return true;
    }

  }

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
