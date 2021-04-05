// Desafio 10
function techList(list, codiname) {
  if (list.length === 0) {
    return 'Vazio!';
  }
  list = list.sort();
  let objeto = [];
  for (let index = 0; index < list.length; index += 1) {
    objeto.push = ({
      name: codiname,
      tech: list[index],
    });
  } return objeto;
}

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
