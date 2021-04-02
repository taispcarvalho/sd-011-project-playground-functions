// Desafio 10
function techList(techno, name) {
  techno.sort();
  let resulTech = [];
  if (techno.length === 0) {
    return 'Vazio!';
  }
  for (let index = 0; index < techno.length; index += 1) {
    resulTech.push({ tech: techno[index], name: name });
  }
  return resulTech;
}
let tec = ['JS', 'Angular', 'React', 'HTML', 'CSS'];
let nome = 'Marcelo';
console.log(techList(tec, nome));

// Desafio 11
function generatePhoneNumber(phone) {
  if (phone.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let index in phone) {
    if (phone[index] < 0 || phone[index] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  let idx = [];
  let element = isRepeatNumber(phone);
  let nIdx = phone.indexOf(element);
  while (nIdx !== -1) {
    idx.push(nIdx);
    nIdx = phone.indexOf(element, nIdx + 1);
  }
  if (idx.length >= 3) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  let result = '';
  for (let pos = 0; pos < phone.length; pos += 1) {
    result += phone[pos];
  }
  return `(${result.slice(0, 2)}) ${result.slice(2, 7)}-${result.slice(7, 11)}`;

}

function isRepeatNumber (rephone) {
  let largeNumbCount = null;
  let moreCount = -1;
  for (let index = 0; index < rephone.length; index += 1) {
    let count = 1;
    for (let index2 = index + 1; index2 < rephone.length; index2 += 1) {
      if (rephone[index] === rephone[index2]) {
        count += 1;
      }
      if (count > moreCount) {
        largeNumbCount = rephone[index];
        moreCount = count;
      }
    }
  }
  return largeNumbCount;
}
let phoneNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1];
console.log(generatePhoneNumber(phoneNumber));

// Desafio 12
function triangleCheck(side1, side2, side3) {
  if ((side1 > side2 + side3 || side2 > side1 + side3 || side3 > side1 + side2) && (side1 < Math.abs(side2 - side3) || side2 < Math.abs(side1 - side3) || side3 < Math.abs(side1 - side2))) {
    return false;
  }
  if (side1 < side2 + side3 && side1 > Math.abs(side2 - side3) || side2 < side1 + side3 && side2 > Math.abs(side1 - side3) || side3 < side2 + side1 && side3 > Math.abs(side2 - side1)) {
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
  return `${sum} copos de água`;
}
console.log(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho'));

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
