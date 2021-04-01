// Desafio 10
/* 10 - Crie uma função de Lista de tecnologias
Crie uma função que recebe um array de nomes de tecnologias que você quer aprender. Essa função deve receber também um segundo parâmetro chamado name com um nome. 
Para cada tecnologia no array, crie um objeto com a seguinte estrutura:
{
  tech: "NomeTech",
  name: name
} 
Caso o array venha vazio sua função deve retornar 'Vazio!'*/
function techList(techArray, name) {
  let objectArray = [];
  let arraySorted = techArray.sort();
  for ( let index = 0; index < arraySorted.length; index += 1){
    let object = {
      tech: arraySorted[index],
      name
    }
    objectArray.push(object);
  }
  return (techArray.length === 0) ? 'Vazio!' : objectArray;
}
/* console.log(techList([],"Lucas")); */
console.log(techList(['React','Jest', 'HTML', 'CSS', 'JavaScript'],'Lucas'));
/* O que será verificado:
Retorne uma lista de objetos ordenados quando é passada uma lista com 5 tecnologias deve
Retorne a mensagem de erro 'Vazio!' quando a lista tiver com 0 tecnologias
Teste: 
 */



// Desafio 11--------------------------------------------------------------
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
