// Desafio 10
function createObject(techs, name) {
  let arrayObject = [];
  techs = techs.sort();
  
  for (let index of techs) {
    let objectTech = {tech: '', name: ''};
    
    objectTech.tech = index;
    objectTech.name = name;

    arrayObject.push(objectTech);
  }

  return arrayObject;
}

function techList(techs, name) {
  let arrayObject = [];

  if (techs.length === 0) {
    arrayObject = 'Vazio!';
  } else {
    arrayObject = createObject(techs, name);
  }

  return arrayObject;
}


let techs = ["React", "Jest", "HTML", "CSS", "JavaScript"];
let name = 'Lucas';

console.log(techList(techs, name));

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
