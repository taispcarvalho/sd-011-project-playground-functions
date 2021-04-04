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
function checkRepeat(repeat) {
  for (let index in repeat) {
    if (repeat[index] >= 3) {
      return true;
    }
  }
}
function repeatNumber(phone) {
  let repeat = {};
  for (let index = 0; index < phone.length; index += 1) {
    if (repeat[phone[index]]) {
      repeat[phone[index]] += 1;
    } else {
      repeat[phone[index]] = 1;
    }
  }
  return checkRepeat(repeat);
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
function conditionCheckOne(a, b, c) {
  if (a > b + c || b > a + c || c > a + b) {
    return true;
  }
}
function conditionCheckTwo(a, b, c) {
  if (a < Math.abs(b - c) || b < Math.abs(a - c) || c < Math.abs(a - b)) {
    return true;
  }
}
function condOne(a, b, c) {
  if (a < b + c && a > Math.abs(b - c)) {
    return true;
  }
}
function condTwo(a, b, c) {
  if (b < a + c && b > Math.abs(a - c)) {
    return true;
  }
}
function condTh(a, b, c) {
  if (c < a + b && c > Math.abs(a - b)) {
    return true;
  }
}
function isFalse(lineA, lineB, lineC) {
  if (conditionCheckOne(lineA, lineB, lineC) || conditionCheckTwo(lineA, lineB, lineC)) {
    return true;
  }
}
function triangleCheck(lineA, lineB, lineC) {
  if (isFalse(lineA, lineB, lineC) === true) {
    return false;
  }
  if (condOne(lineA, lineB, lineC) || condTwo(lineA, lineB, lineC) || condTh(lineA, lineB, lineC)) {
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
