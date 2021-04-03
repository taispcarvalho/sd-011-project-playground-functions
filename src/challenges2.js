// Desafio 10
function techList(techname, nome) {
  let tech = techname.sort();
  let output = [];
  if (tech.length === 0) {
    return 'Vazio!';
  }
  for (let index = 0; index < tech.length; index += 1) {
    let object = {
      tech: String,
      name: String,
    };
    let objeto = Object.create(object);
    objeto.tech = tech[index];
    objeto.name = nome;
    output.push(objeto);
  } return output;
}

// Desafio 11
// Função auxiliar -> Verifica quant de repetições
function checkRepeat(array) {
  for (let index = 0; index < array.length; index += 1) {
    let contador = 0;
    for (let index2 = 0; index2 < array.length; index2 += 1) {
      if (contador >= 3) {
        return true;
      }
      if (array[index] === array[index2]) {
        contador += 1;
      }
    }
  } return false;
}
// Função auxiliar -> Verifica valores maior que 9 e menor que 0
function checkValues(array) {
  for (let index in array) {
    if (array[index] < 0 || array[index] > 9) {
      return true;
    }
  } return false;
}
// Função Auxiliar -> Verifica tamanho do array
function checkLength(array) {
  return (array.length !== 11);
}
function generatePhoneNumber(array) {
  let arrayPhoneNumber = ['('];
  let phoneNumber = '';
  if (checkRepeat(array) || checkValues(array)) {
    return 'não é possível gerar um número de telefone com esses valores';
  } if (checkLength(array)) {
    return 'Array com tamanho incorreto';
  }
  arrayPhoneNumber = arrayPhoneNumber.concat(array);
  arrayPhoneNumber.splice(3, 0, ')');

  for (let index = 0; index < arrayPhoneNumber; index += 1) {
    phoneNumber += arrayPhoneNumber[index];
  }
  return phoneNumber;
}

// Desafio 12
// lado1 < lado2 + lado3 && lado > abs(lado2 - lado3)
function triangleCheck(lineA, lineB, lineC) {
  return (lineA < lineB + lineC && lineA > Math.abs(lineB - lineC));
}

// Desafio 13
function checkNumber(string) {
  return (string - (string - 1) === 1);
}

function hydrate(frase) {
  let frase2 = frase.replace(/ /g, '');
  let quant = 0;
  let agua = '';

  for (let index = 0; index < frase2.length; index += 1) {
    if (checkNumber(frase2[index])) {
      quant += Number(frase2[index]);
    } else if (quant <= 1) {
      agua = ' copo de água';
    } else {
      agua = ' copos de água';
    }
  } return quant + agua;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
