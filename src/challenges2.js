// Desafio 10
function createObject(techs, name) {
  let arrayObject = [];

  for (let index of techs) {
    let objectTech = {};

    objectTech.tech = index;
    objectTech.name = name;

    arrayObject.push(objectTech);
  }

  return arrayObject;
}

function sortByTech(a, b) {
  let result;

  if(a.tech < b.tech) {
    result = -1;
  } else if (a.tech > b.tech) {
    result = 1;
  } else {
    result = 0;
  }

  return result;
}

function techList(techs, name) {
  let arrayObject = [];

  if (arrayObject === []) {
    console.log('Vazio!');
  } else {
    arrayObject = createObject(techs, name);
  }

  return arrayObject.sort(sortByTech);
}

let tech1 = ["React", "Jest", "HTML", "CSS", "JavaScript"];
let name1 = 'Lucas';
console.log(techList(tech1, name1));

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
