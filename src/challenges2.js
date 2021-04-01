// Desafio 10
function techList(value10, name) {
let objectTest = {};

for (let i = 0; i < value10.length; i+=1){
objectTest["tech"] = value10[i];
objectTest["name"] = name;

return objectTest;
}


if (value10.length === 0){
  return 'Vazio!';
}

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
//  s
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
