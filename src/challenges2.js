// Desafio 10
function techList(nametf) {
}
 
// Desafio 11
function generatePhoneNumber(numberArray) {
  let counts = {}
  for (i = 0; i <= numberArray.length; i += 1) {
    if (numberArray[i] < 0 || numberArray[i] > 9) {
    return 'não é possível gerar um número de telefone com esses valores'
    }
    else if (counts[numberArray[i]]) {
    counts[numberArray[i]] += 1;
    } else {
    counts[numberArray[i]] = 1;
    }
  }
  //https://dev.to/huyddo/find-duplicate-or-repeat-elements-in-js-array-3cl3
  for (let prop in counts) {
    if (counts[prop] >= 3) {
    return 'não é possível gerar um número de telefone com esses valores'
    }
  }
  //Filter only numbers from the input
  //https://learnersbucket.com/examples/javascript/how-to-format-phone-number-in-javascript/
  let cleaned = ('' + numberArray).replace(/\D/g, '');
  //Check if the input is of correct length
  let match = cleaned.match(/^(\d{2})(\d{5})(\d{4})$/);
  if (match) {
  return '(' + match[1] + ') ' + match[2] + '-' + match[3]
  }
  else if (numberArray !== 11) {
  return 'Array com tamanho incorreto.'
  }
};
numberArray=[9, 2, 3, 0, 5, ]
console.log(generatePhoneNumber(numberArray))
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
