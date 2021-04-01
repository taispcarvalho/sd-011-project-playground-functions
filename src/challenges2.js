// Desafio 10
function techList(tech, name) {
  if (tech.length === 0) {
    return 'Vazio!';
  }
  let objectList = [];
  tech.sort();
  for (let index = 0; index < tech.length; index += 1) {
    objectList.push({ tech: tech[index], name });
  }
  return objectList;
}

// Desafio 11
function checkSize(array) {
  if (array.length !== 11) {
    return false;
  }
  return true;
}

function checkValidity(array) {
  let counter = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > 9 || array[index] < 0) {
      return false;
    }
    counter[array[index]] += 1;
  }
  if (Math.max(...counter) >= 3) {
    return false;
  }
  return true;
}

function generatePhoneNumber(tel) {
  if (!checkSize(tel)) {
    return 'Array com tamanho incorreto.';
  }
  if (!checkValidity(tel)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  let areaCode = `(${tel[0]}${tel[1]}) `;
  let firstFive = `${tel[2]}${tel[3]}${tel[4]}${tel[5]}${tel[6]}`;
  let lastFour = `-${tel[7]}${tel[8]}${tel[9]}${tel[10]}`;
  return `${areaCode}${firstFive}${lastFour}`;
}

// Desafio 12
function checkLine(main, sideA, sideB) {
  if (main >= sideA + sideB) {
    return false;
  }
  if (main <= Math.abs(sideA - sideB)) {
    return false;
  }
  return true;
}

function triangleCheck(lineA, lineB, lineC) {
  if (!checkLine(lineA, lineB, lineC)) {
    return false;
  }
  if (!checkLine(lineB, lineC, lineA)) {
    return false;
  }
  if (!checkLine(lineC, lineA, lineB)) {
    return false;
  }
  return true;
}

// Desafio 13
function getSum(array) {
  let sum = 0;
  for (let index = 0; index < array.length; index += 1) {
    sum += array[index];
  }
  return sum;
}

function hydrate(string) {
  let regex = /\d+/g;
  let stringDrinks = string.match(regex);
  let numbersDrinks = stringDrinks.map(Number);
  let water = getSum(numbersDrinks);
  return `${water} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
