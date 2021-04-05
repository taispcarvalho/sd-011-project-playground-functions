// Desafio 10
function techList(array10, name) {

array10 = array10.sort();
let array11 = [];

if (array10.length === 0){
  return ('Vazio!');
}

else {
  for (let index = 0; index < array10.length; index +=1 ){
    let object = {
      tech : array10[index],
      name: name
    };

    array11.push(object) 
  }
  return (array11);
  }
}

console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"],'Lucas'));
console.log(techList([],'Lucas'));


// Desafio 11
function generatePhoneNumber() {
  // seu código aqu
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < lineB + lineC && lineB < lineA + lineC && lineC < lineA + lineB){
    if(lineA > Math.abs(lineB - lineC) && lineB > Math.abs(lineA - lineC) && lineC > Math.abs(lineA - lineB)){
     return true; 
    }
  }
  else {
    return false;
  }
}

console.log(triangleCheck(10, 14, 8));

// Desafio 13
function hydrate(string) {
  
  onlyNumbers(string);

  if (sum === 1){
    return sum + ' copo de água';
  }
  else {
    
    return sum + ' copos de água' ;
  }
  
}

function onlyNumbers(string) 
{ 
    sum = 0;
    var numsStr = string.replace(/[^0-9]/g,'');
    for (let index=0; index < numsStr.length; index +=1 ){
      let n = parseInt(numsStr[index]);
      sum = sum + n;
    }
    
    return sum;
}

console.log(hydrate("1 cervejas"));

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
