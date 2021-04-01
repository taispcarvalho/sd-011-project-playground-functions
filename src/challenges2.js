// Desafio 10
function techList(arrayTech, nameTech) {
  for(let index in arrayTech){
  let objectTech  = {name:nameTech}
  objectTech = {tech:arrayTech[index]}
  }
return objectTech
}
console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"]
"Lucas"))
// Desafio 11
function generatePhoneNumber(numberPhone) {
  let numberOrganized = "(";
  let result = 0;
  let count = 0;

  for(index = 0; index<numberPhone.length; index+=1){
    for(index2 = 1; index<numberPhone.length; index+=1){
      if(numberPhone[index] === numberPhone[index2]){
      count += 1;
      }
    }
    if(count >= 3){
      result = "não é possível gerar um número de telefone com esses valores";
      break;
    } 
    if(numberPhone.length !== 11){
      result = "Array com tamanho incorreto.";
      break;
    }else{
      result=numberOrganized;
    }
    if(numberPhone[index]<0 || numberPhone[index]>9){
      result ="não é possível gerar um número de telefone com esses valores";
      break;
    }else{
      result = numberOrganized;
    }
    if(index === 2){
    numberOrganized += ')';
   }
   if(index === 6){
     numberOrganized += '-';
   }
   numberOrganized += numberPhone[index];
  }
return result
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate(string) {
  let waterCup += string.replace(/\D/g, "");
  return console.log(waterCup + ' copos de água')
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
