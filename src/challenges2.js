// Desafio 10
// Parte do array.short foi inspirado no código do site http://www.javascriptkit.com/javatutors/arraysort2.shtml
function techList(array, name) {
  if (array.length > 0) {
    for (let index in array) {
      array[index] = {
        tech: array[index],
        name,
      };
    }
  } else {
    return 'Vazio!';
  }
  array.sort(function (a, b) {
    if (a.tech < b.tech) return -1;
    if (a.tech > b.tech) return 1;
    return 0;
  });
  return array;
}

// Desafio 11
function repeatNumber(numbers) {
  let repeat = 0;
  let repeatTimes = 0;
  let repeatThreeTimes = false;
  for (let i in numbers) {
    for (let j in numbers) {
      if (numbers[i] === numbers[j]) repeat += 1;
    }
    if (repeat > repeatTimes) repeatTimes += 1;
    repeat = 0;
  }
  if (repeatTimes >= 3) repeatThreeTimes = true;
  return repeatThreeTimes;
}

function generatePhoneNumber(numbers) {
  let firstPart = [];
  let secondPart = [];
  let thirdPart = [];
  let repeat = repeatNumber(numbers);
  if (numbers.length !== 11) return 'Array com tamanho incorreto.';
  for (let index = 0; index < 11; index += 1) {
    if (numbers[index] < 0 || numbers[index] > 9 || repeat === true) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  for (let index = 0; index < 2; index += 1) {
    firstPart.push(numbers[index]);
  }
  for (let index = 2; index < 7; index += 1) {
    secondPart.push(numbers[index]);
  }
  for (let index = 7; index < 11; index += 1) {
    thirdPart.push(numbers[index]);
  }
  return `(${firstPart.join('')}) ${secondPart.join('')}-${thirdPart.join('')}`;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let check = false;
  let aPlusB = lineA + lineB;
  let bPlusC = lineB + lineC;
  let cPlusA = lineC + lineA;
  let aMinusB = Math.abs(lineA - lineB);
  let bMinusC = Math.abs(lineB - lineC);
  let cMinusA = Math.abs(lineC - lineA);

  if (lineA < bPlusC && lineB < cPlusA && lineC < aPlusB && lineA > bMinusC && lineB > cMinusA && lineC > aMinusB) {
    check = true;
  }

  return check;
}

// Desafio 13
function hydrate(string) {
  let regex = /\d+/g;
  let matches = string.match(regex);
  let drinks = 0;
  let msg = '';

  for (let i in matches) {
    drinks += Number(matches[i]);
  }

  if (drinks === 1) {
    msg = `${drinks} copo de água`;
  } else {
    msg = `${drinks} copos de água`;
  }

  return msg;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
