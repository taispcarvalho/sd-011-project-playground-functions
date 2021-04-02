// Desafio 10
function techList() {
  // seu código aqui
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let isTriangle = false;
  if (lineA < lineB + lineC && lineA > Math.abs(lineB - lineC)
  && lineB < lineA + lineC && lineB > Math.abs(lineA - lineC)
  && lineC < lineB + lineA && lineC > Math.abs(lineB - lineA)) {
    isTriangle = true;
  }
  return isTriangle;
}

// Desafio 13
function hydrate(drinks) {
  let numbersOfDrink = drinks.match (/\d+/g)
  let glassesOfWater = 0;
  for (let index = 0; index < numbersOfDrink.length; index += 1) {
    glassesOfWater += Number(numbersOfDrink[index]);
  }

  if (glassesOfWater <= 1) {
    return (glassesOfWater + ' copo de água');
  } else {
    return (glassesOfWater + ' copos de água');
  }
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
