// Desafio 10
function techList(techName, namePerson) {
  techName.sort();
  let outputArray = [];

  for (let index = 0; index < techName.length; index += 1){
    outputArray[index] = {
      tech: techName[index],
      name: namePerson
    };
    if (techName === null){
      return 'Vazio!';
    }
  }

  return outputArray;
}

// Desafio 11
function generatePhoneNumber(phoneNumber) {
  // seu código aqui
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
}

// Desafio 13
function hydrate(string) {  
  let separaNumero = string.replace(/[^0-9]/g, "");
  let newArray = separaNumero.split('').map(Number);
  let soma = 0;

  for (let index = 0; index < newArray.length; index += 1){
    soma += newArray[index];
  }

  if (soma === 1){
    return soma + ' copo de água';
  } else {
    return soma + ' copos de água';
  }
  
}
console.log(hydrate('1 cerveja'));

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
