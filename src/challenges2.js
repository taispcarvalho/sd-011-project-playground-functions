// Desafio 10
function techList(techsToLearn, myName) {
  let techToLearn = [];
  techToLearn = techsToLearn.sort();
  let output = [];
  if (techToLearn.length !== 0) {
    for (let index = 0; index < techsToLearn.length; index += 1) {
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
function triangleCheck(lineA, lineB, lineC) {
  if (lineA > lineB + lineC || lineA < Math.abs(lineB - lineC)) {
    return false;
  } else if (lineB > lineA + lineC || lineB < Math.abs(lineA - lineC)) {
    return false;
  } else if (lineC > lineA + lineB || lineC < Math.abs(lineA - lineB)) {
    return false;
  } else {
    return true;
  }
}
console.log(triangleCheck(28, 14, 14))

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
