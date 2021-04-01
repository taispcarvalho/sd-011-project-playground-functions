// Desafio 10
function techList(techno, name) {
  techno.sort();
  let resulTech = [];
  if (techno.length === 0) {
    return 'Vazio!';
  }
  for (let index = 0; index < techno.length; index += 1) {
    resulTech.push({ tech: techno[index], name: name });
  }
  return resulTech;
}
let tec = ['JS', 'Angular', 'React', 'HTML', 'CSS'];
let nome = 'Marcelo';
console.log(techList(tec, nome));
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
