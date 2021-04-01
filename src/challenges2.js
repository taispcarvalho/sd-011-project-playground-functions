// Desafio 10
function techList(array, name) {
  let allTechs = [];
  for (let index = 0; index < array.length; index += 1) {
    allTechs.push(createObject(array[index],name));
  }

  allTechs.sort((a, b) => (a.tech > b.tech) ? 1 : -1);

  if (array.length === 0) {
    return 'Vazio!'
  }
  //return typeof allTechs
  return allTechs
}

function createObject(techName,name) {
  let object = {
    tech: techName,
    name: name
  }
  return object;
}

// Desafio 11
function generatePhoneNumber(numbers) {
  //let phoneNumber = '(' + numbers.slice(0,2) + ') ' + numbers.slice(2,7) + '-' + numbers.slice(7,11);
  //return phoneNumber.replace(/\,/g, '');
//}

//Caso algum dos números da array seja menor que 0, maior que 9 ou se repita 3 vezes ou mais, generatePhoneNumber deverá retornar a string "não é possível gerar um número de telefone com esses valores".
//function checkNumberConditions(numbers) {
 // if (numbers.length !== 11) {
   // return 'Array com tamanho incorreto.'
  //}

  //for (let index = 0; index < numbers.length; index +=1) {
    //if (numbers[index] < 0 || numbers[index] > 9 || numbers[index]) {
      //return 'não é possível gerar um número de telefone com esses valores'
    //}
  //}

  
}

//console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1,1]));

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let triangleRequirements = true;
  if (checkLineSum (lineA, lineB, lineC) === true && checkLineDiff (lineA, lineB, lineC) === true) {
    triangleRequirements = true;
  } else {
    triangleRequirements = false;
  }
  return triangleRequirements
}

function checkLineSum(lineA, lineB, lineC) {
  let checkSum = true;
  if (lineA < lineB + lineC && lineB < lineA + lineC && lineC < lineA + lineB){
    checkSum = true;
  } else {
    checkSum = false;
  }
  return checkSum;
}

function checkLineDiff (lineA, lineB, lineC) {
  let checkDiff = true;
  if (lineA > Math.abs(lineB - lineC) && lineB > Math.abs(lineA - lineC) && lineC > Math.abs(lineA - lineB)) {
    checkDiff = true;
  } else {
    checkDiff = false;
  }
  return checkDiff;
}

// Desafio 13
function hydrate(string) {
  let numberOfDrinks = string.replace(/[^0-9]/g, '');
  let numberOfWaters = 0;
  for (let index = 0; index < numberOfDrinks.length; index += 1) {
    numberOfWaters = numberOfWaters + parseInt(numberOfDrinks[index]);
  }

  if (numberOfWaters === 1) {
    return numberOfWaters + ' copo de água';
  } else {
    return numberOfWaters + ' copos de água';
  }
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
