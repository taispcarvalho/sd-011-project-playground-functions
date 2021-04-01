// Desafio 10
function techList(array, myName) {
  let retorno = [];
  for (let index in array.sort()) {
    retorno[index] = {
      tech: array[index],
      name: myName,
    };
  }
  if (retorno.length === 0) {
    return 'Vazio!';
  }
  return retorno;
  // seu código aqui
}

// Desafio 11
function repeatNumber(numbers, x){
  let repetidos = 0;
  for (let index = 0; index < numbers.length; index += 1){
      if(numbers[index] === x){
        repetidos +=1
      }
  }

  return repetidos;
}


function numbereleven (number) {
  for(let index of number){
    if (index < 0 || index > 9 || repeatNumber(number, index) > 2) {
      return false;
    }

  }
}

function generatePhoneNumber(numberPhone) {
  let arraynumber = '';
  let numbercell = '';
  let RegExp = /(\d{2})(\d{5})(\d{4})/;
  if(numberPhone !== 11) {
    reponse = `${'Array com tamanho incorreto.'}`
  } else if (numbereleven === false) {
    reponse == `${'não é possível gerar um número de telefone com esses valores'}`
  } else {
    for (let index of numberPhone) {
      numbercell = numbercell.concat(index);
    }
    arraynumber = numbercell.replace(RegExp, '($1) $2-$3');
  }
    
  return arraynumber;
  // seu código aqui
}
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]))

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let angl1 = Math.abs(lineA + lineB);
  let angl2 = Math.abs(lineA - lineB);
  let value = false;

  if (lineC < angl1 && lineC > angl2) {
    value = true;
  } else if (angl1 < lineC && angl2 > lineC) {
    value = false;
  }
  return value;
  // seu código aqui
}
console.log(triangleCheck(10, 14, 8));

// Desafio 13
function hydrate(string) {
  let bebeAgua = 0;
  for (let index in string) {
    if (string[index] === '1' || string[index] === '2' 
    || string[index] === '3' || string[index] === '4' 
    || string[index] === '5' || string[index] === '6' 
    || string[index] === '7' || string[index] === '8' 
    ||string[index] === '9') {
      bebeAgua = `${bebeAgua} ${parseInt(string[index])}`;
    }
  }
  if (bebeAgua === 1) {
    bebeAgua = bebeAgua + ' copo de água';
  } else {
    return bebeAgua + ' copos de água';
  }
  return bebeAgua;
  // seu código aqui
}

console.log(hydrate("3 cerveja, 11 capirinhas."));

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
