// Desafio 10
function techList(array, name) {
  let newArray = [];
  for (let index of array) {
    newArray.push({
      tech: index,
      name: name,
    })
  }
  newArray.sort(function(a, b) {
    return a.tech < b.tech ? -1 : a.tech > b.tech ? 1 : 0;
  });
  console.log(newArray);
  return newArray;
}
techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Felipe');

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
