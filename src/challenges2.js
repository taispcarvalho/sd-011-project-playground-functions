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
    for (let num in array) {
      if (save === array[num]) {
        count += 1;
      }
    }
  }
  return count;
}

function transformPhoneNumber(array) {
  let savePhone = '';
  for (let index = 0; index < array.length; index += 1) {
    if (index === 0) { 
      savePhone += `( ${array[index]}${array[index + 1]})`;
    } if (index === 6) {
      savePhone += `${array[index]}-`;
    }
    savePhone += array[index];
  }
  return savePhone;
}

function checkPossibleNumber(array) {
  let possibleStr = false;
  let countStorage = countRepeaterNumber(array);
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] < 0 || array[index] > 9 || countStorage >= 3) {
      possibleStr = true;
    }
  }
  return possibleStr;
}

function generatePhoneNumber(array) {
  let phone = transformPhoneNumber(array);
  let possible = checkPossibleNumber(array);
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  } if (possible === true) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  return phone;
}

let numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1];
console.log(generatePhoneNumber(numberArray));

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < lineB + lineC && lineA > Math.abs(lineB - lineC)) {
    return true;
  } if (lineB < lineA + lineC && lineB > Math.abs(lineA - lineC)) {
    return true;
  } if (lineC < lineA + lineB && lineC > Math.abs(lineB - lineA)) {
    return true;
  }
  return false;
}

console.log(triangleCheck(10, 19, 10));

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
