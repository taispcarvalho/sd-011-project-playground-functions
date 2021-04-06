// Desafio 10
// Neste desafio olhei códigos de colegas e procurei o que estava mais próximo com a minha lógica e encontrei o do Julio Filizzola.

function techList(techName, devName) {
  let technologies = [];
  for (let index in techName.sort()) {
    if ({}.hasOwnProperty.call(techName, index)) {
      technologies[index] = {
        tech: techName[index],
        name: devName,
      };
    }
  }
  if (technologies.length === 0) {
    return 'Vazio!';
  }
  return technologies;
}
console.log(techList(['Java', 'Js'], ['Roge']));

// Desafio 11
function generatePhoneNumber() {
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < lineB + lineC && lineB < lineA + lineC && lineC < lineA + lineB) {
    return true;
  }
  return false;
}
console.log(triangleCheck(10, 14, 8));

// Desafio 13
function hydrate(liquor = 0, beer = 0, wine = 0) {
  let drinkWater = 0;
  let drinks = liquor + beer + wine;
  for (let index = 0; index < drinks; index += 1) {
    drinkWater = drinks;
  }
  if (drinkWater > 1) {
    drinkWater += ' copos de água';
  } else {
    drinkWater += ' copo de água';
  }
  return drinkWater;
}
console.log(hydrate(1));
console.log(hydrate(1, 5, 1));
console.log(hydrate(1, 7));

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
