// Desafio 10
function techList(array, nome) {
  // Criação de variáveis para armazenar info
  let newArr = [];
  let objNew = {};
  // Checar se o array tem conteudo
  if (array.length === 0) {
    return 'Vazio!';
  }
  // Colocar em ordem alfabetica
  array = array.sort();
  // Criação do conteudo do objNew
  for (let i = 0; i < array.length; i += 1) {
    objNew = {
      tech: array[i],
      name: nome,
    };
    newArr.push(objNew);
  }
  return newArr;
}
console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Thyago'));
console.log(techList(['Python'], 'Thyago'));
console.log(techList([], 'Thyago'));

// Desafio 11
function counterRepeat (array){
  let checker = array.reduce(function (allNumbers, number){
    if (number in allNumbers){
      allNumbers[number] += 1;
    } else {
      allNumbers[number] = 1;
    }
    return allNumbers;
  }, {});
  console.log(checker);
}
console.log(counterRepeat([1, 2, 3, 3, 3, 3, 7, 8, 9, 0, 1]));

function generatePhoneNumber(array) {
  let code = [];
  let first = [];
  let second = [];
  for (let i = 0; i < array.length; i += 1) {
    if (array.length !== 11) {
      return 'Array com tamanho incorreto.';
    }
    if (array[i] < 0 || array[i] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    if (i >= 0 && i < 2) {
      code += array[i];
    }
    if (i >= 2 && i < 7) {
      first += array[i];
    }
    if (i >= 7 && i <= 10) {
      second += array[i];
    }
  }
  let phone = `(${code}) ${first}-${second}`;
  return phone;
}
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 0]));
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, -1]));
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 11]));
console.log(generatePhoneNumber([1, 2, 3, 3, 3, 3, 7, 8, 9, 0, 1]));

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let lineAComp = Math.abs(lineA);
  let lineBComp = Math.abs(lineB);
  let lineCComp = Math.abs(lineC);
  if (lineAComp > lineBComp + lineCComp) {
    return false;
  } else if (lineBComp > lineAComp + lineCComp) {
    return false;
  } else if (lineCComp > lineBComp + lineAComp) {
    return false;
  } 
  return true;
}
console.log(triangleCheck(10, 14, 8));
console.log(triangleCheck(10, 1, 8));

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
