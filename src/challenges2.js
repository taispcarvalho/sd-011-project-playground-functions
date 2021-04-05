// Desafio 10
function techList(techName, namePerson) {
  techName.sort();
  let outputArray = [];
  let obj = {};

  for (let index = 0; index < techName.length; index += 1){
    obj = {
      tech: techName[index],
      name: namePerson
    }; 
    outputArray.push(obj);
  }
  if (techName.length <= 0){
    return 'Vazio!';
  }

  return outputArray;
}
console.log(techList(['tech', 'css'], 'Lucas'));

// Desafio 11
function generatePhoneNumber(phoneNumber) {
  // seu código aqui
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let triangle = false;

  if (lineC < lineA + lineB && lineC > Math.abs(lineA - lineB)){
    triangle = true;
  } 

  return triangle;
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
