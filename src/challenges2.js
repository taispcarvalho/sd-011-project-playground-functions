// Desafio 10
function techList(arrayTech, name) {
  if (arrayTech.length <= 0) {
    return 'Vazio!';
  }
  let newArrayTech = [];
  arrayTech = arrayTech.sort();
  for (let tech = 0; tech < arrayTech.length; tech += 1) {
    newArrayTech.push({
      tech: arrayTech[tech],
      name,
    });
  }
  return newArrayTech;
}
console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));
console.log(techList([], 'Lucas'));

// Desafio 11
function checkRepeat(phone) {
  let resp = 0;
  for (let indexNumber = 0; indexNumber < phone.length - 1; indexNumber += 1) {
    for (let compareNumber = indexNumber + 1; compareNumber < phone.length; compareNumber += 1) {
      if (phone[indexNumber] === phone[compareNumber]) {
        resp += 1;
      }
    }
    if (resp >= 2) {
      return true;
    }
    return resp;
  }
}
function checkOtherThanEleven(phone) {
  for (let test = 0; test < phone.length; test += 1) {
    if (phone[test] < 0 || phone[test] > 9) {
      return true;
    }
  }
}
function generatePhoneNumber(phone) {
  if (phone.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  if (checkRepeat(phone) === true || checkOtherThanEleven(phone) === true) {
    return 'não é possível gerar um número de telefone com esses valores';
  }

  let check;
  for (let number = 0; number < phone.length; number += 1) {
    check = `(${phone[0]}${phone[1]}) ${phone[2]}${phone[3]}${phone[4]}${phone[5]}${phone[6]}-${phone[7]}${phone[8]}${phone[9]}${phone[10]}`;
  }
  return check;
}
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2]));
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, -1]));
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 10]));
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 1]));
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));

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
