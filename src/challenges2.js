// Desafio 10
function techList(techNames, name) {
  let allTogether = [];
  if (techNames.length > 1) {
    techNames.sort();
    for (let index = 0; index < techNames.length; index += 1) {
      let object = { tech: '', name: '' };
      object.tech = techNames[index];
      object.name = name;
      allTogether.push(object);
    }
    return allTogether;
  }
  return 'Vazio!';
}

let arrayTechs = ['React', 'Jest', 'HTML', 'CSS', 'JavaScript'];
let person = 'Lucas';
console.log(techList(arrayTechs, person));

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < lineB + lineC && lineA > Math.abs(lineB - lineC)) {
    return true;
  } if (lineB < lineA + lineC && lineB > Math.abs(lineA - lineC)) {
    return true;
  } if (lineC < lineA + lineB && lineC > Math.abs(lineB - lineA)) {
    return true;
  }
  return false;
}

console.log(triangleCheck(10, 19, 10));

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
