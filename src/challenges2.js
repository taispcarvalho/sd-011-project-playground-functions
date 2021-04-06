// Desafio 10
function techList(technologies, name) {
  let arrayOfTechonlogies = [];

  if (technologies.length === 0) return 'Vazio!';

  for (let index = 0; index < technologies.length; index += 1) {
    arrayOfTechonlogies.push({ tech: technologies[index], name });
  }
  return arrayOfTechonlogies;
}
let list = ['Unix', 'bash', 'git', 'Javascript', 'MongoDB'];
console.log(techList(list, 'Dário'));

// Desafio 11
function generatePhoneNumber() {

}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate(string) {
  let regExp = /\D+/g;
  let newString = Array.from(string.replace(regExp, ''));
  let waterCups = 0;
  for (let number of newString) {
    number = Number(number);
    waterCups += number;
  }
  return waterCups;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
