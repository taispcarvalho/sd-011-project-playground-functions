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

function techList(arrayTech, nome) {
  let newList = [];
  if (arrayTech.length === 0) { return 'Vazio!'; }
  for (let index = 0; index < arrayTech.length; index += 1) {
    let objetc = {
      tech: arrayTech[index],
      name: nome,
    };
    newList.push(objetc);
  }
  return newListSort(newList);
}

// Desafio 11
function verifyNumber(array) {
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] < 0 || array[index] > 9) {
      return false;
    }
  }
  return true;
}

function verifyRepeat(array) {
  let counter = 0;
  for (let index = 0; index < array.length; index += 1) {
    for (let index2 = 0; index2 < array.length; index2 += 1) {
      if (array[index2] === array[index]) {
        counter += 1;
      }
    }
    if (counter >= 3) {
      return false;
    }
    counter = 0;
  }
  return true;
}

function generatePhoneNumber(array) {
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  if (!verifyNumber(array) || !verifyRepeat(array)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  let firstPart = `(${array[0]}${array[1]}) `;
  let secondPart = `${array[2]}${array[3]}${array[4]}${array[5]}${array[6]}-`;
  let thirdPart = `${array[7]}${array[8]}${array[9]}${array[10]}`;
  let phone = firstPart + secondPart + thirdPart;
  return phone;
}

// Desafio 12
function lineTest1(l1, l2, l3) {
  if (l1 > l2 + l3 || l2 > l1 + l3 || l3 > l1 + l2) {
    return false;
  }
  return true;
}

function lineTest2(l1, l2, l3) {
  if (l1 < Math.abs(l2 - l3) || l2 < Math.abs(l1 - l3) || l3 < Math.abs(l1 - l2)) {
    return false;
  }
  return true;
}

function triangleCheck(lineA, lineB, lineC) {
  if (!lineTest1(lineA, lineB, lineC) || !lineTest2(lineA, lineB, lineC)) { return false; }
  return true;
}

// Desafio 13
function countCupsOfWater(string) {
  let total = 0;
  let numbers = string.match(/\d+/g);
  let numbersConverted = [];
  for (const num of numbers) {
    numbersConverted.push(parseInt(num, 10));
  }
  for (const num of numbersConverted) {
    total += num;
  }
  return total;
  // Para implementar a primeira parte desta função busquei informações neste link: (https://codereview.stackexchange.com/questions/115885/extract-numbers-from-a-string-javascript), em que o problema era extrair os numeros de uma string, e a resposta dada foi a de utilizar um comando do regex como parâmetro da função string.match para realizar a tarefa.
}

function hydrate(string) {
  let cupsOfWater = countCupsOfWater(string);
  if (cupsOfWater === 1) {
    return (`${cupsOfWater} copo de água`);
  }
  if (cupsOfWater > 1) {
    return (`${cupsOfWater} copos de água`);
  }
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
