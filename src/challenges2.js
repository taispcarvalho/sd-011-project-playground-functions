// Desafio 10
function techList(tech, name2) {
  let list = [];
  let data = {};
  if (tech.length === 0) {
    return 'Vazio!';
  }
  for (let index = 0; index < tech.length; index += 1) {
    tech = tech.sort();
    data = {
      tech: tech[index],
      name: name2,
    };
    list.push(data);
  }
  return list;
}

// Desafio 11
function generatePhoneNumber(numbers) {
  if (number < 0 || number > 9) return false;{
  }

  return true;
}

function validPhoneNumber(numbers) {
  let status = validNumbers(numbers);
  let count = 0;
  let previous = 0;
  let randomNumbers = numbers.slice(0).sort();

  randomNumbers.forEach((number) => {
    count = previous && previous === number ? count + 1 : 1;

    if (count === 3) status = false;

    previous = number;
  });

  return status;
}

function phoneNumber(numbers) {
  let firstPart= numbers.slice(0, 2).join('');
  let secondPart = numbers.slice(2, 7).join('');
  let thirddPart = numbers.slice(7, 12).join('');

  return `(${firstPart}) ${secondPart}-${thirddPart}`;
}

function generatePhoneNumber2(numbers) {
  if (numbers.length !== 11) return 'Array com tamanho incorreto.';

  if (!validPhoneNumber2(numbers)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }

  return phoneNumber(numbers);
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < lineB + lineC && lineA > Math.abs(lineB - lineC)) {
    return true;
  }
  return false;
}

// Desafio 13
function hydrate(trybeBar) {
  let cupWater = 0;
  trybeBar = trybeBar.match(/[1-9]+/g);
  for (let index = 0; index < trybeBar.length; index += 1) {
    cupWater += parseInt(trybeBar[index], 10);
  }
  if (cupWater === 1) {
    return `${cupWater} copo de água`;
  }
  return `${count} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
