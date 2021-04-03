// Desafio 10
function techList(wantToLearn, name) {
  let myLearningList = [];
  if(wantToLearn === ''){
    console.log('Vazio!')
  } else {
    for (let index = 0; index < wantToLearn.lenght; index += 1) {
      myLearningList.push('tech:' + wantToLearn[index], 'name' + name)
      console.log(myLearningList)
    }
    return myLearningList.sort()
  }
}

console.log(techList(['React', 'Python'], 'Gustavo'))

// Desafio 11
function generatePhoneNumber(numToBe) {
  let count = {};

  for (let index of numToBe){
    if(value in numToBe) {
      count[value] = count[value] + 1;
    } else {
      count[value] = 1;
    }
  }

  if (count >= 3) {
    return "não é possível gerar um número de telefone com esses valores";
    
  } else if (numToBe.lenght < 11) {
    return "Array com tamanho incorreto.";
  
  }

  let phoneNumber = '(xx) xxxxx-xxxx'

  for(let index = 0; index < numToBe.lenght; index += 1){  
    if (numToBe[index] < 0 || numToBe[index] > 9){
      return "não é possível gerar um número de telefone com esses valores";      

    } else {
      phoneNumber = phoneNumber.replace('x', numToBe[index]);
    }
    
    return phoneNumber;

  }
} 

console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < (lineB + lineC) && lineA > Math.abs(lineB - lineC) 
      && lineB < (lineA + lineC) && lineB > Math.abs(lineA - lineC)
      && lineC < (lineB + lineA) && lineC > Math.abs(lineB - lineA)) {
        return true
      }
  else {
        return false
  }
}

console.log(triangleCheck(5, 6, 10));

// Desafio 13
function hydrate(drinkWater) {
  let hhTrybe = drinkWater.match(/\d+/g);
  let intHHTrybe = [];
  let sumAllWater = 0

  for (let index = 0; index < hhTrybe.lenght; index += 1) {
    intHHTrybe = parseInt(hhTrybe[index]);
    sumAllWater = sumAllWater + intHHTrybe[index];

  }

  return `${sumAllWater} copos de água`
}

console.log(hydrate('1 cerveja e 2 drink'))

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
