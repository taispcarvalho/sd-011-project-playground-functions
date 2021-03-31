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

console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 9, 10]));
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
