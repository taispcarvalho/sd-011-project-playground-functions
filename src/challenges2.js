// Desafio 10
function createObject(techName, nameName) {
  let object = {
    tech: techName,
    name: nameName,
  };
  return object;
}

function techList(array, nameName) {
  let arrayOfTechObj = [];
  if (array.length > 0) {
    array.sort();
    let object;
    for (let value of array) {
      object = createObject(value, nameName);
      arrayOfTechObj.push(object);
    }
    return arrayOfTechObj;
  }
  return 'Vazio!';
}
console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Laura'));

// Desafio 11
function phoneStructure(array) {
  let ddd = `${array[0]}${array[1]}`;
  let beforeDash = `${array[2]}${array[3]}${array[4]}${array[5]}${array[6]}`;
  let afterDash = `${array[7]}${array[8]}${array[9]}${array[10]}`;
  return `(${ddd}) ${beforeDash}-${afterDash}`;
}

function countRep(array, number) {
  let count = 0;
  for (let num of array) {
    if (num === number) {
      count += 1;
    }
  }
  return count;
}
function arrayOfRepeated(array) {
  let repeated = [];
  for (let num of array) {
    repeated.push(countRep(array, num));
  }
  return repeated;
}
function lessThan3(array) {
  let numOfRep = arrayOfRepeated(array);
  let lessThan = false;
  for (let value of numOfRep) {
    if (value >= 3) {
      lessThan = true;
    }
  }
  return lessThan;
}
function validDigit(array) {
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] < 0 || array[index] > 9) {
      return true;
    }
  }
  return false;
}

function generatePhoneNumber(array) {
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  if (lessThan3(array) || validDigit(array)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  return phoneStructure(array);
}
console.log(generatePhoneNumber([3, 3, 1, 4, 2, 4, 1, 7, 7, 8, 5]));

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
