// Desafio 10
function techList(techno, name) {
  techno.sort();
  let resulTech = [];
  if (techno.length === 0) {
    return 'Vazio!';
  }
  for (let index = 0; index < techno.length; index += 1) {
    resulTech.push({
      tech: techno[index],
      name,
    });
  }
  return resulTech;
}
let tec = ['JS', 'Angular', 'React', 'HTML', 'CSS'];
let nome = 'Marcelo';
console.log(techList(tec, nome));

// Desafio 11
function repeatNumber(phone) {
  let repeat = {};
  for (let index = 0; index < phone.length; index += 1) {
    if (repeat[phone[index]]) {
      repeat[phone[index]] += 1;
    } else {
      repeat[phone[index]] = 1;
    }
  }
  for (let index2 in repeat) {
    if (repeat[index2] >= 3) {
      return true;
    }
  }
}
function checkNumber(phone) {
  for (let index in phone) {
    if (phone[index] < 0 || phone[index] > 9) {
      return true;
    }
  }
}
function generatePhoneNumber(phone) {
  if (phone.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  if (repeatNumber(phone) || checkNumber(phone)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  let result = '';
  for (let pos = 0; pos < phone.length; pos += 1) {
    result += phone[pos];
  }
  return `(${result.slice(0, 2)}) ${result.slice(2, 7)}-${result.slice(7, 11)}`;
}

let phoneNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1];
console.log(generatePhoneNumber(phoneNumber));

// Desafio 12
function triangleCheck(side1, side2, side3) {
  let testFirst = side1 > side2 + side3 || side2 > side1 + side3 || side3 > side1 + side2;
  let testSec = side1 < Math.abs(side2 - side3) || side2 < Math.abs(side1 - side3) || side3 < Math.abs(side1 - side2);
  let thirdTest = side1 < side2 + side3 && side1 > Math.abs(side2 - side3) || side2 < side1 + side3;
  let fourTest = side2 > Math.abs(side1 - side3) || side3 < side2 + side1 && side3 > Math.abs(side2 - side1);
  if ((testFirst) && (testSec)) {
    return false;
  }
  if (thirdTest && fourTest) {
    return true;
  }
}
console.log(triangleCheck(10, 14, 8));
// Desafio 13
function hydrate(drinks) {
  // seu código aqui
  let EnterDrink = drinks;
  let numbers = EnterDrink.match(/\d+/g).map(Number);
  let sum = 0;
  for (let index = 0; index < numbers.length; index += 1) {
    sum += numbers[index];
  }
  if (sum === 1) {
    return `${sum} copo de água`;
  }
  return `${sum} copos de água`;
}
console.log(hydrate('1 cachaça'));

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
