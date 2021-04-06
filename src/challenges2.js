// Desafio 10
function techList(arrayTech, name) {
  if (arrayTech.length === 0) {
    return 'Vazio!';
  }
  let newArrayTech = [];
  arrayTech = arrayTech.sort();
  for (let index = 0; index < arrayTech.length; index += 1) {
    newArrayTech.push({
      tech: arrayTech[index],
      name,
    });
  }
  return newArrayTech;
}
console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));
console.log(techList([], 'Lucas'));

// Desafio 11
function generatePhoneNumber() {

}

// Desafio 12
function triangleCheck() {

}

// Desafio 13
function hydrate() {

}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
