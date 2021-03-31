// Desafio 10
let lala = ['React', 'Jest', 'HTML', 'CSS', 'JavaScript'];
let lalala = 'Henrique';
function techList(array, name) {
  let newArray = [];
  for (let index = 0; index < array.length; index += 1) {
    let objeto = {
      tech: array[index],
      name: `${name}`,
    };
    newArray.push(objeto);
  }
  return newArray.sort((a, b) => (a.tech > b.tech ? 1 : -1));
}

console.log(techList(lala, lalala));
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
