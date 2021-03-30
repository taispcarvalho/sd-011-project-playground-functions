// Auxiliary function for requirement 10
function bubbleSort(arr) {
  let arrSize = arr.length;
  let indexA;
  let indexB;
  let arrElement1;
  let arrElement2;

  for (indexA = 1; indexA < arrSize - 1; indexA += 1) {
    for (indexB = 0; indexB < arrSize - indexA; indexB += 1) {
      arrElement1 = arr[indexB];
      arrElement2 = arr[indexB + 1];
      if (arrElement1 > arrElement2) {
        arr[indexB] = arrElement2;
        arr[indexB + 1] = arrElement1;
      }
    }
  }

  return arr;
}

// Desafio 10
function techList(techs, name) {
  if (techs.length === 0) {
    return 'Vazio!';
  }

  let sortedTechs = bubbleSort(techs);
  let finalList = [];
  let finalListObject;

  for (let tech of sortedTechs) {
    finalListObject = {};
    finalListObject.tech = tech;
    finalListObject.name = name;
    finalList.push(finalListObject);
  }

  return finalList;
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
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
