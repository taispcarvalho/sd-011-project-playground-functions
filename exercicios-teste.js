const name = "Lais";
const birthCity = "São Paulo";
let birthYear = 1992;
let teste; //essa variável fica indefinida

console.log(name + " " + birthCity + " " + birthYear);

birthYear = 2020; //let é alteravel, const não

//próximo exercício

let patientId = 50;
let isEnrolled = true;
const patientInfo = {
  //vira objeto
  firstName: "Ana",
  lastName: "Santos",
};
const patientEmail = "ana@email.com";

console.log(typeof patientId);
console.log(typeof patientAge);

let base = 5;
let altura = 8;
let area = base * altura;
let perimetro = base * 2 + altura * 2;
console.log(area);
console.log(perimetro);

//if e else - estrutura básica

let trybe = 19;

if (trybe >= 14 && trybe < 14.4) {
  console.log("Esquenta");
} else if (trybe >= 16.3 && trybe < 17.5) {
  console.log("Aula ao Vivo");
} else {
  console.log("Fora dos Momentos Síncronos");
}
//
let testResult = 79;

if (testResult >= 80) {
  console.log("Parabéns, você foi aprovade!");
} else if (testResult < 80 && testResult >= 60) {
  console.log("Você está na nossa lista de espera.");
} else {
  console.log("Você foi reprovado.");
}

//Switch e Case

let trafficLight = "azul";

switch (trafficLight) {
  case "vermelho":
    console.log("pare");
    break;

  case "amarelo":
    console.log("atenção");
    break;

  case "verde":
    console.log("siga em frente");
    break;

  default:
    console.log("valor não identificado");
}
//próximo exercício

let a = 29;
let b = 27;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
//
let numberOne = 23;
let numberTwo = 98;
let numberThree = 87;

if (numberOne > numberTwo && numberThree) {
    console.log (numberOne);
} else if (numberTwo > numberOne && numberThree) {
    console.log (numberTwo);
} else if (numberThree > numberOne && numberTwo) { 
    console.log (numberThree);
} else {
    console.log ('Eles são iguais')
}
//
let number = -78;

if (number > 0) {
    console.log ('positive');
} else if (number < 0) {
    console.log ('negative');
} else {
    console.log (zero);
}
//
let angleOne = 65;
let angleTwo = 89;
let angleThree = 153;
let sumAngles = angleOne + angleTwo + angleThree;

if (sumAngles === 180) {
    console.log (true);
} else if (sumAngles < 0) {
    console.log ('invalid');
} else {
    console.log (false);
}
//próximo exercício
//modelo de array:
let pizzas = ['4 queijos', 'frango', 'marguerita', 'palmito'];
console.log ('Menu de sabores: ' + pizzas);
//add mais um sabor no array
pizzas[4] = 'Milho'; //o 4 significa a posição no array que o novo item vai ter, se colocar em uma posição já existente, o novo valor substitui o antetior. Para acesssar sempre o último valor:
pizzas.push('Calabresa');
console.log(pizzas);

console.log(pizzas.length); //vai mostrar a quantidade de elementos dentro de um array

console.log(pizzas.sort()); //vai mostrar o array ordenado, seja ordem alfabética ou numérica

console.log(pizzas[1]); //vai mostrar o elemento dessa posição

pizzas.pop(); //remove o último valor

//mostrar os valores do array como se estivesse fora do array usando um laço de repetição FOR
for (let index = 0; index < pizzas.length; index += 1) {
  console.log(pizzas[index]);
}
//próximo exercício

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];
for (let index = 0; index < groceryList.length; index += 1) {
  console.log(groceryList[index]);
}
// for/of - encontra cada caractere dentro de uma variável. Number - encontra numeros. Letters - encontra letras. Mas apenas para exibir, for of não altera o array
//
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let index = 0; index < numbers.length; index += 1) {
  console.log(numbers[index]);
}
//outro exercicio
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0;
for (let index = 0; index < numbers.length; index += 1) {
    result += numbers[index];
}
console.log(result);