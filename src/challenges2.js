// Desafio 10
function techList(techNames, name) {
  let techObject = {};
  
  for (let index = 0; index < techNames.length; index += 1){
    techObject.tech = techNames[index];
    techObject.name = name;
    console.log(techObject);  
  }  
}
    
console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], 'Gabriela'));

/* function techList(techNames) {
  techNames.sort
  let techObject = {};
  for (let index = 0; index < techNames.length; index += 1){
    for (index in techNames[index]) {
      techObject.tech = techNames[index];
    }
  }  
    return techObject;
  }
    
console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"])); */

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
