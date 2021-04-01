// Desafio 10 - referencia: https://www.edsonemiliano.com.br/blog/como-ordenar-uma-array-de-objetos-com-javascript-sort/#:~:text=Caso%20voc%C3%AA%20tenha%20um%20array,usar%20o%20m%C3%A9todo%20sort().&text=return%20(a.,nome%20%3E%20b.
function techList(techNames, name) {

  let infoTech = {tech: '', name:''}
  let completeTech = [];

  if(techNames.length != 0) {
    for(let index = 0; index < techNames.length; index += 1) {
      infoTech = {tech: techNames[index],name: name}
      completeTech.push(infoTech);
    }
  } else { 
    return 'Vazio!';
  }
  return completeTech.sort((a,b) => (a.tech >b.tech ? 1 : -1));
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
