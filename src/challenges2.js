// Desafio 10
// referencia: heyset (Matheus "Set" Inacio)
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
  if (arrayTech.length === 0){
    arrayResult = 'Vazio!';
  }
return arrayResult
}
// Desafio 11
function generatePhoneNumber(numberPhone) {
  let numberOrganized = "(";
  let count = 0;
  for (let index = 0; index < numberPhone.length; index += 1){
    for (let index2 = 0; index2 < numberPhone.length; index2 += 1){
      if (numberPhone[index] === numberPhone[index2]){
      count += 1;
      }
    }
    if (count >= 3){
      numberOrganized = "não é possível gerar um número de telefone com esses valores";
      break;
    } else {
      count = 0;
    }
    if (numberPhone[index] < 0 || numberPhone[index] > 9){
      numberOrganized = 'não é possível gerar um número de telefone com esses valores';
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
    numberOrganized = 'Array com tamanho incorreto.';
  }
return numberOrganized
}
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]))

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < (lineB + lineC) && lineA > Math.abs(lineB - lineC)) {
    return true
  } else if (lineB < (lineA + lineC) && lineB > Math.abs(lineA - lineC)) {
    return true
  } else if (lineC < (lineB + lineA) && lineC > Math.abs(lineB - lineA)) {
    return true
  } else {
    return false
  }
}

// Desafio 13
function hydrate(string) {
  let numbersArray = string.match(/\d+/g);
  let numberAdiction = 0;
  for (index = 0; index < numbersArray.length; index += 1) {
    numberAdiction += parseInt(numbersArray[index]);
  }
  if (numberAdiction === 1){
    return numberAdiction + ' copo de água'
  } else {
    return numberAdiction + ' copos de água'
  }
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
