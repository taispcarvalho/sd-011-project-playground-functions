// Desafio 10
function techList(techNames, name) {
  let arraySort = techNames.sort();
  let listObjects = [];
  if (techNames.length <= 0) {
    return 'Vazio!';
  } else {
    let object = {};
    for (let index = 0; index < arraySort.length; index += 1) {
    object = {
      tech: arraySort[index],
      name: name,
    };
    listObjects.push(object);
    }
  } 
  return listObjects;
}
console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));
console.log(techList([], 'Lucas'));

// Desafio 11
function generatePhoneNumber(telNumbers) {
  if (telNumbers.length === 11 && checkNumbers === false) {
    console.log('(' + telNumbers[0] + telNumbers[1] + ') ' + telNumbers[2] + telNumbers[3] + telNumbers[4] + telNumbers[5] + telNumbers[6] + '-' + telNumbers[7] + telNumbers[8] + telNumbers[9] + telNumbers[10]);
  } else if (telNumbers.length !== 11 && checkNumbers === false) {
    console.log('Array com tamanho incorreto.');
  } else if (checkNumbers === true) {
    console.log('não é possível gerar um número de telefone com esses valores');
  }
function checkNumbers(telNumbers) {
  let check = false;
  for (let index = 0; index < telNumbers.length; index += 1) {
    if (telNumbers[index] < 0 || telNumbers[index] > 9) {
      check === true;
    }
  } 
    let repetNumber = 0;
    for (let index2 = 0; index2 < telNumbers.length; index +=1) {
      if (telNumbers[index] ===  telNumbers[index2]) {
        repetNumber += 1; 
        if (repetNumber >= 3) {
          check === true;
        }
      }
    }
  }
  return check
}

console.log(checkNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let check = 0;
  let valorAbsolut = Math.abs(lineA - lineB - lineC);
  if ((lineA < (lineB + lineC) || lineB < (lineA + lineC) || lineC < (lineA + lineB)) && (lineA > valorAbsolut || lineB > valorAbsolut || lineC > valorAbsolut)) {
    check = true;
  } else if (lineA > (lineB + lineC) || lineB > (lineA + lineC) || lineC > (lineA + lineB)) {
    check = false;
  } else if (lineA < valorAbsolut || lineB < valorAbsolut || lineC < valorAbsolut) {
    check = false;
  }
  return check;
}

console.log(triangleCheck(10, 14, 8));

// Desafio 13
function hydrate(drinks) {
  let totalWater = 0;
  let numberDrinks = drinks.match(/\d+/g).map(Number);
  for (let index = 0; index < numberDrinks.length; index += 1) {
    totalWater += numberDrinks[index];
  }
  if (totalWater === 1)
    totalWater += ' copo de água';
  if (totalWater > 1)
    totalWater += ' copos de água';
  return totalWater;
}
console.log(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho'));

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};