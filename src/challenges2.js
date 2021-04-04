// Desafio 10
// para o entendimento desse desafio precisei comparar o código de colegas no slack
// https://trybecourse.slack.com/archives/C01PLFW7347/p1617330837144600
function techList(tech, name) {
  let returnArray = [];
  let orderedTech = tech.sort();
  if (orderedTech.length !== 0) { // retorna em ordem alfabetica
    for (let i in orderedTech) { // pega cada indice da variavel 0 e retorna junto com o nome
      returnArray[i] = {
        tech: `${tech[i]}`,
        name: `${name}`,
      };
    }
  } else {
    return 'Vazio!';
  }
  return returnArray;
}

// Desafio 11
// https://learnersbucket.com/examples/javascript/how-to-format-phone-number-in-javascript/
function phoneNumber(numberArray) {
  // Filter only numbers from the input
  let cleaned = ('' + numberArray).replace(/\D/g, '');
  // Check if the input is of correct length
  let match = cleaned.match(/^(\d{2})(\d{5})(\d{4})$/);
  if (match) {
    return '(' + match[1] + ') ' + match[2] + '-' + match[3];
  }
  return numberArray;
}

// Para esta parte do desafio utilizei o que aprendi em aula.
function generatePhoneNumber(numberArray) {
  let counts = {};
  if (numberArray.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let i = 0; i <= numberArray.length; i += 1) {
    if (numberArray[i] < 0 || numberArray[i] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    if (counts[numberArray[i]]) {
      counts[numberArray[i]] += 1;
    } else {
      counts[numberArray[i]] = 1;
    }
  }
  // https://dev.to/huyddo/find-duplicate-or-repeat-elements-in-js-array-3cl3
  for (let prop in counts) {
    if (counts[prop] >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  numberArray = phoneNumber(numberArray);
  return numberArray;
}

// Desafio 12
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < (lineB + lineC) && Math.abs(lineA) > lineB && lineC) {
    return true;
  }
  if (lineB < (lineA + lineC) && Math.abs(lineB) > lineA && lineC) {
    return true;
  }
  if (lineC < (lineA + lineB) && Math.abs(lineC) > lineA && lineB) {
    return true;
  }
  return false;
}

// Desafio 13
function hydrate(drinks) {
  let drinksReturn = /\d+/g;
  let cupsOfWater = 0;
  let totalDrinks = drinks.match(drinksReturn);
  for (let i = 0; i < totalDrinks.length; i +=1) {
    cupsOfWater += + totalDrinks[i];
  }
  if (cupsOfWater === 1) {
    return cupsOfWater + ' copo de água';
  }
  return cupsOfWater + ' copos de água';
}
drinks = '2 shots de tequila, 2 cervejas e 1 corote'
console.log(hydrate(drinks))

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
