// Auxiliary function for requirement 10
function maySwap(arr, index) {
  let arrElement1;

  if (arr[index] > arr[index + 1]) {
    arrElement1 = arr[index];
    arr[index] = arr[index + 1];
    arr[index + 1] = arrElement1;
  }
}

function bubbleSort(arr) {
  let arrSize = arr.length;
  let indexA;
  let indexB;

  for (indexA = 1; indexA < arrSize - 1; indexA += 1) {
    for (indexB = 0; indexB < arrSize - indexA; indexB += 1) {
      maySwap(arr, indexB);
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
