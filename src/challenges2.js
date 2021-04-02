// Desafio 10
function techList(tech, name) {
  // seu código aqui
  tech.sort();
  let returnArray = [];
  if (tech.length === 0) {
    return 'Vazio!';
  }
  for (let index = 0; index < tech.length; index += 1) {
    returnArray.push({
      tech: tech[index],
      name: name
    });
  }

  return returnArray;
}

console.log(techList(["React", "Jest", "HTML", "CSS", "Java"], "Lucas"));

// Desafio 11
function truePhone1(numbers){
  if (numbers.length !== 11) {
    return false;
  }
  return true;
}

function truePhone2(numbers){
  for (const key of numbers) {
    let contador = 0;
    for (const key2 of numbers) {
      if (key === key2) {
        contador += 1;
      }
    }
    if (contador >= 3) {
      return false;
    }
  }
  return true;
}
function generatePhoneNumber(numbers) {
  // seu código aqui
  if (truePhone1(numbers) && truePhone2(numbers) === true) {
    return `(${numbers[0]}${numbers[1]}) ${numbers[2]}${numbers[3]}${numbers[4]}${numbers[5]}${numbers[6]}-${numbers[7]}${numbers[8]}${numbers[9]}${numbers[10]}`;
  }
  if (truePhone1(numbers) === false) {
    return 'Array com tamanho incorreto.';
  }
  if (truePhone2(numbers) === false) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
}

console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 9]));

// Desafio 12
function boo1(lineA, lineB, lineC) {
  if (lineA < (lineB + lineC) && lineA > Math.abs(lineB - lineC)) {
    return true;
  }
  return false;
}

function boo2(lineA, lineB, lineC) {
  if (lineB < (lineA + lineC) && lineB > Math.abs(lineA - lineC)) {
    return true;
  }
  return false;
}

function boo3(lineA, lineB, lineC) {
  if (lineC < (lineB + lineA) && lineC > Math.abs(lineB - lineA)) {
    return true;
  }
  return false;
}

function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  return boo1(lineA, lineB, lineC) && boo2(lineA, lineB, lineC) && boo3(lineA, lineB, lineC);
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
