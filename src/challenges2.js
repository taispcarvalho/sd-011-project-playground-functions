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
  for (let index = 0; index < arraySorted.length; index += 1) {
    let object = {
      tech: arraySorted[index],
      name,
    };
    objectArray.push(object);
  }
  return techArray.length === 0 ? 'Vazio!' : objectArray;
}
/* console.log(techList([],"Lucas")); */
/* console.log(techList(['React','Jest', 'HTML', 'CSS', 'JavaScript'],'Lucas')); */
/* O que será verificado:
Retorne uma lista de objetos ordenados quando é passada uma lista com 5 tecnologias deve
Retorne a mensagem de erro 'Vazio!' quando a lista tiver com 0 tecnologias
Teste: 
 */

// Desafio 11
/* Crie uma função chamada generatePhoneNumber que receba uma array com 11 números e retorne um número de telefone, respeitando parênteses, traços e espaços.
Exemplo: caso o parâmetro da função seja [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1], generatePhoneNumber deverá retornar (12) 34567-8901. */
function errorArrayLength(array) {
  return array.length !== 11 ? 'Array com tamanho incorreto.' : false;
}
function errorNumber(array) {
  let validationError = 0;
  for (number of array) {
    if (array[number] < 0) {
      validationError += 1;
    }
    if (array[number] > 9) {
      validationError += 1;
    }
  }
  return validationError !== 0
    ? 'não é possível gerar um número de telefone com esses valores'
    : false;
}
function repeatedNumber(array) {
  // Função feita com consulta a https://dev.to/huyddo/find-duplicate-or-repeat-elements-in-js-array-3cl3.
  let numbers = {};
  let msgError;
  let passMsg = false;
  for (let index = 0; index < array.length; index += 1) {
    if (numbers[array[index]]) {
      numbers[array[index]] += 1;
    } else {
      numbers[array[index]] = 1;
    }
  }
  for (let variable in numbers) {
    if (numbers[variable] > 2) {
      msgError = 'não é possível gerar um número de telefone com esses valores';
    }
  }
  return msgError || passMsg;
}
function generatePhoneNumber(array) {
  errorArrayLength(array);
  errorNumber(array);
  repeatedNumber (array);
  let phoneNumber = '(00) 00000-0000';

}


/* 

  
  - Retorne a string "não é possível gerar um número de telefone com esses valores" caso algum número da array se repeti 3 vezes ou mais.
- Retorne um número de telefone, respeitando parênteses, traços e espaços caso os números da array estejam de acordo com as restrições */

/* console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8,]));  Tamanho incorreto*/
/* console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, -9, 0, 1])); Menor que zero*/
/* console.log(generatePhoneNumber([1, 2, 13, 4, 5, 6, 7, 8, 9, 0, 1])); maior que 9*/
/* console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 7, 7, 0, 1])); */
/* console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));  Retornar (12) 34567-8901*/

// Desafio 12----------------------------------------
/* Crie uma função de Condição de existência de um triângulo
Um triângulo é composto de três linhas: lineA, lineB e lineC. Crie uma função chamada triangleCheck que deverá receber as três linhas como parâmetro e retornar se é possível formar um triângulo com os valores apresentados de cada linha
Para tanto, tenha em mente algumas considerações:
Para que seja possível formar um triângulo, é necessário que a medida de qualquer um dos lados seja menor que a soma das medidas dos outros dois e maior que o valor absoluto da diferença entre essas medidas.
Para obter o valor absoluto de um número em JavaScript, pesquise pela função Math.abs.
O retorno da sua função deverá ser um booleano.
Exemplo: o retorno de triangleCheck(10, 14, 8) deverá ser true.
O que será verificado:
Retorne false quando a medida de qualquer um dos lados seja maior que a soma das medidas dos outros dois
Retorne false quando a medida de qualquer um dos lados seja menor que o valor absoluto da diferença entre essas medidas
Retorne true quando a medida de qualquer um dos lados seja menor que a soma das medidas dos outros dois e maior que o valor absoluto da diferença entre essas medidas */
function triangleCheck() {
  // seu código aqui
}

// Desafio 13---------------------------------------------------------
/* Crie uma função de Bem vindo ao Bar da Trybe!
 Segundo as regras desse bar, a cada bebida deve-se beber um copo de água para que não se tenha ressaca.
Crie a função hydrate que recebe uma string, e retorne a sugestão de quantos copos de água você deve beber. Exemplos:

String recebida:
  "1 cerveja"
String retornada:
  "1 copo de água"
String recebida:
  "1 cachaça, 5 cervejas e 1 copo de vinho"
String retornada:
  "7 copos de água"
String recebida:
  "1 cachaça, 5 cervejas e 1 copo de vinho"
String retornada:
  "7 copos de água"

  Notas
Para simplificar, consideraremos que qualquer coisa com um número à frente é uma bebida e que a sua string sempre virá com o formato quantidade (em número) + tipo da bebida.
O número na frente de cada bebida está no intervalo entre 1 e 9.
Dica: pesquise por algo similar a get all integers inside a string js.
O que será verificado:
Retorne a sugestão de quantos copos de água deve-se beber ao receber uma string */

function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
