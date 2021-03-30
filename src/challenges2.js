// Desafio 10
function techList(techs, name) {

techs = techs.sort()

  let lista = []

  if(techs.length === 0){
    return "Vazio!"
  }
  else{
    
  for(let i = 0; i < techs.length; i += 1){
    
    lista[i] = { tech: techs[i], name: name}

  };

  return lista;
  };
  
}

console.log(techList([], "Lucas"));

// Desafio 11
function generatePhoneNumber(numbers) {

  let phoneNumber = ''
  let count = 0;
  let canBePhoneNumber = true;
  
    for(let i = 0; i < 11; i += 1){

      for(let number of numbers){
        let count = 0;
        if(number === numbers[i]){
          count += 1
        }
      }

      if(numbers[i] > 9 || numbers[i] < 0 || count === 3){
        canBePhoneNumber = false
      }

      if(i === 0){
        phoneNumber += '('
        phoneNumber += numbers[i]
      }else if(i === 1){
        phoneNumber += numbers[i]
        phoneNumber += ') '
      }else if(i === 6){
        phoneNumber += numbers[i]
        phoneNumber += '-'
      }else{
        phoneNumber += numbers[i]
      };
  
    }

    if(numbers.length === 11 && canBePhoneNumber === true){
      return phoneNumber
    }else if(numbers.length !== 11){
      return "Array com tamanho incorreto."
    }else if(canBePhoneNumber === false){
      return "não é possível gerar um número de telefone com esses valores"
    }

  

 
  
}



console.log(generatePhoneNumber([10,2,3,4,5,6,7,8,9,1,0]));

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

    }
