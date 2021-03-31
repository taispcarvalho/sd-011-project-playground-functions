// Desafio 10
function techList(technology, userName) {
  if (technology.length === 0) {
    return 'Vazio!';
  }

  let orderTech = technology.sort();
  let listTech = [];

  for (let currTecnology of orderTech) {
    listTech.push({
      tech: currTecnology,
      name: userName,
    });
  }

  return listTech;
}

// Desafio 11
function numbersNotAccept(arr) {
  let noAccept = false;

  for (let currNumber of arr) {
    if (currNumber < 0 || currNumber > 9) {
      noAccept = true;
    }
  }

  return noAccept;
}

function countRepeatNumber(arr) {
  let counts = {};
  let repeatNum = false;

  arr.forEach(function (index) {
    counts[index] = (counts[index] || 0) + 1;
  });

  for (let property in counts) {
    if (counts[property] >= 3) {
      repeatNum = true;
    }
  }
  return repeatNum;
}

function generatePhoneNumber(arr) {
  if (arr.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  if (numbersNotAccept(arr) || countRepeatNumber(arr)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }

  let addNum = arr.join('');
  let phoneNumber = `(${addNum.substring(0, 2)}) ${addNum.substring(2, 7)}-${addNum.substring(7)}`;

  return phoneNumber;
}

// Desafio 12
function sum(num1, num2) {
  return Math.abs(num1) + Math.abs(num2);
}

function triangleCheck(lineA, lineB, lineC) {
  return sum(lineA, lineB) > lineC && sum(lineA, lineC) > lineB && sum(lineB, lineC) > lineA;
}

// Desafio 13
function hydrate(str) {
  let textNumbers = str.match(/\d+/g);
  let interger = textNumbers.map((count) => parseInt(count, 10));
  let sumNumbers = interger.reduce((acc, curr) => acc + curr);

  if (sumNumbers === 1) {
    return '1 copo de água';
  }
  return `${sumNumbers} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
