// Desafio 10
 //let lista = ["React", "Jest", "HTML", "CSS", "JavaScript"];
 //let nome = "Wilquer";
function techList(nome,lista) {
  lista.sort();
  if(lista.length==0){
    return ("'Vazio!'");
  } else {
    return ("[");
    for(let index = 0; index <= lista.length; index++) {
      return ('{');
      return ('tech: "' + lista[index]+'",');
      return ('nome: "'+  nome+ '"');
      return ('},');
    }
  return ("]");
  }
}

//techList(nome,lista);

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
