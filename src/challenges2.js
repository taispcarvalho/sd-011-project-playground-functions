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
function hydrate(drinks) {
  drinks = drinks.replace(/\D/g, '');
  let drinkWater = 0;
  for (let index = 0; index < drinks.length; index += 1) {
    drinkWater += Number(drinks[index]);
  }
  if (drinkWater === 1) {
    return `${drinkWater} copo de água`;
  }
  return `${drinkWater} copos de água`;
}
console.log(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho'));

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
