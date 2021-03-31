// Desafio 10
function techList(arrayTec, name) {
  let arrayResult = [];
  let arrayOrdenado = arrayTec.sort();
  for (let index = 0; index < arrayOrdenado.length; index += 1) {
    let object = {
      tech: arrayOrdenado[index],
      name: name
    };
    arrayResult.push(object);
  }

  if (arrayTec.length === 0) {
    return 'Vazio!';
  } else {
    return arrayResult;
  }
}

// Desafio 11
function generatePhoneNumber(array) {
  let telefone = [];
  let cont = 0;
	if (typeof validationArray(array) === 'string'){
		return validationArray(array);
	}
  telefone[0] = '(';
  telefone[3] = ')';
  telefone[4] = ' ';
  telefone[10] = '-';
  for (let index = 0; index < array.length; index += 1){
    if(telefone[cont] !== undefined){
      index -= 1;
    } else {
      telefone[cont] = array[index].toString();
    }
    cont += 1;
  }
  return telefone.join('');
}

function repetArray(array){
	for (let firstIndex = 0; firstIndex < array.length; firstIndex += 1) {
    let cont = 0;
		for (let secondIndex = 0; secondIndex < array.length; secondIndex += 1) {
			if (array[firstIndex] === array[secondIndex]) {
				cont += 1;
			}
			if (cont >= 3) {
				return cont;
			}
		}
	}
  return 0;
}

function validationArray(array){
  let repeticao = repetArray(array);
	if (array.length !== 11){
		return "Array com tamanho incorreto.";
	}	
	for (let index = 0; index < array.length; index += 1){
		if(array[index] < 0 || array[index] > 9 || repeticao >= 3){
			return "não é possível gerar um número de telefone com esses valores";
		}
	}
  return array;
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
