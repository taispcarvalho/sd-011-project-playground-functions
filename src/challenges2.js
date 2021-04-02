// Desafio 10
function techList(tech, name) {
  let objectTech = [];
  tech.sort();
  for (let index = 0; index < tech.length; index += 1) {
    objectTech.push({
      tech: tech[index], name,
    });
  }
  if (objectTech.length === 0) {
    return 'Vazio!';
  }
  return objectTech;
}

console.log(techList(['React', 'Javascrit', 'CSS', 'HTML', 'C#'], 'Alexandre'))

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let result = false;
  let verifyA = verifyTriangle(lineA, lineB, lineC);
  let verifyB = verifyTriangle(lineB, lineC, lineA);
  let verifyC = verifyTriangle(lineC, lineA, lineB);
  if (verifyA && verifyB && verifyC) {
    result = true;
  }
  return result;
}

// Desafio 13
function hydrate(drinks) {
  let sum = 0;
  drinks = (drinks.match(/\d/g));
  for (let index = 0; index < drinks.length; index += 1) {
    const newLocal = drinks[index];
    sum += parseInt(newLocal, 10);
  }
  if (sum === 1) {
    return `${sum} copo de água`;
  }
  return `${sum} copos de água`;
}


module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
