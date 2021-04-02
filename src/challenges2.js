// Desafio 10
function techList(array, names) {
  if (array.length === 0) {
    return ('Vazio!');
  }
  let sortedArray = array.sort();
  let finalList = [];
  for (let index = 0; index < sortedArray.length; index += 1) {
    finalList[index] = {
      tech: sortedArray[index],
      name: names };
  }
  return finalList;
}

console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

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
