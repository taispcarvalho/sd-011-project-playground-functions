// Desafio 10
function listOfTech(tech, name) {
  let result = '';
  for (let index = 0; index < tech.length; index += 1) {
    result += '{\n tech: \"' + tech[index] + '\",\n name: \"' + name + '\" \n },\n';
  }
  return result;
}
/* let teste = listOfTech(['React', 'HTML', 'CSS'], 'Daniel');
console.log(listOfTech(['React', 'HTML', 'CSS'], 'Daniel'));
console.log(teste[0]);
console.log(teste[(teste.length) - 1]); */

function addColchete(tech, name) {
  let colchete = listOfTech(tech, name);
    
}
console.log(addColchete(['React', 'HTML', 'CSS'], 'Daniel'));


function techList(tech, name) {

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
