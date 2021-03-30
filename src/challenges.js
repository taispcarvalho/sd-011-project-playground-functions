//  Desafio 1 OK
function compareTrue(valor1,valor2) {
  return(valor1&&valor2);

// Desafio 2 OK
function calcArea(base,altura) {
  areaTriangulo = base * altura / 2;
  return(areaTriangulo);
}

// Desafio 3 OK
function splitSentence(frase){
  let separado=frase.split(" ");
  return(separado);
}

// Desafio 4
//let lista=["meu","nome","nao","e","jhonny"];

function concatName(lista){
  let primPos=lista[0];
  let ultPos=lista[lista.length-1];
  let resposta= ultPos.concat(", ",primPos);
  console.log(resposta);
  }
//concatName(lista);

// Desafio 5 OK
function footballPoints(wins,ties) {
  let totalpoints=wins*3+ties*1;
  return(totalpoints);
}

// Desafio 6 OK
function highestCount(valores){ 
  let arrumado=valores.sort();
  let maior=arrumado[arrumado.length-1];
  let quanVezes=0;
    for(let index=0; index<=valores.length-1;index++){
      if(valores[index]==maior){
          quanVezes++;
        }  
    }
 return(quanVezes);
}

// Desafio 7

function catAndMouse(mouse,cat1,cat2) {
  if(cat1-mouse>cat2-mouse){
    return("cat2");
  }else if(cat1-mouse<cat2-mouse){
    return("cat1");
  }else{
    return("Os gatos trombam e o rato foge");
  }
}


// Desafio 8

function fizzBuzz(arrayteste){
  let arrayresposta=[0];
  arrayresposta.pop();
  for(let cont=0;cont<=arrayteste.length-1;){
    if(arrayteste[cont]%3==0&arrayteste[cont]%5==0){
      arrayresposta.push("fizzbuzz");
    }else if(arrayteste[cont]%3==0&arrayteste[cont]%5!==0){
      arrayresposta.push("fizz");
    }else if(arrayteste[cont]%3!==0&arrayteste[cont]%5==0){
      arrayresposta.push("buzz");
    }else{
      arrayresposta.push("bug");
    }
  }
  return(arrayresposta);
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};