// Desafio 10
function techList(techNames, name) {
  let allTogether = [];
  if (techNames.length > 1) {
    techNames.sort();
    for (let index = 0; index < techNames.length; index += 1) {
      let object = { tech: '', name: '' };
      object.tech = techNames[index];
      object.name = name;
      allTogether.push(object);
    }
    return allTogether;
  }
  return 'Vazio!';
}

let arrayTechs = ['React', 'Jest', 'HTML', 'CSS', 'JavaScript'];
let person = 'Lucas';
console.log(techList(arrayTechs, person));

// Desafio 11
function countRepeaterNumber(array) {
  let count = 1;
  for (let index = 0; index < array.length; index += 1) {
    let save = array[index];
    for (let indexB = index + 1; indexB < array.length; indexB += 1) {
      if (save === array[indexB]) {
        count += 1;
      }
    }
  }
  return count;
}

function generatePhoneNumber(array) {
  let phone = '';
  let countStorage = countRepeaterNumber(array);
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] < 0 || array[index] > 9 || countStorage >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    } if (index === 0) {
      phone += `(${array[index]}`;
    } else if (index === 1) {
      phone += `${array[index]})`;
    } else if (index === 6) {
      phone += `${array[index]}-`;
    } else {
      phone += array[index];
    }
  } return phone;
}

let numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1];
console.log(generatePhoneNumber(numberArray));

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
