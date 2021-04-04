// Desafio 10
function techList(techArray, name) {
  let sortedArray = techArray.sort();
  let arrayOfObjects = [];
  if (techArray.length === 0) {
    return 'Vazio!';
  }
  for (let index = 0; index < sortedArray.length; index += 1) {
    let object = {
      tech: techArray[index],
      name: name,
    };
    arrayOfObjects.push(object);
  }
  return arrayOfObjects;
}

// Desafio 11
let arrayTest = [1, 2, 3, 4, 5, 6, 7, 3, 9, 3, 1];

function countNumberRepeats(numbersArray) {
  let max = 0;
  let freq = 0;
  numbersArray = numbersArray.sort();
  for (let index = 0; index < numbersArray.length; index += 1) {
    if (numbersArray[index] === numbersArray[index + 1]) {
      freq += 1;
    } else {
      freq = 0;
    }
    if (freq > max) {
      max = freq;
    }
  }
  return max;
}
function generatePhoneNumber(numbersArray) {
  let dddNumber = numbersArray.slice(0, 2).map(String).join('');
  let firsPartNumber = numbersArray.slice(2, 7).map(String).join('');
  let secondPartNumber = numbersArray.slice(7, 11).map(String).join('');
  if (numbersArray.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let index = 0; index < numbersArray.length; index += 1) {
    if (numbersArray[index] < 0 || numbersArray[index] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  if (countNumberRepeats(numbersArray) >= 2) {
    return 'não é possível gerar um número de telefone com esses valores';
  }

  return `(${dddNumber}) ${firsPartNumber}-${secondPartNumber}`;
}

console.log(generatePhoneNumber(arrayTest));

// Desafio 12
function linesSum(lineA, lineB, lineC) {
  if (lineA + lineB > lineC && lineA + lineC > lineB && lineB + lineC > lineA) {
    return true;
  }
  return false;
}

function linesDifference(lineA, lineB, lineC) {
  let subtractAFromB = Math.abs(lineA - lineB);
  let subtractAFromC = Math.abs(lineA - lineC);
  let subtractBfromC = Math.abs(lineB - lineC);
  if (lineC > subtractAFromB && lineB > subtractAFromC && lineA > subtractBfromC) {
    return true;
  }
  return false;
}

function triangleCheck(lineA, lineB, lineC) {
  if (linesSum(lineA, lineB, lineC) === true && linesDifference(lineA, lineB, lineC) === true) {
    return true;
  }
  return false;
}

// Desafio 13
function hydrate(drinksTaken) {
  let drinksListArray = drinksTaken.split(' ').map(Number);
  let cupsOfWater = 0;
  for (let index = 0; index < drinksListArray.length; index += 1) {
    if (drinksListArray[index] > 0) {
      cupsOfWater += drinksListArray[index];
    }
  }
  if (cupsOfWater > 1) {
    return `${cupsOfWater} copos de água`;
  }
  return `${cupsOfWater} copo de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
