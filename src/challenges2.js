// Desafio 10
// seu código aqui
function techList(techs, nameList) {
  techs.sort();
  let listTech = [];
  for (let index = 0; index < techs.length; index += 1) {
    let list = {
      tech: techs[index],
      name: nameList,
    };
    listTech.push(list);
  }
  if (listTech.length === 0) {
    return 'Vazio!';
  }
  return listTech;
}

// Desafio 11
function repeatNum(numbers) {
  let repeat = 0;
  let repeatTimes = 0;
  let repeat3 = false;
  for (let index in numbers) {
    for (let j in numbers) {
      if (numbers[index] === numbers[j]) {
        repeat += 1;
      }
    }
    if (repeat > repeatTimes) {
      repeatTimes += 1;
    }
    repeat = 0;
  }
  if (repeatTimes >= 3) {
    repeat3 = true;
  }
  return repeat3;
}

function generatePhoneNumber(phoneNumber) {
  // seu código aqui
  let ddd = ['('];
  let firstPart = [];
  let secondPart = [];
  let repeat = repeatNum(phoneNumber);
  if (phoneNumber !== 11) {
    return 'Array com tamanho incorreto';
  }
  for (let index = 0; index < 11; index += 1) {
    if (phoneNumber[index] < 0 || phoneNumber > 9 || repeat === true) {
      return 'não é possível gerar um número de telefone com esses valores';
    } 
  }
  for (let index = 0; index < 2; index += 1) {
    ddd.push(phoneNumber[index]);
  }
  ddd.push(')');
  for (let index = 2; index < 7; index += 1) {
    firstPart.push(phoneNumber[index]);
  }
  for (let index = 7; index < 11; index +=1) {
    secondPart.push(phoneNumber[index]);
  }
  let completeNumber = ddd.join('') + ' ' + firstPart.join('') + '-' + secondPart.join('');
  
  return completeNumber;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  // if (lineA + lineB < Math.abs(lineC) || lineA - lineB > Math.abs(lineC) || lineB - lineA > Math.abs(lineC)) {
  //   return false;
  // } else if (lineB + lineC < Math.abs(lineA) || lineB - lineC > Math.abs(lineA) || lineC - lineB > Math.abs(lineA)) {
  //   return false;
  // } else if (lineA + lineC < Math.abs(lineB) || lineA - lineC > Math.abs(lineB) || lineC - lineA > Math.abs(lineB)) {
  //   return false;
  // } else {
  //   return true;
  // }
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
