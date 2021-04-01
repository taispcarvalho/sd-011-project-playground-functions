// Desafio 10
function newListSort(newList) {
  newList.sort(function (a, b) {
    if (a.tech > b.tech) { return 1; }
    if (a.tech < b.tech) { return -1; }
    return 0;
  });
  return newList;
  // Para implementar essa função, utilizei o tutorial dessa url:(https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort). Mais especificamente, a parte que explica como ordenar objetos a partir do valor de uma de suas propriedades utilizando uma função de comparação no comando sort. E dessa url: (https://pt.stackoverflow.com/questions/46600/como-ordenar-uma-array-de-objetos-com-array-sort) que explica como a função funciona e dá alguns exemplos de como fazer a ordenação.
}

function techList(arrayTech, name) {
  let newList = [];
  if (arrayTech.length === 0) { return 'Vazio!'; }
  for (let index = 0; index < arrayTech.length; index += 1) {
    let objetc = {
      tech: arrayTech[index],
      nome: name,
    };
    newList.push(objetc);
  }
  return newListSort(newList);
}

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
