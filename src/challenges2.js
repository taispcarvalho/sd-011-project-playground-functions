// Desafio 10
function techList(techsToLearn,name) {
  techToLearn = techsToLearn.sort()
  let output = [];
  for(index = 0; index < techsToLearn.length; index += 1) {
  var sorted = [];
  sorted.tech = techsToLearn[index];
  sorted.name = name; 
  output.push(sorted);
  } 
  return output;
  }

  console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], 'Maran'))
















var teste = 'algo';
var car = {
  marca: 'nissan',
  modelo: 'tiida',
  ano: 2012,
  odometro: '70.000',
}

console.log(car)
console.log(car.marca);
console.log(car.modelo);
console.log(car['odometro'])

car.cor = teste + 'prata';
console.log(car);



















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
