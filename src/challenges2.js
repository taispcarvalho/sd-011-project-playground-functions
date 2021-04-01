// Desafio 10
function techList(techs, name) {
  if (techs.length <= 0) return 'Vazio!';
  let results = []
  techs = techs.sort();
  for (let tech of techs) {
    results.push({
     tech,
     name, 
    });
  }
  return results;  
}
results = []
name = 'Leandro'
console.log(techList(results,name))

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
