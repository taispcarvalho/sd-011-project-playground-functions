// Desafio 10
// function checkForEmptyArray(array) {

// }

function techList(array, nome) {
  // checkForEmptyArray(array);
  if (array.length === 0) {
    return 'Vazio!';
  }
  array = array.sort();
  let finalObject = [];
  for (let index = 0; index < array.length; index += 1) {
    let insideForObject = {
      tech: array[index],
      name: nome,
    };

    finalObject[index] = insideForObject;
  }
  return finalObject;
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
