// Desafio 10
function techList(array, name) {
  array.sort();
  let secondArray = [];
  for (let index = 0; index < array.length; index += 1) {
    let objects = {
      tech: array[index],
      name,
    };
    secondArray.push(objects);
  }
  if (array[0] === undefined) {
    return 'Vazio!';
  }
  return secondArray;
}

// Desafio 11
// function generatePhoneNumber(array) {
//   let telefone = '(';
//   function maisDeTres (array) {
//     let contador = 0;
//     for (let index = 0; index < array.length; index += 1) {
//       for (let secondIndex = 0; secondIndex < array.length; secondIndex += 1) {
//         if (array[index] === array[secondIndex]) {
//           contador += 1;
//           console.log(contador);
//         }
//         if (contador >= 3) {
//           return 'não é possível gerar um número de telefone com esses valores';
//         } else {
//           return true;
//         }
//       }
//     }
//   }
//   if (array.length !== 11) {
//     return 'Array com tamanho incorreto.';
//   } 
//   for (let index = 0; index < array.length; index += 1) {
//     if (array[index] < 0 || array[index] > 9 || maisDeTres(array) === true) {
//       return 'não é possível gerar um número de telefone com esses valores';
//     }
//   }
//   for (let index = 0; index < array.length; index += 1) {
//     telefone += array[index];
//     if (index === 1) {
//       telefone += ')';
//     } else if (index === 6) {
//       telefone += '-';
//     }
//   }
//   return telefone;
// }

// console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  function menorQueSoma (lineA, lineB, lineC) {
    if (lineA < lineB + lineC && lineB < lineC + lineA && lineC < lineB + lineA) {
      return true;
    } else {
      return false;
    }
  }
  function maiorQueAbsoluto (lineA, lineB, lineC) {
    if (lineA > Math.abs(lineB - lineC) && lineB > Math.abs(lineA - lineC) && lineC > Math.abs(lineB - lineA)) {
      return true;
    } else {
      return false;
    }
  }
  return menorQueSoma(lineA, lineB, lineC) && maiorQueAbsoluto (lineA, lineB, lineC)
}

console.log(triangleCheck(10, 12, 2));

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
