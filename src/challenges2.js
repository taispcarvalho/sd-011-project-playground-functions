// Desafio 10
// Utilizei desta fonte para aplicação do sort: https://flaviocopes.com/how-to-sort-array-of-objects-by-property-javascript/
function techList(wantToLearn, name) {
  let myDevTechs = [];

  if (wantToLearn.lenght === 0) {
    return 'Vazio!';

  } else {
    for (let techs of wantToLearn){
			let object = {
				tech: techs,
				name: name,
			}
			myDevTechs.push(object);
		}
				    
    return myDevTechs.sort((a,b) => (a.wantToLearn > b.wantToLearn ? 1 : -1));
  }  
}

console.log(techList(['React', 'Python', 'PHP', 'Express'], 'Gustavo'));

// Desafio 11
function generatePhoneNumber(numbers) {
  
}
// let newPhoneNumber = (array) => {
//   let digits = array.match(/^(\d{2})(\d{5})(\d{4})$/)
    
//     if (digits) {
//       return '(' + match[1] + ') ' + match[2] + '-' + match[3]
//     } 
// }

console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));


// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < (lineB + lineC) && lineA > Math.abs(lineB - lineC) 
    && lineB < (lineA + lineC) && lineB > Math.abs(lineA - lineC)
    && lineC < (lineB + lineA) && lineC > Math.abs(lineB - lineA)) {
        return true;
      }
  return false;
}

console.log(triangleCheck(5, 6, 10));

// Desafio 13
// Utilizei como embasamento:
// https://www.codegrepper.com/code-examples/javascript/extract+number+from+string+javascript
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/parseInt
function hydrate(drinkWater) {
  let numOfDrinks = drinkWater.replace(/[^0-9]/g,'');	

	let parsedDrinks = 0;
	for (let index of numOfDrinks) {
		parsedDrinks += parseInt(index, 10);
	}

	if (parsedDrinks === 1) {
		return '1 copo de água';
	} else {
		return `${parsedDrinks} copos de água`;
	}

}

console.log(hydrate('9 cerveja'));

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
