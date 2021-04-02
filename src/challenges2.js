// Desafio 10
//let lista = ["React", "Jest", "HTML", "CSS", "JavaScript"];
//let nome = "Wilquer";
function techList(nome,lista) {
  lista=lista.sort()
  if(lista.length == 0){
    return ("'Vazio!'");
  } else {
    for(let index = 0; index <= lista.length - 1; index += 1) {
      let arrObj = [objeto = {
          tech: lista[index],
          name: nome
        }]
    ///console.log(arrObj);
    return (arrObj);
      //console.log('"'+objeto.tech +'"' + "\n" + '"'+ objeto.name+ '"');
      }
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
