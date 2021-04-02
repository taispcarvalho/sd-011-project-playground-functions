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
  for (let index = 0; index < sortedNumbers.length - 1; index += 1) {
    if (count >= 2) return false;
    if (sortedNumbers[index] === sortedNumbers[index + 1]) count += 1; 
    else count = 0;
  }
  return true;
}


function checkIfBetween0to9(array) {
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > 9 || array[index] < 0) return false;
  }
  return true;
}

function generatePhoneNumber(string) {
  if (checkIf11Numbers(string) === false) return 'Array com tamanho incorreto.';
  if (checkRepeatdNumbers(string) === false || checkIfBetween0to9(string) === false) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  let number = string.join('');
  number = string.splice(0, 0, '(');
  number += string.splice(0, 3, ') ') + string.splice(0, 6, '-') + string.splice(0, 11);
  return number.replace(/,/g, '');
}

// Desafio 12
function checkSides(sideA, sideB, sideC) {
  if (sideA <= sideB + sideC && sideB <= sideA + sideC && sideC <= sideA + sideB) {
    return true;
  }
  return false;
}

function checkIfSidesHigherThenDiff(sideA, sideB, sideC) {
  if (!sideA >= Math.abs(sideB - sideC)) return false;
  if (!sideB >= Math.abs(sideA - sideC)) return false;
  if (!sideC >= Math.abs(sideA - sideB)) return false;
  return true;
}

function triangleCheck(sideA, sideB, sideC) {
  if (checkSides(sideA, sideB, sideC) && checkIfSidesHigherThenDiff(sideA, sideB, sideC)) {
    return true;
  }
  return false;
}

// Desafio 13
function countDrinks(drinks) {
  drinks = drinks.replace(/\D/g, '');
  let count = 0;
  for (let index = 0; index < drinks.length; index += 1) {
    count += Number(drinks[index]);
  }
  return count;
}

function hydrate(drinks) {
  if (countDrinks(drinks) === 1) {
    return `${countDrinks(drinks)} copo de água`;
  }
  return `${countDrinks(drinks)} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
