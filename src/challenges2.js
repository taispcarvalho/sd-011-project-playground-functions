// Desafio 10
function techList(tech, name) {
  // seu código aqui
  tech.sort();
  let list = {
    tech: tech[0],
    name: name
  }
  let returnArray = [];
  if (tech.length === 0) {
    return 'Vazio!'
  } else {
    for (let index = 0; index < tech.length; index += 1){
      returnArray.push(list = {
        tech: tech[index],
        name: name
      })
    }
  }
  return returnArray;
}

console.log(techList(["React", "Jest", "HTML", "CSS", "Java"], "Lucas"));

// Desafio 11
function generatePhoneNumber(numbers) {
  // seu código aqui
  if (numbers.length !== 11) {
    return 'Array com tamanho incorreto.'
  }
  for (const key of numbers) {
    let contador = 0;
    for (const key2 of numbers) {
    if (key === key2) {
      contador += 1
    }
    }
    if (0 > key | 9 < key | contador >= 3) {
      return 'não é possível gerar um número de telefone com esses valores'
    }
  }
  return '(' + numbers[0] + numbers[1] + ') ' + numbers[2] + numbers[3] + numbers[4] + numbers[5] + numbers[6] + '-' + numbers[7] + numbers[8] +  numbers[9] + numbers[10];
  }

console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 9]));

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  if (lineA < (lineB + lineC) && lineA > Math.abs(lineB - lineC) && lineB < (lineA + lineC) && lineB > Math.abs(lineA - lineC) && lineC < (lineB + lineA) && lineC > Math.abs(lineB - lineA)){
    return true;
  }
  return false;
}

console.log(triangleCheck(10, 14, 8));

// Desafio 13
function hydrate(drinks) {
  // seu código aqui
  let numbers = drinks.match(/\d+/g).map(Number);
  let glassWater = 0;

  for (const key of numbers) {
    glassWater += key;
  }
  if (glassWater > 1) {
    return `${glassWater} copos de água`;
  }
  return `${glassWater} copo de água`;
}

console.log(hydrate('1 cachaça'));

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
