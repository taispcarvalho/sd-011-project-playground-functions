// part of Desafio 10
function objectBuilder(tech, name) {
  let object = {
    tech: `${tech}`,
    name: `${name}`,
  };
  return object;
}

// Desafio 10
function techList(techArray, name) {
  let newTechList = [];
  let sortedTechs = techArray.sort();

  if (techArray.length > 0) {
    for (let tech of sortedTechs) {
      newTechList.push(objectBuilder(tech, name));
    }
    return newTechList;
  }
  return 'Vazio!';
}

// part of Desafio 11
function outOffLimit(numberArray) {
  for (let number of numberArray) {
    if (number < 0 || number > 9) {
      return number;
    }
  }
  return 0;
}

// part of Desafio 11
function joinNumber(numberArray) {
  let phoneTempArray = [];

  phoneTempArray.push((numberArray.slice(0, 2)).join(''));
  phoneTempArray.push((numberArray.slice(2, 7)).join(''));
  phoneTempArray.push((numberArray.slice(7, 11)).join(''));

  return `(${phoneTempArray[0]}) ${phoneTempArray[1]}-${phoneTempArray[2]}`;
}

// part of Desafio 11
function verifyRepeatedNumber(numberArray) {
  for (let index = 0; index < numberArray.length; index += 1) {
    let appearedTimes = 0;
    for (let number of numberArray) {
      if (number === numberArray[index]) {
        appearedTimes += 1;
        if (appearedTimes >= 3) {
          return appearedTimes;
        }
      }
    }
  }
}

// Desafio 11
function generatePhoneNumber(numberArray) {
  if (numberArray.length !== 11) return 'Array com tamanho incorreto.';

  if (outOffLimit(numberArray) !== 0) {
    return 'não é possível gerar um número de telefone com esses valores';
  }

  if (verifyRepeatedNumber(numberArray) >= 3) {
    return 'não é possível gerar um número de telefone com esses valores';
  }

  return joinNumber(numberArray);
}

// part of Desafio
function lineTester(lineToTest, lineX, lineY) {
  if (lineToTest < (lineX + lineY) && lineToTest > Math.abs(lineX - lineY)) {
    return true;
  }
  return false;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let lineAisValid = false;
  let lineBisValid = false;
  let lineCisValid = false;

  lineAisValid = lineTester(lineA, lineB, lineC);
  lineBisValid = lineTester(lineB, lineA, lineC);
  lineCisValid = lineTester(lineC, lineA, lineB);

  return (lineAisValid && lineBisValid && lineCisValid);
}

// Desafio 13
function hydrate(string) {
  let extractedNumbers = string.match(/[1-9]/g);
  let glassesOfWater = 0;

  for (let number of extractedNumbers) {
    glassesOfWater += parseInt(number, 10);
  }
  if (glassesOfWater > 1) {
    return `${glassesOfWater} copos de água`;
  }
  return `${glassesOfWater} copo de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
