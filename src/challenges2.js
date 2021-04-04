// Desafio 10
function techList(lista, nameName) {
  let list = [];
  lista.sort();
  for (let index = 0; index < lista.length; index += 1) {
    let object = {
      tech: lista[index],
      name: nameName,    
    };
  list.push(object);
  }

  if (lista.length === 0) {
    return 'Vazio!';
    
  }

  return list;
  ///https://pt.stackoverflow.com/questions/46600/como-ordenar-uma-array-de-objetos-com-array-sort
}

// Desafio 11
//Função auxiliar
function repetition(numbers) {
  let cont = 0;
  for (let index of numbers) {
    for (let index2 = 1; index2 < numbers.length; index2 += 1) {
      if (index2 === numbers[index]) {
        cont += 1;
      }
    }
    if (cont >= 3) {
      return false;
    }
    cont = 0;
  } 
  
  return true;
}

//Função principal
function generatePhoneNumber(numbers) {
  if (numbers.length !== 11) {
    return 'Array com tamanho incorreto.';
  }

  for (let index of numbers) {
   if (numbers[index] < 0 || numbers[index] > 9) {
     return 'não é possível gerar um número de telefone com esses valores.';
   }
  }
  
  if (!repetition(numbers)) {  //se a condição da função repetition for verdadeira
    numbers.splice(0, 0, '(');
    numbers.splice(3, 0, ') ');
    numbers.splice(9, 0, '-');
    return numbers.join('');
  }

  return 'não é possível gerar um número de telefone com esses valores.';
}

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
