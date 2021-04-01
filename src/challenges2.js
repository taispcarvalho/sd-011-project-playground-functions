// Desafio 10
function techList(techs, name) {
  if (techs.length <= 0) return 'Vazio!';
  let results = [];
  techs = techs.sort();
  for (let tech of techs) {
    results.push({
      tech,
      name,
    });
  }
  return results;
}
//  results = []
//  results = ['React', 'Jest', 'HTML', 'CSS', 'JavaScript']
//  name = 'Leandro'
//  console.log(techList(results,name))

// Desafio 11
function verificarDuplicados(array) {
  let count = {};
  array.forEach (function(i) { count[i] = (count[i] || 0) + 1; });
  return count;
}
function generatePhoneNumber(array) {
  let format = '(xx) xxxxx-xxxx';
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  let obj = verificarDuplicados(array);
  for (const property in obj) {
    if (obj[property] >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] < 0 || array[i] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    format = format.replace('x', array[i]);    
  }
  return format;
}
// console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));

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
