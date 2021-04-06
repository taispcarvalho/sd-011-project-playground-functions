// Desafio 10
// Neste desafio olhei códigos de colegas e procurei o que estava mais próximo com a minha lógica e encontrei o do Julio Filizzola.

function techList(techName, devName) {
  let technologies = [];
  for (let index in techName.sort()) {
    if ({}.hasOwnProperty.call(techName, index)) {
      technologies[index] = {
        tech: techName[index],
        name: devName,
      };
    }
  }
  if (technologies.length === 0) {
    return 'Vazio!';
  }
  return technologies;
}
console.log(techList(['Java', 'Js'], ['Roge']));

// Desafio 11
// Function to check if the number repeat more than 3 times
function ifRepeat(number, phone) {
  let repeat = 0;
  for (let index = 0; index < phone.length; index += 1) {
    if (number === phone[index]) {
      repeat += 1;
    }
    if (repeat >= 3) {
      return true;
    }
  }
  return false;
}
// Functions to check if the length is more than eleven digits
function isEleven(number) {
  return number < 0 || number > 9;
}
function realyIs(number) {
  if (number.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let index = 0; index < number.length; index += 1) {
    if (ifRepeat(number[index], number) || isEleven(number[index])) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
}
// Desafio 11
function generatePhoneNumber(phone) {
  if (realyIs(phone)) {
    return realyIs(phone);
  }
  let phoneNumber = '(';
  for (let number = 0; number < phone.length; number += 1) {
    if (phoneNumber.length === 3) {
      phoneNumber += ') ';
    } else if (phoneNumber.length === 10) {
      phoneNumber += '-';
    }
    phoneNumber += phone[number];
  }
  return phoneNumber;
}
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < lineB + lineC && lineB < lineA + lineC && lineC < lineA + lineB) {
    return true;
  }
  return false;
}
console.log(triangleCheck(10, 14, 8));

// Desafio 13
// On this challenge I found some sources in Developer mozilla and W3schools websites.
function hydrate(drinks) {
  drinks = drinks.replace(/\D/g, '');
  let drinkWater = 0;
  for (let index = 0; index < drinks.length; index += 1) {
    drinkWater += Number(drinks[index]);
  }
  if (drinkWater === 1) {
    return `${drinkWater} copo de água`;
  }
  return `${drinkWater} copos de água`;
}
console.log(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho'));

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
