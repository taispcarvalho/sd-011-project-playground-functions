// Desafio 10
function techList(techName, name) {
  techName = ['js', 'java', 'css']
  name= 'dada'
  let arrayObj = []
  let techObj = {} 
  for (index = 0; index < techName.length; index += 1){
    techObj = {
    tech: techName[index],
    name: name,
  }
  arrayObj.push(techObj)
  return (arrayObj)
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
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
