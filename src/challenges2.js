// Desafio 10
function techList(value, oneName) {
  if (value.length === 0) {
    return 'Vazio!';
  } else {
    let ret = [];
    for (let index = 0; index < value.length; index += 1) {
      ret[index] = {
        tech: value.sort()[index],
        name: oneName,
      };
    }
    return ret;
  }
}
// Desafio 11
/* a função que descobre se um número foi repetido por mais de 3 vezes foi obtida utilizando a lógica contida em
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf */
function repetitioCount (array) {
    for (let index = 0; index <10; index += 1) {
    let indexes = [];
    let idx = array.indexOf(index);
    while (idx != -1) {
      indexes.push(idx);
      idx = array.indexOf(index, idx + 1);
    }
    if (indexes.length > 2) {
      return true;
    }
  }
  return false;
}

function wrongNumber(array) {
  for (let number of array) {
    if (number > 9 || number < 0) {
      return true;
    } 
  }
  return false;
}

function generatePhoneNumber(value) {
  if (value.length != 11) {
    return 'Array com tamanho incorreto.';
  } if (wrongNumber(value) || repetitioCount(value)) {
    return "não é possível gerar um número de telefone com esses valores";
  }
  return `(${value[0]}${value[1]}) ${value[2]}${value[3]}${value[4]}${value[5]}${value[6]}-${value[7]}${value[8]}${value[9]}${value[10]}`;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let lineAB = lineA + lineB;
  let lineAC = lineA + lineC;
  let lineBC = lineC + lineB;
  if (lineA >= lineBC || lineB >= lineAC || lineC >= lineAB) {
    return false;
  } if (lineA <= Math.abs(lineB - lineC) || lineB <= Math.abs(lineA - lineC) || lineC <= Math.abs(lineB - lineA)) {
    return false;
  }
  return true;
}

// Desafio 13
function hydrate(array) {
  /*como encontrar números em strings foi retirado de https://stackoverflow.com/questions/10003683/how-can-i-extract-a-number-from-a-string-in-javascript
  como retirar valores de string foi retirado de https://www.tutorialspoint.com/how-to-remove-text-from-a-string-in-javascript*/ 
  let aux = array;
  let sum = 0;
  while (aux.match(/\d+/) != null) {
    sum += parseInt(aux.match(/\d+/));
    aux = aux.substr(aux.match(/\d+/).index +1);
  }
  if (sum === 1) {
    return `${sum} copo de água`;
  } return `${sum} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
