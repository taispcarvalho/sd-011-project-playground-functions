// Desafio 10
function techList(techs, name) {

techs = techs.sort()

  let lista = []

  if(techs.length === 0){
    return "Vazio!"
  }
  else{
    
  for(let i = 0; i < techs.length; i += 1){
    
    lista[i] = { tech: techs[i], name: name}

  }

  return lista;
  }
  
}

console.log(techList([], "Lucas"));

// Desafio 11
function generatePhoneNumber(numbers) {


  let phoneNumber = ''
  for(let i = 0; i < 2; i += 1){
    if(i === 0){
      phoneNumber += '('
      phoneNumber += numbers[i]
    }else{
      phoneNumber += numbers[i]
      phoneNumber += ')'
    }
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
