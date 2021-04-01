// Desafio 10
function techList(arrayTechs, name) {
  if (arrayTechs.length === 0) return 'Vazio!';
  let returnTechs = [];
  arrayTechs = arrayTechs.sort();

  for (let tech of arrayTechs) {
    returnTechs.push({ tech, name });
  }
  return returnTechs;
}

let array10 = ['React', 'Node JS', 'Phyton', 'Rest', 'CSS'];
let name10 = 'Ivaldo';
console.log(techList(array10, name10));

// Desafio 11

function zeroNove(number) {
  return number < 0 || number > 9;
}

function maiorIgualTres(arr, number) {
  let repeat = 0;
  for (let index = 0; index < arr.length; index += 1) {
    if (number === arr[index]) {
      repeat += 1;
    }
    if (repeat >= 3) return true;
  }
  return false;
}

function generatePhoneNumber(phone) {
  if (phone.length !== 11) return "Array com tamanho incorreto.";

  for (let index = 0; index < phone.length; index += 1) {
    if (zeroNove(phone[index]) || maiorIgualTres(phone, phone[index])) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }

  let numPhone = '(';
  for (let index = 0; index < phone.length; index += 1) {
    if (numPhone.length === 3) {
      numPhone += ') ';
    } else if (numPhone.length === 10) {
      numPhone += '-';
    }
    numPhone += phone[index];
  }
  return numPhone;
}

let phone = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1];
console.log(generatePhoneNumber(phone));

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA + lineB > lineC && lineC > Math.abs(lineA - lineB)) {
    return true;
  }
  return false;  
}
console.log(triangleCheck(10, 14, 8));

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
