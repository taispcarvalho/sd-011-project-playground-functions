// Desafio 10
function techList(techArray, name) {
  let sortedArray = techArray.sort();
  let arrayOfObjects = []
  if (techArray.length === 0) {
    return 'Vazio!'
  }
  for (let index = 0; index < sortedArray.length; index += 1) {
    let object = {
      tech: techArray[index],
      name: name,
    }
    arrayOfObjects.push(object)
  }
  return arrayOfObjects;
}

// Desafio 11
function countNumberRepets(numbersArray) {
  numbersArray.sort();
  var max = 0, result, freq = 0;
  for (var index = 0; index < numbersArray.length; index += 1) {
    if (numbersArray[index] === numbersArray[index + 1]) {
      freq += 1;
    }
    else {
      freq = 0;
    }
    if (freq > max) {
      result = numbersArray[index];
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
    return 'Array com tamanho incorreto.'
  }
  for (let index = 0; index < numbersArray.length; index += 1) {
    if (numbersArray[index] < 0 || numbersArray[index] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  if (countNumberRepets(numbersArray) >= 2) {
    return 'não é possível gerar um número de telefone com esses valores';
  }

  return '(' + dddNumber + ') ' + firsPartNumber + '-' + secondPartNumber;
}

// Desafio 12
function linesSumCheck(lineA, lineB, lineC) {
  if (lineA + lineB > lineC && lineA + lineC > lineB && lineB + lineC > lineA) {
    return true;
  }
  return false;
}

function linesSubtractCheck(lineA, lineB, lineC) {
  if (lineC > Math.abs(lineA - lineB) && lineB > Math.abs(lineA - lineC) && lineA > Math.abs(lineB - lineC)) {
    return true;
  }
  return false;
}

function triangleCheck(lineA, lineB, lineC) {
  if (linesSumCheck(lineA, lineB, lineC) === true && linesSubtractCheck(lineA, lineB, lineC) === true) {
    return true;
  }
  return false;
}

// Desafio 13
function hydrate(drinksTaken) {
  let drinksListArray = drinksTaken.split(' ').map(Number);
  let cupsOfWater = 0;
  for  (let index = 0; index < drinksListArray.length; index += 1) {
    if (drinksListArray[index] > 0) {
      cupsOfWater += drinksListArray[index];
    }
  }
  return cupsOfWater + ' copos de água';
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
