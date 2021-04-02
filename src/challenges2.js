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
  let count;
  let saveMaxCount = 1;
  for (let index = 0; index < array.length; index += 1) {
    let save = array[index];
    count = 1;
    for (let indexB = index + 1; indexB < array.length; indexB += 1) {
      if (save === array[indexB]) {
        count += 1;
      }
    }
    if (count > saveMaxCount) {
      saveMaxCount = count;
    }
  }
  return saveMaxCount;
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
      phone += `${array[index]}) `;
    } else if (index === 6) {
      phone += `${array[index]}-`;
    } else {
      phone += array[index];
    }
  } return phone;
}

let numberArray = [5, 2, 8, 1, 5, 3, 7, 2, 8, 9, 0];
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
function hydrate(str) {
  let savedNumber;
  let sum = 0;
  let regex = /\d+/g;
  let matches = str.match(regex);
  for (let index = 0; index < matches.length; index += 1) {
    savedNumber = parseInt(matches[index], 10);
    sum += savedNumber;
  } if (sum === 1) {
    return `${sum} copo de água`;
  }
  return `${sum} copos de água`;
}

console.log(hydrate('1 cachaça, 0 cervejas e 0 copo de vinho'));

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
