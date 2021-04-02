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
    if (sortedNumbers[index] === sortedNumbers[index + 1]) {
      count += 1;
    } else {
      count = 0;
    }
  }
  return true;
}

function checkIfBetween0to9(array) {
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > 9 || array[index] < 0) return false;
  }
  return true;
}

function transformIntoStrig(array) {
  return array.join('');
}

function generatePhoneNumber(string) {  
  if (checkIf11Numbers(string) === false) return 'Array com tamanho incorreto.'; 
  if (checkRepeatdNumbers(string) === false || checkIfBetween0to9(string) === false) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  let number = transformIntoStrig(string)
  number = string.splice(0, 0, '(') + string.splice(0, 3, ') ') + string.splice(0, 6, '-') + string.splice(0, 11);
  //let formatedNumber = number.join('');
  return number.replace(/,/g, '')
}
let number = [1, 2, 3, 4, 2, 6, 3, 8, 9, 0, 1]
console.log(number);
console.log(transformIntoStrig(number));
console.log(generatePhoneNumber(number));

// Desafio 12
function checkSides(sideA, sideB, sideC) {
  if (sideA <= sideB + sideC && sideB <= sideA + sideC && sideC <= sideA + sideB) {
    return true;
  }
  return false;
}

function checkIfSidesHigherThenDiff(sideA, sideB, sideC) {
  if (sideA >= Math.abs(sideB - sideC) && sideB >= Math.abs(sideA - sideC) && sideC >= Math.abs(sideA - sideB)) {
    return true;
  }
  return false;
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
