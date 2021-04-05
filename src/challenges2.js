// Desafio 10
function techList(arrayTech, names) {
  let arrayTechName = [];
  let resultArray;
  if (arrayTech.length !== 0) {
    arrayTech.sort();
    for (let index = 0; index < arrayTech.length; index += 1) {
      arrayTechName[index] = {
        tech: arrayTech[index],
        name: names,
      };
    } resultArray = arrayTechName;
  } else {
    resultArray = 'Vazio!';
  }
  return resultArray;
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let resultTriangle = lineA < (lineB + lineC) && lineA > Math.abs(lineB - lineC);
  return resultTriangle;
}

// Desafio 13
function hydrate(drinkIt) {
  let drinkReg = drinkIt.replace(/[^0-9]/g, '').split('');
  let resultCupWater = 0;
  for (let index = 0; index < drinkReg.length; index += 1) {
    resultCupWater += parseInt(drinkReg[index], 9);
  }
  if (resultCupWater === 1) {
    return '1 copo de água';
  }
  return `${resultCupWater} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
