// Desafio 10
function createTechObjects(list, name) {
  let array = [];
  let objects = {};
  for (let technology of list) {
    // Source: https://stackoverflow.com/questions/2383484/how-to-create-a-dynamic-object-in-a-loop
    objects = { tech: technology, name };
    array.push(objects);
  }
  return array;
}

function techList(listDevTech, name) {
  if (listDevTech.length <= 0) {
    return 'Vazio!';
  }
  let sortedListDevTech = listDevTech.sort();
  return createTechObjects(sortedListDevTech, name);
}

// Desafio 11
function countOccurrences(num, numbers) {
  let repetitions = 0;
  for (let key in numbers) {
    if (numbers[key] === num) {
      repetitions += 1;
    }
  }
  return repetitions;
}

function validateNumbers(numbers) {
  let occurrences = 0;
  for (let num of numbers) {
    occurrences = countOccurrences(num, numbers);
    if (occurrences >= 3) {
      return false;
    }
  }
  return true;
}

function checkNumberCeiling(numbers) {
  for (let num of numbers) {
    if (num > 9 || num < 0) {
      return false;
    }
  }
  return true;
}

function adjustPhoneNumber(numbers) {
  let baseNumber = '(00) 00000-0000';
  let phoneNumber = '';
  let atribuitionIndex = 0;
  for (let key in baseNumber) {
    if (baseNumber[key] === '0') {
      phoneNumber += numbers[atribuitionIndex];
      atribuitionIndex += 1;
    } else {
      phoneNumber += baseNumber[key];
    }
  }
  return phoneNumber;
}

function generatePhoneNumber(phoneNumber) {
  let size = phoneNumber.length;
  if (size !== 11) {
    return 'Array com tamanho incorreto.';
  }
  if (validateNumbers(phoneNumber) && checkNumberCeiling(phoneNumber)) {
    return adjustPhoneNumber(phoneNumber);
  }
  return 'não é possível gerar um número de telefone com esses valores';
}

// Desafio 12
function sumSides(line, numbers) {
  let sum = 0;
  for (let num of numbers) {
    if (num !== line) {
      sum += num;
    }
  }
  return line < sum;
}

function checkDiffSides(key, numbers) {
  let diff = 0;
  switch (key) {
  case 0:
    diff = numbers[key + 1] - numbers[key + 2];
    break;
  case 1:
    diff = numbers[key - 1] - numbers[key + 1];
    break;
  default:
    diff = numbers[key - 1] - numbers[key - 2];
  }
  return numbers[key] > Math.abs(diff);
}

function triangleCheck(lineA, lineB, lineC) {
  let numbers = [lineA, lineB, lineC];
  for (let key in numbers) {
    let valid = sumSides(numbers[key], numbers) && checkDiffSides(parseInt(key, 10), numbers);
    if (!valid) {
      return false;
    }
  }
  return true;
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
