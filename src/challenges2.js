// Desafio 10
function techList(value, oneName) {
  if (value.length == 0) {
    return 'Vazio!';
  } else if (value.length == 5){
    let ret = [];
    for (let index = 0; index < value.length; index += 1) {
      ret[index] = {
        tech: value.sort()[index],
        name: oneName,
      };
    }
    return ret;
  }
}
// Desafio 11
function generatePhoneNumber(value) {
  if (value.length != 11) {
    return 'Array com tamanho incorreto.';
  } else {
    let contRepeticion = 0;
    for (let index = 0; index < value.length; index += 1) {

    }
    let ret = '';
    for ()
  }
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
