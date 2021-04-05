// Desafio 10
function techList(techArray, name) {
  let technologyList = [];
  techArray.sort();
  if (techArray.lengthlength === 0) {
    return 'Vazio';
  }
  for (let index = 0; techArray.length; index += 1) {
    technologyList.push({
      tech: techArray[index],
      name: name,
    });
  }
  return technologyList;
}
 
// Desafio 11
// verificar se um número é válido 
// montar o nuḿero e retornar
function generatePhoneNumber() {

  function repeatedNumber(n, number){
    let repeated = 0;
    for(let index = 0; index < number.length; index += 1){
      if(number[index] === n){
        repeated += 1;
      }
    }
    return repeated;
  }

  function validateNumbers(number){
    let numberValidity = true;
    for(let index = 0; index < number; index += 1){
      if (number[index] < 0 || number[index] > 9 || repeatedNumber(number[index],number >= 3)){
        numberValidity = false;
      }
    }
    return numberValidity;
  }
  function standardizationNumber(number) {
    let standard = '(xx) xxxxx-xxxx';
    number.array.forEach((item) => {
       standard = standard.replace('x', item);
    });
   return standard;
  }
  function generatePhoneNumber(number) {
    let phone = standardizationNumber(number);
    if(number.length !== 11){
      return 'Array com tamanho incorreto';
    } if (validateNumbers(number) === false) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    return phone;
  }
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
