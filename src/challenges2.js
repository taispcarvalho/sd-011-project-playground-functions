// Desafio 10
function techList(techs, name) {

techs.sort()

  let lista = []

  if(techs === ['']){
    return "Vazio!"
  }else{
    for(let i = 0; i < techs.length; i += 1){
    
    lista[i] = { tech: techs[i], name: name}

  }

  return lista;
  }
  
}

console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Lucas"));

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
