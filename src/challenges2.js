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
  for (n in lenPhone){
    if (lenPhone[n] === lenPhone[n]){
      count += 1
    } else if (count > 3){
      return "não é possível gerar um número de telefone com esses valores"
    } else if (lenPhone[n] < 0){
      return "não é possível gerar um número de telefone com esses valores"
    } else if (lenPhone[n] > 9){
      return "não é possível gerar um número de telefone com esses valores"
    }
  }
  convertedNumber = toNumber(phoneArray)
  function toNumber(arrayPhone){
    arrayPhone.splice(0, 0, "(" );
    arrayPhone.splice(3, 0, ")" );
    arrayPhone.splice(9, 0, "-" );
    completNumber = arrayPhone.toString()
    completNumber = completNumber.replace(/[,]+/g, '');
    return completNumber
  }
  return convertedNumber
}

foneNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1];
console.log(generatePhoneNumber(foneNumber));

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
