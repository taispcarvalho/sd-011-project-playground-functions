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
    let techA = a.tech.toLowerCase();
    let techB = b.tech.toLowerCase();
    if (techA < techB) return -1;
    if (techA > techB) return 1;
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
      if (numbers[i] === numbers[j]) {
        repeat += 1;
      }
    }
    if (repeat > repeatTimes) {
      repeatTimes += 1;
    }
    repeat = 0;
  }
  if (repeatTimes >= 3) {
    repeatThreeTimes = true;
  }
  return repeatThreeTimes;
}

function generatePhoneNumber(numbers) {
  let firstPart = ['('];
  let secondPart = [];
  let thirdPart = [];
  let repeat = repeatNumber(numbers);

  if (numbers.length !== 11) {
    return 'Array com tamanho incorreto.';
  }

  for (let index = 0; index < 11; index += 1) {
    if (numbers[index] < 0 || numbers[index] > 9 || repeat === true) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }

  for (let index = 0; index < 2; index += 1) {
    firstPart.push(numbers[index]);
  }
  firstPart.push(')');

  for (let index = 2; index < 7; index += 1) {
    secondPart.push(numbers[index]);
  }

  for (let index = 7; index < 11; index += 1) {
    thirdPart.push(numbers[index]);
  }

  let completeNumber = firstPart.join('') + ' ' + secondPart.join('') + '-' + thirdPart.join('');

  return completeNumber;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let check = false;
  if (lineA < lineB + lineC && lineB < lineA + lineC && lineC < lineA + lineB) {
    if (lineA > Math.abs(lineB - lineC) && lineB > Math.abs(lineA - lineC) && lineC > Math.abs(lineA - lineB)) {
      check = true;
    }
  }

  return check;
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
