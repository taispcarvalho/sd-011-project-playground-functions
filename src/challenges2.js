// Desafio 10

function techList(learningTechnology, name) {
  let outExit = [];
  if(learningTechnology.length === 0)
  return 'Vazio!'
  for(let key of learningTechnology.sort()) {
  outExit.push({tech: key, name: name}); 
  } 
  return outExit;
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
