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

function sortByTech(arrayObject) {
  arrayObject.sort(function(a, b) {
    if(a.tech < b.tech) {
      return -1;
    } else {
      return true;
    }
  });

  return arrayObject;
}

function techList(techs, name) {
  let arrayObject = [];

  if (arrayObject === []) {
    console.log('Vazio!');
  } else {
    arrayObject = createObject(techs, name);
  }

  arrayObject = sortByTech(arrayObject);

  return arrayObject;
}

// let tech1 = ["React", "Jest", "HTML", "CSS", "JavaScript"];
// let name1 = 'Lucas';
// console.log(techList(tech1, name1));

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
