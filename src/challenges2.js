// Desafio 10
function techList(array, name) {
  if (array.length === 0) {
    return 'Vazio!';
  }

  let techList = [];
  let sortedTechNames = array.sort();

  for (let techName of sortedTechNames) {
    techList.push({
      tech: techName,
      name: name,
    });
  }
  return techList;
}

console.log(techList([]));
console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], 'Lucas'));


// Desafio 11
function generatePhoneNumber(array) {
  let mask = '(xx) xxxxx-xxxx';
  let arrayNotPossible = [];
  array.forEach(function (item) {
      mask = mask.replace('x', item);
  });
  for(let index = 0; index < array.length; index ++) {
  if(array.length === 11) {
    return mask
  } else if (array[index] < 0 || array[index] > 9) {
    arrayNotPossible.push('Não é possível gerar um numero de telefone com esses valores')
  } else {

    } 
  }
  if(array.length < 11) {
    arrayNotPossible.push('Array com tamanho incorreto')
  }
  return arrayNotPossible;
}

console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]))
console.log(generatePhoneNumber([1, 2, 3, 0, 1]))
console.log(generatePhoneNumber([2, 3, 4, 5, 6, 7, 8, 21]))
console.log(generatePhoneNumber([2, 3, 4, 5, 6, 7, 8, -21]))
console.log(generatePhoneNumber([2, 2, 2, 3, 4, 5, 6, 7, 8]))

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {

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
