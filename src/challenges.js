// Desafio 1 ok
//let valor1=true;
//let valor2=true;
function compareTrue(valor1,valor2) {
  return(valor1&&valor2);
}
//compareTrue(valor2,valor1);

// Desafio 2 ok
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
  let resposta= ultPos.concat(", ",primPos);
  return(resposta);
  }
//concatName(lista);

// Desafio 5
//let wins=0;
//let ties=0;
function footballPoints(wins,ties) {
  let totalpoints=wins*3+ties;
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
//let mouse=10;
//let cat1=1;
//let cat2=5    ;

function catAndMouse(mouse,cat1,cat2) {
  if(cat1&&cat2<mouse){
    if(mouse-cat1<mouse-cat2){
      return("cat1");
      }else if (mouse-cat2<mouse-cat1){
        return("cat2");
      }else{
        return("Os gatos trombam e o rato foge");
      }
  }else if(cat1&&cat2>mouse){
    if(cat1-mouse<cat2-mouse){
      return("cat1");
      }else if (cat1-mouse<cat2-mouse){
        return("cat2");
      }else{
        return("Os gatos trombam e o rato foge");
      }
  }else if(cat1<mouse&&mouse<cat2){
          if(mouse-cat1<cat2-mouse){
            return("cat1");
          }else if(mouse-cat1>cat2-mouse){
            return("cat2");
          }else{
            return("Os gatos trombam e o rato foge");
          }
        }else if(cat2<mouse&&mouse<cat1){
            if(mouse-cat1>cat2-mouse){
              return("cat2");
            }else if(mouse-cat1<cat2-mouse){
              return("cat1");
            }else{
              return("Os gatos trombam e o rato foge");
            }
        
  }else{  
//  if(mouse-cat1==mouse-cat2||){
//    return("cat2");
//  }else{
    return("Os gatos trombam e o rato foge");
  }
}
//catAndMouse(mouse,cat1,cat2);

// Desafio 8
//let numeros=[2,15,7,9,45];
function fizzBuzz(numeros){
  let arrayresposta=[0];
  arrayresposta.pop();
  for(let cont=0;cont<=numeros.length-1;cont++){
    if(numeros[cont]%3==0&numeros[cont]%5==0){
      arrayresposta.push("fizzBuzz");
    }else if(numeros[cont]%3==0&numeros[cont]%5!==0){
      arrayresposta.push("fizz");
    }else if(numeros[cont]%3!==0&numeros[cont]%5==0){
      arrayresposta.push("buzz");
    }else{
      arrayresposta.push("bug!");
    }
  }
  return(arrayresposta);
}
//fizzBuzz(numeros);
// Desafio 9
//let frase="Melissa Gabriele Figueiredo";
function encode(frase){
  let parcial="";
  let fraseResp="";
  //stresp.pop();
  for(let cont=0;cont<frase.length;cont++){
    if(frase[cont]=="a"){
      parcial="1";
    }else if(frase[cont]=="e"){
      parcial="2";
    }else if(frase[cont]=="i"){
      parcial="3";
    }else if(frase[cont]=="o"){
      parcial="4";
    }else if(frase[cont]=="u"){
      parcial="5";
    }else{
      parcial=frase[cont];
    }
    fraseResp=fraseResp+parcial;
  }
  //  console.log(fraseResp);
    return(fraseResp);
}
//encode(frase);

//let frase="M2l3ss1 G1br32l2 F3g523r2d4"
function decode(frase) {
  let parcial="";
  let fraseResp="";
    for(let cont=0;cont<frase.length;cont++){
    if(frase[cont]=="1"){
      parcial="a";
    }else if(frase[cont]=="2"){
      parcial="e";
    }else if(frase[cont]=="3"){
      parcial="i";
    }else if(frase[cont]=="4"){
      parcial="o";
    }else if(frase[cont]=="5"){
      parcial="u";
    }else{
      parcial=frase[cont];
    }
    fraseResp=fraseResp+parcial;
  }
  //  console.log(fraseResp);
    return(fraseResp);
}
//decode(frase);

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
