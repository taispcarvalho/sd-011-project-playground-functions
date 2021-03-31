// Desafio 10
function createTechObjects(list, name) {
  let array = [];
  let objects = {};
  for(let technology of list) {
    // Source: https://stackoverflow.com/questions/2383484/how-to-create-a-dynamic-object-in-a-loop
    objects = {tech: technology, name: name};
    array.push(objects);
  }
  return array;
}

function techList(listDevTech, name) {
  let sortedListDevTech = listDevTech.sort();
  return createTechObjects(sortedListDevTech, name);
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
