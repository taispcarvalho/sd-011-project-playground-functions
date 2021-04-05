// Desafio 10
function techList(array, name) {
  let listNewObj = [];
  if (array.length > 0) {
    for (let index of array.sort()) {
      listNewObj.push({ tech: index, nome: name });
    }
  } else if (array.length === 0) {
    return 'Vazio!';   
  }
  return listNewObj;
}

console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Victor'));

// Desafio 11
function generatePhoneNumber(array) {
  let counts = 0;
  for (index = 0; index < array.length; index += 1) {
    if ((array.indexOf(array[index])) !== array.lastIndexOf(array[index])) {
      counts += 1;
    } else if (array[index] < 0 || array[index] > 9 || counts > 3) {
      return 'não é possível gerar um número de telefone com esses valores'
    } else if (array.length !== 11) {
      return 'Array com tamanho incorreto.'
    } else if (array.length === 11) {
      return `(${array[0]}${array[1]}) ${array[2]}${array[3]}${array[4]}${array[5]}${array[6]}-${array[7]}${array[8]}${array[9]}${array[10]}`
    }
  }
}
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let triCondi = true;
  let checkA = lineA < (lineB + lineC);
  let difLineA = lineA > Math.abs(lineB - lineC);
  let checkB = lineB < (lineA + lineC);
  let difLineB = lineB > Math.abs(lineA - lineC);
  let checkC = lineC < (lineA + lineB);
  let difLineC = lineC > Math.abs(lineA - lineB);
  if (checkA && difLineA) {
    triCondi = true;
  } else if (checkB && difLineB) {
    triCondi = true;
  } else if (checkC && difLineC) {
    triCondi = true;
  } else {
    triCondi = false;
  }
  return triCondi;
}
console.log(triangleCheck(5, 10, 3));

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
