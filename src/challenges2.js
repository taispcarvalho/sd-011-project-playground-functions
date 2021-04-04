// Desafio 10 - referencia: https://www.edsonemiliano.com.br/blog/como-ordenar-uma-array-de-objetos-com-javascript-sort/#:~:text=Caso%20voc%C3%AA%20tenha%20um%20array,usar%20o%20m%C3%A9todo%20sort().&text=return%20(a.,nome%20%3E%20b.
function techList(techNames, name) {

  let infoTech = {tech: '', name:''}
  let completeTech = [];

  if(techNames.length != 0) {
    for(let index = 0; index < techNames.length; index += 1) {
      infoTech = {tech: techNames[index],name: name}
      completeTech.push(infoTech);
    }
  } else { 
    return 'Vazio!';
  }
  return completeTech.sort((a,b) => (a.tech >b.tech ? 1 : -1));
} 
// Desafio 11

//função auxiliar verificação n que se repete mais vezes:

function recurringNumber(numbers) {
  
  let maxRepetition = 0;
  
  for (let index = 0; index < numbers.length; index += 1) { 
    let numberRepetition = 0; 
    for (let indexComp = index; indexComp < numbers.length; indexComp += 1) { 
      if (numbers[index] === numbers[indexComp]) {
        numberRepetition += 1;
      }
    }
    if(maxRepetition < numberRepetition) {
      maxRepetition = numberRepetition;
    }
  }
  return maxRepetition;  
} ;

// função auxiliar da validação do array numbers:

function validate (numbers) {
  for (let number of numbers) {
    if (number < 0 || number > 9 || recurringNumber(numbers) >= 3) {  
      return false;
    }
  }
  return true;
}
//função auxiliar final para gerar o number em formato: | //referencia: https://www.w3schools.com/jsref/jsref_concat_string.asp;
  
function generatePhoneNumber(numbers) { 
  let phoneNumber = [];
  
  if (numbers.length != 11) {
    return 'Array com tamanho incorreto.'
  } else if (validate(numbers) === false) {
      return 'não é possível gerar um número de telefone com esses valores'
  } else { 
      for(let index = 0; index < numbers.length; index +=1) {
        phoneNumber.push(numbers[index]); 
      }
      return concat = '(' + phoneNumber[0] + phoneNumber[1] + ') ' + phoneNumber[2] + phoneNumber[3] + phoneNumber[4] + phoneNumber[5] + phoneNumber[6] + '-' + phoneNumber[7] + phoneNumber[8] + phoneNumber[9] + phoneNumber[10];
  }
    return phoneNumber; 
} ;


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
