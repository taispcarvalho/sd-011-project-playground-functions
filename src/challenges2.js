/// Desafio 10
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
  /// https://pt.stackoverflow.com/questions/46600/como-ordenar-uma-array-de-objetos-com-array-sort
}

// Desafio 11

/// Função auxiliar  - retorna true caso a afirmação seja verdadeira
function quantNumbers(numbers) {
  if (numbers.length === 11) {
    return true;
  }
}

/// Função auxiliar - retorna true caso a condição seja satisfeita
function validNumber(numbers) {
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] < 0 || numbers[index] > 9) {
      return false;
    }
  }

  return true;
}

/// Função auxiliar - realiza contagem de repetiçãoes - retorna true se tem menos de 2 algarismos repetidos na string
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

    cont = 0; /// zera contagem apos o segundo for comparar todos index com o index 2 e assim sucessivamente
  }

  return true;
}

/// Função auxiliar - Adicionando parenteses na string com splice
function phoneOrganizer(numbers) {
  numbers.splice(0, 0, '(');
  numbers.splice(3, 0, ') ');
  numbers.splice(9, 0, '-');
  return numbers.join('');
}

/// Função original
function generatePhoneNumber(numbers) {
  if (!quantNumbers(numbers)) {
    return 'Array com tamanho incorreto.';
  }

  if (!validNumber(numbers) || !repetition(numbers)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  
return phoneOrganizer(numbers);

}

/// Desafio 12
/// Função auxiliar
function sumFace(lineA, lineB, lineC) {
  if (lineA + lineB < lineC) {
    return false;
  }

  if (lineB + lineC < lineA) {
    return false;
  }

  if (lineA + lineC < lineB) {
    return false;
  }

  return true;
}

/// Função auxiliar
function diFace(lineA, lineB, lineC) {
  if (Math.abs(lineA - lineB) > lineC) {
    return false;
  }

  if (Math.abs(lineB - lineC) > lineA) {
    return false;
  }

  if (Math.abs(lineA - lineC) > lineB) {
    return false;
  }

  return true;
}

function triangleCheck(lineA, lineB, lineC) {
  if (!sumFace(lineA, lineB, lineC) || !diFace(lineA, lineB, lineC)) {
    return false;
  }

  return true;
}

/// Desafio 13
/// Neste desafio consultei o repositório de meu colega Renan Menezes
/// Link: https://github.com/tryber/sd-011-project-playground-functions/tree/menezesrenan7-project-playground-functions/
function hydrate(drinks) {
  let parameter = /\d+/gm; /// indica todos caracteres numéricos
  let list = drinks.match(parameter).map(Number);  
  let sum = 0;
  for (let index of list) {
    sum += index;
  }

  if (sum > 1) {
    return `${sum} copos de água`;
  }

return `${sum} copo de água`;

}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
