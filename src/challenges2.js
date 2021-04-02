// Desafio 10
function techList(techsToLearn,myName) {
  techToLearn = techsToLearn.sort();
  let output = [];
  for(index = 0; index < techsToLearn.length; index += 1) {
  var sorted = {
    tech: techsToLearn[index],
    name: myName,
  };
  output.push(sorted)
  } 
  return output;
  }

  console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], 'Maran'))

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
