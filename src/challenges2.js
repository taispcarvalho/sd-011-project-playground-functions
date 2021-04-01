// Desafio 10
let newTechnology = ['React', 'Jest', 'HTML', 'CSS', 'JavaScript'];
let newName = 'Murilo';
function techList(learningTechnology, name) {
  let outExit = [];
  for(let key of learningTechnology.sort()) {
    outExit.push({tech: key, name: name}); 
  }
  return outExit;
}
console.log(techList(newTechnology, newName))












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
