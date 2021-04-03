// Desafio 10
function techList() {
  // seu código aqui
}

// Desafio 11
function generatePhoneNumber(numbers) {
  let zero = 0;
  let one = 0;
  let two = 0;
  let three = 0;
  let four = 0;
  let five = 0;
  let six = 0;
  let seven = 0;
  let eight = 0;
  let nine = 0;
  let error = 0;
  let numbersOutput = [];
  for (let index = 0; index < numbers.length; index += 1) {
    switch (numbers[index]) {
    case 0:
      zero += 1;
      break;
    case 1:
      one += 1;
      break;
    case 2:
      two += 1;
      break;
    case 3:
      three += 1;
      break;
    case 4:
      four += 1;
      break;
    case 5:
      five += 1;
      break;
    case 6:
      six += 1;
      break;
    case 7:
      seven += 1;
      break;
    case 8:
      eight += 1;
      break;
    case 9:
      nine += 1;
      break;
    default:
      error += 1;
    }
  }
  if (numbers.length !== 11) {
    return ('Array com tamanho incorreto.');
  } else if (zero > 2 || one > 2 || two > 2 || three > 2 || four > 2 || five > 2 || six > 2 || seven > 2
    || eight > 2 || nine > 2 || error > 0) {
    return ('não é possível gerar um número de telefone com esses valores');
  } else {
    numbersOutput.push('(');
    for (let index = 0; index < 2; index += 1) {
      numbersOutput.push(numbers[index]);
    }
    numbersOutput.push(') ');
    for (let index = 2; index < 7; index += 1) {
      numbersOutput.push(numbers[index]);
    }
    numbersOutput.push('-');
    for (let index = 7; index < 11; index += 1) {
      numbersOutput.push(numbers[index]);
    }
    numbersOutput = numbersOutput.join('');
    return numbersOutput;
  }
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
  let numbersOfDrink = drinks.match(/\d+/g);
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
