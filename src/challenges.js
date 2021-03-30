// Desafio 1
//let valor1=true;
//let valor2=true;
function compareTrue(valor1,valor2) {
  return(valor1&&valor2);
}
//compareTrue(valor2,valor1);

// Desafio 2
//let base = 1;
//let altura = 51;
//let areaTriangulo = 0.1;
function calcArea(base,altura) {
  areaTriangulo = base * altura / 2;
  return(areaTriangulo);
}
//calcArea(base,altura);
//console.log(areaTriangulo);

// Desafio 3
//let frase="Wilquer Figueiredo Alves"
function splitSentence(frase){
  let separado=frase.split(" ");
  return(separado);
}
//splitSentence(frase);
  // seu código aqui


// Desafio 4
//let lista=["meu","nome","nao","e","jhonny"];
//console.log(lista.length);
function concatName(lista){
  let primPos=lista[0];
  let ultPos=lista[lista.length-1];
  let resposta=ultPos.concat(" ",primPos);
  return(resposta);
  }
//concatName(lista);

// Desafio 5
//let wins=0;
//let ties=0;
function footballPoints(wins,ties) {
  let totalpoints=wins*3+ties*1;
  return(totalpoints);
}
//footballPoints(wins,ties);

// Desafio 6
//let valores=[0,0,0];
function highestCount(valores){ 
  let arrumado=valores.sort();
  //console.log(arrumado);
  let maior=arrumado[arrumado.length-1];
  let quanVezes=0;
    for(let index=0; index<=valores.length-1;index++){
      if(valores[index]==maior){
          quanVezes++;
        }  
    }
 return(quanVezes);
}
//highestCount(valores);

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
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
