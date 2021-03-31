// Desafio 10
function techList(techs, name) {
  let arrayTechName = [];
  let orderedTechs = techs.sort();

  if (techs == '') {
    return 'Vazio!';
  }

  for (let index in orderedTechs) {
    let object = {};
    object['tech'] = orderedTechs[index];
    object['name'] = name;
    arrayTechName.push(object);    
  }
  return arrayTechName;
}
// console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], 'Felipe'));
// console.log(techList([], 'Felipe'));

// Desafio 11
function sizeArray(list) {
  let size = false;
  
  if (list.length === 11) {
    size = true;
  }
  return size;
}
// console.log(sizeArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));

function limitNumbers(list) {
  let limit = true;

  for (let index of list) {
    if (index < 0 || index > 9) {
      limit = false;
    }
  }
  return limit;
}
// console.log(limitNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));
// console.log(limitNumbers([1, 2, 3, 4, 11, 6, 7, 8, 9, 0, 1]));
// console.log(limitNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, -1]));

function repeatedNumber(list) {
  let repeated = false;

  for (let index of list) {
    let count = 0;
    for (let number of list) {
      if (count < 3) {
        if (list[index] === number) {
          count += 1;
        }
      } else {
        repeated = true;
      }
    }
  }
  return repeated;
}
// console.log(repeatedNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));
// console.log(repeatedNumber([1, 2, 3, 4, 5, 5, 7, 8, 9, 0, 1]));
// console.log(repeatedNumber([1, 2, 3, 4, 4, 4, 7, 8, 9, 0, 1]));

function generatePhoneNumber(array) {
  let sizeNumbers = sizeArray(array);
  let positiveNumberUnit = limitNumbers(array);
  let frequentNumbers = repeatedNumber(array);
  let phoneNumber = 'não é possível gerar um número de telefone com esses valores';

  if (sizeNumbers === false) {
    return phoneNumber;
  } else if ( positiveNumberUnit === false) {
    return phoneNumber;
  } else if (frequentNumbers === true) {
    return phoneNumber;
  } else {
    phoneNumber = "teste";
  }
  return phoneNumber;
}
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 5, 5, 8, 9, 0, 1]));
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 19, 0, 1]));
console.log(generatePhoneNumber([1, 2, 3, 4, -5, 6, 7, 8, 9, 0, 1]));
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 1]));

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
