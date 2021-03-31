// Desafio 10
function techList(techs, nome) {
  techs = techs.sort();
  let lista = [];
  if (techs.length === 0) {
    return 'Vazio!';
  }
  for (let i = 0; i < techs.length; i += 1) {
    lista[i] = { tech: techs[i], name: nome };
  }

  return lista;
}

function checkRepeated(arrayNumbers){
  let count = 0;
  let index = 0;
  for(let num of arrayNumbers){
    if(num === arrayNumbers[index]){
      count += 1
    }
    if(count >= 3){
      return true
    }
    index += 1
  }
}



function checkInvalid(arrayNumbers){
  for(let numb of arrayNumbers){
    if(numb > 9 || numb < 0){
      return true
    }
  }
}



// Desafio 11
function generatePhoneNumber(numbers) {
  let phonePad = '(**) *****-****';
      
  if(checkInvalid(numbers) === true || checkRepeated(numbers) === true){
    return 'não é possível gerar um número de telefone com esses valores';
  } else if (numbers.length !== 11) {
    return 'Array com tamanho incorreto.'
  }
  for(let i = 0; i < numbers.length; i += 1){
    phonePad = phonePad.replace('*', numbers[i]);
  }

  return phonePad;
}

console.log(generatePhoneNumber([1,2,3,4,5,6,7,8,9,0,1]));

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let biggestLine = Math.max(lineA, lineB, lineC);
  let linesSum = lineC + lineA + lineB;
  if (biggestLine < linesSum - biggestLine) {
    return true;
  }
  return false;
}

// Desafio 13
function hydrate(string) {
  let rule = /\d+/g;
  let numbArray = string.match(rule);
  let count = 0;

  for (let numb of numbArray) {
    count += Number.parseFloat(numb);
  }

  if (count === 1) {
    return `${count} copo de água`;
  }
  return `${count} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
