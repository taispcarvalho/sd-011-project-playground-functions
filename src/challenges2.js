// Desafio 10
function techList(arrayTechs, name) {
  if (arrayTechs === ' ')
    return 'Vazio';

  let returnTechs = [];
  arrayTechs = arrayTechs.sort();

  for (let tech of arrayTechs) {
    returnTechs.push({tech, name});
  }
return returnTechs;
}

let array10 = ['React', 'Node JS', 'Phyton', 'Rest', 'CSS'];
let name10 = 'Ivaldo';
console.log(techList(array10, name10));

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
