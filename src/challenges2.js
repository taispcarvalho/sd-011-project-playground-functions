// Desafio 10
function techList(value10, name) {
  let objectTest = {};
  let objectTest2 = [];
  
  for (let i = 0; i < value10.length; i+=1){
  objectTest = {
    tech: value10[i],
    name: name,
  }
  objectTest2.push(objectTest);
  }
  
  if (value10.length === 0){
    let arrayVazio = 'Vazio!';
    objectTest2.push(arrayVazio);
  
  }
  
  return objectTest2;
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
//  sd
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
