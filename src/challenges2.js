// Desafio 10
function techList(array, nome) {
  if (array.length === 0) {
    return 'Vazio!';
  }
  array = array.sort();
  let finalObject = [];
  for (let index = 0; index < array.length; index += 1) {
    let insideForObject = {
      tech: array[index],
      name: nome,
    };
    finalObject[index] = insideForObject;
  }
  return finalObject;
}

// Desafio 11
function repeatedNumber(checkNumber, checkNumberOut) {
  let repeat = 0;
  for (let indexIn = 0; indexIn < checkNumber.length; indexIn += 1) {
    if (checkNumberOut === checkNumber[indexIn]) {
      repeat += 1;
    }
    if (repeat === 3) {
      return true;
    }
  }
}

function checkForRepeatedNumbers(number) {
  for (let index = 0; index < number.length; index += 1) {
    repeatedNumber(number, number[index]);
    if (number[index] < 0 || number[index] > 9 || repeatedNumber(number, number[index]) === true) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  return true;
}

function checkPhoneNumber(number) {
  if (number.length !== 11) {
    return 'Array com tamanho incorreto';
  }
  let answer = checkForRepeatedNumbers(number);
  return answer;
}

function generatePhoneNumber(array) {
  if (checkPhoneNumber(array) === true) {
    array = array.join('');
    let answer = `(${array.substring(0, 2)}) ${array.substring(2, 7)}-${array.substring(7, 11)}`;
    return answer;
  }
  return checkPhoneNumber(array);
}

console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));

// Desafio 12
function triangleCheck() {
  // seu código aqui
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
