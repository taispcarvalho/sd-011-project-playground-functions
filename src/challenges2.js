// Desafio 10
function techList(arrtec, name) {
  arrtec.sort();
  listaCompleta = [];
  if (arrtec.length > 1) {
    for (let p = 0; p < arrtec.length; p += 1) {
      objList = { name: name, tech: arrtec[p] };
      listaCompleta.push(objList); 
    }
  } else {
    return "Vazio!";
  }
return listaCompleta;
}

// Desafio 11
function generatePhoneNumber(phoneArray) {
  lenPhone = phoneArray.length;
  count = 0;


  if (lenPhone != 11){
    return "Array com tamanho incorreto."
  }


  for (n of phoneArray){
    if (phoneArray[n] < 0 || phoneArray[n] > 9){
      return 'não é possivel gerar um número de telefone com esses valores.'
    }
  }

  count = 0
  foneNumber = [1, 9, 3, 4, 9, 6, 7, 8, 9, 0, 1];
  for (mun in foneNumber){
    for (let n1 = 1; n1 < foneNumber.length; n1 += 1){
      console.log(foneNumber[n1])
      // if (foneNumber[mun] === foneNumber[n1]){
        
      // }
    }
  }


  if (count < 3){
    convertedNumber = toNumber(phoneArray);
  } else {
    return 'não é possivel gerar um número de telefone com esses valores.';
  }


  function toNumber(arrayPhone) {
    arrayPhone.splice(0, 0, "(" );
    arrayPhone.splice(3, 0, ")" );
    arrayPhone.splice(9, 0, "-" );
    completNumber = arrayPhone.toString();
    completNumber = completNumber.replace(/[,]+/g, '');
    return completNumber;
  }
  return convertedNumber;
}

foneNumber = [1, 9, 3, 4, 9, 6, 7, 8, 9, 0, 1];
console.log(generatePhoneNumber(foneNumber));

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < (lineB + lineC) && lineB < (lineA + lineC) && lineC < (lineA + lineB)){
    return true
  } else {
    return false
  }
}

// Desafio 13
function hydrate(waterString) {
  sum = 0
  checkNum = /\d+/g;
  onlyNum = waterString.match(checkNum)

  for (let n = 0; n < onlyNum.length; n += 1){
    integer = parseInt(onlyNum[n])
    sum += integer
  }
  if (sum > 1){
    return sum + " copos de água"
  } else {
    return sum + " copo de água"
  }
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
