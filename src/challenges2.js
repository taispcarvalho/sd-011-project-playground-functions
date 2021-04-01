// Desafio 10
function techList(lista, nameName) {
  let list = [];
  for (let index = 0; index < lista.length; index += 1) {
    let object = {
      tech: lista[index],
      name: nameName,    
    };
  list.push(object);
  }

  list.sort(function(a, b) {
  return (a.tech > b.tech) ? 1 : ((b.tech > a.tech) ? -1 : 0);
  });

  if (lista.length === 0) {
    return 'Vazio!'
  }

  else {
    return list;
  }
}
console.log(techList([], "Lucas"));
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
