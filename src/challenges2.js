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

// Função auxiliar  - retorna true caso a afirmação seja verdadeira
function quantNumbers(numbers) {
  if (numbers.length === 11) {    
    return true;
  }
}

// Função auxiliar - retorna true caso a condição seja satisfeita
function validNumber(numbers) {
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] < 0 || numbers[index] > 9) {
      return false;
    }
  } 
  
  return true;
}

// Função auxiliar - realiza contagem de repetiçãoes - retorna true se tem menos de 2 algarismos repetidos na string
function repetition(numbers) {
  let cont = 0;
  for (let index2 of numbers) {
    for (let index3 = 1; index3 < numbers.length; index3 += 1) {
      if (index2 === numbers[index3]) {
        cont += 1;
      }
    }

    if (cont >= 3) {
      return false;
    }

    cont = 0; // zera contagem apos o segundo for comparar todos index com o index 2 e assim sucessivamente
  }

  return true;
}

// Função auxiliar - Adicionando parenteses na string com splice
function phoneOrganizer(numbers) {
  numbers.splice(0, 0, '(');
  numbers.splice(3, 0, ') ');
  numbers.splice(9, 0, '-');
  return numbers.join('');
}

// Função original
function generatePhoneNumber(numbers) {
  if (!quantNumbers(numbers)) {
    return 'Array com tamanho incorreto.';
  } 
  
  if (!validNumber(numbers) || !repetition(numbers)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  
  return phoneOrganizer(numbers);
}
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
