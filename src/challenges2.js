// Desafio 10
function techList(techsToLearn,myName) {
  techToLearn = techsToLearn.sort();
  let output = [];
  if (techToLearn.length !== 0) {
  for(index = 0; index < techsToLearn.length; index += 1) {
  var sorted = {
    tech: techsToLearn[index],
    name: myName
  };
  output.push(sorted)
  } 
  return output;
  } else {
    return 'Vazio!'
  }
  }

  console.log(techList([], 'Maran'))

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck(lines) {
  if (lines[0] > lines[1] + lines[2] || lines[0] < Math.abs(lines[1] - lines[2])) {
    return false
  } else if (lines[1] > lines[0] + lines[2] || lines[1] < Math.abs(lines[0] - lines[2])) { 
    return false;
  }else if (lines[2] > lines[0] + lines[1] || lines[2] < Math.abs(lines[0] - lines[1])) {
    return false;
  }else {
    return true;
  }
}
console.log(triangleCheck([30, 29, 0.99999999]))


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
