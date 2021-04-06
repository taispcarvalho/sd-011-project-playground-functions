// Desafio 10
/*
  Crie uma função que recebe um array de nomes de tecnologias que você quer aprender. Essa função deve receber também um segundo parâmetro chamado name com um nome.
  Para cada tecnologia no array, crie um objeto com a seguinte estrutura:
  {
    tech: "NomeTech",
    name: name
  }
  Estes objetos devem ser inseridos em uma nova lista em ordem crescente a partir do campo tech no objeto.
  A saída da sua função deve ser uma lista de objetos ordenada pelo campo tech dos objetos com o formato acima.
  Exemplo:
  Entradas da função:
  ["React", "Jest", "HTML", "CSS", "JavaScript"]
  "Lucas"
  // Saída:
  [
    {
      tech: "CSS",
      name: "Lucas"
    },
    {
      tech: "HTML",
      name: "Lucas"
    },
    {
      tech: "JavaScript",
      name: "Lucas"
    },
    {
      tech: "Jest",
      name: "Lucas"
    },
    {
      tech: "React",
      name: "Lucas"
    }
  ]
  Caso o array venha vazio sua função deve retornar 'Vazio!'
  O que será verificado:
  Retorne uma lista de objetos ordenados quando é passada uma lista com 5 tecnologias deve
  Retorne a mensagem de erro 'Vazio!' quando a lista tiver com 0 tecnologias
*/
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

// Desafio 11
/* Crie uma função chamada generatePhoneNumber que receba uma array com 11 números e retorne um número de telefone, respeitando    parênteses, traços e espaços.
  Exemplo: caso o parâmetro da função seja [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1], generatePhoneNumber deverá retornar (12) 34567-8901.
  Se a função receber um array com tamanho diferente de 11, a mesma deve retornar "Array com tamanho incorreto.".
  Caso algum dos números da array seja menor que 0, maior que 9 ou se repita 3 vezes ou mais, generatePhoneNumber deverá retornar a string "não é possível gerar um número de telefone com esses valores".
  O que será verificado:
  Retorne a string "Array com tamanho incorreto." caso o array tenha o tamanho diferente de 11
  Retorne a string "não é possível gerar um número de telefone com esses valores" caso algum dos números da array seja menor que 0
  Retorne a string "não é possível gerar um número de telefone com esses valores" caso algum número da array seja maior que 9
  Retorne a string "não é possível gerar um número de telefone com esses valores" caso algum número da array se repeti 3 vezes ou mais
  Retorne um número de telefone, respeitando parênteses, traços e espaços caso os números da array estejam de acordo com as restrições */
function errorArrayLength(array) {
  // Mensagem se verdadeiro 'Array com tamanho incorreto.'
  return array.length !== 11; // ? true : false;
}
function errorNumber(array) {
  let validationError = false;
  for (let number of array) {
    if (array[number] < 0 || array[number] > 9) {
      validationError = true;
    }
  }
  return validationError;
}
function repeatedNumber(array) {
  // Função feita com consulta a https://dev.to/huyddo/find-duplicate-or-repeat-elements-in-js-array-3cl3.
  let numbers = {};
  for (let index = 0; index < array.length; index += 1) {
    if (numbers[array[index]]) {
      numbers[array[index]] += 1;
    } else {
      numbers[array[index]] = 1;
    }
  }
  for (let variable in numbers) {
    if (numbers[variable] > 2) {
      // // Mensagem se verdadeiro 'não é possível gerar um número de telefone com esses valores'
      return true;
    }
  }
}

function doNumber(array) {
  let phoneNumber = '(';
  phoneNumber += array[0];
  phoneNumber += array[1];
  phoneNumber += ') ';
  phoneNumber += array[2];
  phoneNumber += array[3];
  phoneNumber += array[4];
  phoneNumber += array[5];
  phoneNumber += array[6];
  phoneNumber += '-';
  phoneNumber += array[7];
  phoneNumber += array[8];
  phoneNumber += array[9];
  phoneNumber += array[10];
  return phoneNumber;
}

function generatePhoneNumber(array) {
  let msgLength = 'Array com tamanho incorreto.';
  let msgNumber = 'não é possível gerar um número de telefone com esses valores';

  if (errorArrayLength(array)) {
    return msgLength;
  }
  if (errorNumber(array) || repeatedNumber(array)) {
    return msgNumber;
  }
  return doNumber(array);
}
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8])); // Tamanho incorreto.
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, -9, 0, 1])); // Menor que zero.
console.log(generatePhoneNumber([1, 2, 13, 4, 5, 6, 7, 8, 9, 0, 1])); // maior que 9.
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 7, 7, 0, 1])); // repete numero.
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1])); // Retornar (12) 34567-8901.

// Desafio 12
/* Um triângulo é composto de três linhas: lineA, lineB e lineC. Crie uma função chamada triangleCheck que deverá receber as três linhas como parâmetro e retornar se é possível formar um triângulo com os valores apresentados de cada linha
 Para tanto, tenha em mente algumas considerações:
 Para que seja possível formar um triângulo, é necessário que a medida de qualquer um dos lados seja menor que a soma das medidas dos outros dois e maior que o valor absoluto da diferença entre essas medidas.
 Para obter o valor absoluto de um número em JavaScript, pesquise pela função Math.abs.
 O retorno da sua função deverá ser um booleano.
 Exemplo: o retorno de triangleCheck(10, 14, 8) deverá ser true.
 O que será verificado:
 Retorne false quando a medida de qualquer um dos lados seja maior que a soma das medidas dos outros dois
 Retorne false quando a medida de qualquer um dos lados seja menor que o valor absoluto da diferença entre essas medidas
 Retorne true quando a medida de qualquer um dos lados seja menor que a soma das medidas dos outros dois e maior que o valor absoluto da diferença entre essas medidas */

function sideCheck(lineA, lineB, lineC) {
  // Retorne false quando a medida de qualquer um dos lados seja maior que a soma das medidas dos outros dois
  let test = true;
  if (lineA > (lineB + lineC) || lineB > (lineC + lineA) || lineC > (lineA + lineB)) {
    test = false;
  }
  return test;
}

function diferenceBetweenCheck(lineA, lineB, lineC) {
  // Retorne false quando a medida de qualquer um dos lados seja menor que o valor absoluto da diferença entre essas medidas
  let test = true;
  if (lineA < Math.abs((lineB - lineC))) {
    test = false;
  }
  if (lineB < Math.abs((lineC - lineA))) {
    test = false;
  }
  if (lineC < Math.abs((lineA - lineB))) {
    test = false;
  }
  return test;
}

function triangleCheck(lineA, lineB, lineC) {
  return sideCheck(lineA, lineB, lineC) && diferenceBetweenCheck(lineA, lineB, lineC);  
}
/* console.log(triangleCheck(10,14,8));
console.log(triangleCheck(100,14,8));
console.log(triangleCheck(100,140,8));
console.log(triangleCheck(100,140,80)); */
// Desafio 13
/* Segundo as regras desse bar, a cada bebida deve-se beber um copo de água para que não se tenha ressaca.
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
function extractNumbers(string) {
  // Video utilizado para entender a expressão regular necessaria: https://www.youtube.com/watch?v=pfkkdzeyx6U&ab_channel=AllThingsJavaScript%2CLLC
  let drinkList = string.match(/\d+/g);
  let numberList = [];
  for (let number of drinkList) {
    numberList.push(parseInt(number));
  }
  return numberList;
}

function hydrate(string) {
  let drinkSum = 0;
  for (let number of extractNumbers(string)) {
    drinkSum += number;
  }
  // Montar frase concatenando total de copos e retornar ela para a função
  if (drinkSum === 1) {
    return `${drinkSum} copo de água`;
  }
  if (drinkSum > 1) {
    return `${drinkSum} copos de água`;
  }
}
/* console.log(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho'));
console.log(hydrate('1 cachaça, 5 copos de vinho '));
console.log(hydrate('1 cerveja')); */

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
