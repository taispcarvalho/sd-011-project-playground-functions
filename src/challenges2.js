// Desafio 10
function techList(array, name) {
  // Criação de variáveis para armazenar info
  let newArr = [];
  let objNew = {};
  // Checar se o array tem conteudo
  if (array.length === 0) {
    return 'Vazio!';
  }
  // Colocar em ordem alfabetica
  array = array.sort(function (a, b) {if (a > b) {return 1;}})
  // Criação do conteudo do objNew
  for (let i = 0; i < array.length; i += 1) {
      objNew = {
      tech: array[i],
      name: name
      }
      newArr.push(objNew);
  }
  return newArr;
}
console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], 'Thyago'));
console.log(techList(["Python"], 'Thyago'));
console.log(techList([], 'Thyago'));

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
