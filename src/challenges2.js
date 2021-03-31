// Desafio 10
function techList(techname, nome) {
  let tech = techname.sort()
  if (tech.length == 0){
    var output = 'Vazio!'
  } else {
    var output = []; 
  }
  for (let index = 0; index < tech.length; index += 1) {  
    let object = {
      tech: String,
      name: String
    }   
      let objeto = Object.create(object);
      objeto.tech = tech[index];
      objeto.name = nome;
      output.push(objeto);     
  } return output
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
