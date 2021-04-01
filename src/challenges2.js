// Desafio 10
function newListSort(newList) {
  newList.sort(function (a, b) {
    if (a.tech > b.tech) { return 1; }
    if (a.tech < b.tech) { return -1; }
    return 0;
  });
  return newList;
  // Para implementar essa função, utilizei o tutorial dessa url:(https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort). Mais especificamente, a parte que explica como ordenar objetos a partir do valor de uma de suas propriedades utilizando uma função de comparação no comando sort. Tal função compara valores de uma mesma propriedade dos objetos e retorna 0, 1 ou -1. Dependendo do tipo do retorno, a função altera ou não a ordem dos objetos.
}

function techList(arrayTech, name) {
  let newList = [];
  for (let index = 0; index < arrayTech.length; index += 1) {
    let objetc = {
      tech: arrayTech[index],
      nome: name,
    };
    newList.push(objetc);
  }
  console.log(newListSort(newList));
}

techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas');

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
