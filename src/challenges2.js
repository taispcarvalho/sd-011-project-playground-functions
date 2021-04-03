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
function generatePhoneNumber() {
  // seu código aqui
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
