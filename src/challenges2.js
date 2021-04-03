// Desafio 10
function techList(wantToLearn, name) {
  let myDevTechs = [];

  if (wantToLearn.lenght === 0) {
    return 'Vazio!';

  } else {
    for (let index = 0; index < wantToLearn.lenght; index += 1) {
      let techObject = {
        tech: wantToLearn[index],
        name: `${name}`,
      }
      myDevTechs.push(techObject);
    }   
    
    return myDevTechs.sort((a,b) => (a.wantToLearn > b.wantToLearn ? 1 : -1));    
  }    
  
}

console.log(techList(['React', 'Python', 'PHP', 'Express'], 'Gustavo'));

// Desafio 11
function generatePhoneNumber(numToBe) {
  let count = 0;

  for (let index in numToBe){
    if(index in numToBe) {
      count[index] = count[index] + 1;
    } else {
      count[index] = 1;
    }
  }

  if (count >= 3) {
    return "não é possível gerar um número de telefone com esses valores";
    
  } else if (numToBe.lenght < 11) {
    return "Array com tamanho incorreto.";
  
  } else {
    let phoneNumber = '(xx) xxxxx-xxxx'

    for(let index = 0; index < numToBe.lenght; index += 1){  
      if (numToBe[index] < 0){
        return "não é possível gerar um número de telefone com esses valores";      

      } else {
        phoneNumber = phoneNumber.replace(/'x'/ig, numToBe[index]);
      }
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
// 
function hydrate(drinkWater) {
  let numOfDrinks = drinkWater.replace(/[^0-9]/g,'');	

	let parsedDrinks = 0
	for (let index of numOfDrinks) {
		parsedDrinks += parseInt(index, 10);
	}

	if (parsedDrinks === 1) {
		return '1 copo de água'
	} else {
		return `${parsedDrinks} copos de água`
	}

}

console.log(hydrate('9 cerveja'))

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
