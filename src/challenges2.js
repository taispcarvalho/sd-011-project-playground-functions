// Desafio 10
//referencia: heyset (Matheus "Set" Inacio)
function techList(arrayTech, nameTech) {
  let arrayResult = [];
  let organizedArray = arrayTech.sort();
  for(let index = 0; index < arrayTech.length; index += 1){
    arrayResult.push(
      {
        tech: organizedArray[index],
        name: nameTech,
      }
    )
  }
  if (arrayTech === 0){
    arrayResult = 'Vazio!';
  }
return arrayResult
}
// Desafio 11
function generatePhoneNumber(numberPhone) {
  let numberOrganized = "(";
  let count = 1;
  for (let index = 0; index < numberPhone.length; index+=1){
    for (let index2 = 1; index2 < numberPhone.length; index2+=1){
      if (numberPhone[index] === numberPhone[index2]){
      count += 1;
      }
    }
    if (count >= 3){
      numberOrganized = "não é possível gerar um número de telefone com esses valores";
      break;
    } else {
      count = 1;
    }
    if (numberPhone[index] < 0 || numberPhone[index] > 9){
      numberOrganized = "não é possível gerar um número de telefone com esses valores";
      break;
    }
    if (index === 2){
    numberOrganized += ') ';
   }
   if (index === 7){
     numberOrganized += '-';
   }
   numberOrganized += (numberPhone[index]);
  }
  if (numberPhone.length !== 11){
    numberOrganized = "Array com tamanho incorreto.";
  }
return numberOrganized
}
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]))

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate(string) {
  let waterCup = string.replace(/\D/g, "");
  return console.log(waterCup + ' copos de água')
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
