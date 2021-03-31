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

// Desafio 11
function generatePhoneNumber(numbers) {

  let phoneNumber = ''
  
  let canBePhoneNumber = true;
  
    for(let i = 0; i < 11; i += 1){
      let count = 0;
      for(let number of numbers){
        if(number === numbers[i]){
          count += 1
        }
        
        if(count === 3){
          canBePhoneNumber = false;
          break;
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
    }else if(canBePhoneNumber === false || count === 3){
      return "não é possível gerar um número de telefone com esses valores"
    }

  
}



console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let perimeter = lineA + lineB + lineC;

  if(lineA < lineC + lineB && lineA > Math.abs(lineC - lineB) && lineB < lineC + lineA && lineB > Math.abs(lineC - lineA) && lineC < lineA + lineB && lineC > Math.abs(lineA - lineB)){
    return true
  }
  else{
    return false
  }
}

// Desafio 13
function hydrate(string) {

  let rule = /\d+/g;
  let numbArray = string.match(rule);
  let count = 0;
  let number;

  for(let numb of numbArray){
    count += Number.parseInt(numb);
  }

  if(count === 1){
    return count + " copo de água"
  }
    return count + " copos de água"
}



    module.exports = {
      generatePhoneNumber,
      techList,
      hydrate,
      triangleCheck,

    }
