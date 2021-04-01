function compareTrue(valor1,valor2) {
  return(valor1&&valor2);
}
function calcArea(base,altura) {
  areaTriangulo = base * altura / 2;
  return(areaTriangulo);
}
function splitSentence(frase){
  let separado=frase.split(" ");
  return(separado);
}
function concatName(lista){
  let primPos=lista[0];
  let ultPos=lista[lista.length-1];
  let resposta= ultPos.concat(", ",primPos);
  return(resposta);
  }
function footballPoints(wins,ties) {
  let totalpoints=wins*3+ties;
  return(totalpoints);
}
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
//let mouse=5;
//let cat1=10;
//let cat2=0; 
  function catAndMouse(mouse,cat1,cat2){
    cat1=M  ath.abs(diff(mouse,cat1));
    cat2=Math.abs(diff(mouse,cat2));
      if(cat1===cat2){
      return("Os gatos trombam e o rato foge");
      //console.log("Os gatos trombam e o rato foge");
    }else if(<cat2){
      return("cat1");
      //console.log("cat1")
    }else{
      return("cat2");
      //console.log("cat2");
    }
  }
//catAndMouse(mouse,cat1,cat2);
//     return("cat1");
//        }else
        // if (cat2>cat1)
 //       {
//          return("cat2");
   //     }
        //else{
        //  return("Os gatos trombam e o rato foge");
        //}
//    }else if(cat1>mouse&&cat2>mouse){
//      if(cat1<cat2){
//        return("cat1");
//        }else
         //if (cat1>cat2)
     //    {
//          return("cat2");
     //   }
        //else{
        //  return("Os gatos trombam e o rato foge");
        //}
//    }else if(cat1<mouse&&mouse<cat2){
//            if(mouse-cat1<cat2-mouse){
//             return("cat1");
//            }else
            // if(mouse-cat1>cat2-mouse)
//            { 
//              return("cat2");
//            }
            //else{
            //  return("Os gatos trombam e o rato foge");
            //}
//          }else if(cat2<mouse&&mouse<cat1){
//              if(mouse-cat1>cat2-mouse){
//                return("cat2");
//              }else
               //if(mouse-cat1<cat2-mouse)
       //        {
//                return("cat1");
         //     }
              //else{
              //  return("Os ga tos trombam e o rato foge");
              //}
          
//    }else{  
  //  if(mouse-cat1==mouse-cat2||){
  //    return("cat2");
//      return("Os gatos trombam e o rato foge");
//    }
//  }
//catAndMouse(mouse,cat1,cat2);

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
function encode(frase){
    frase=frase.replaceAll("a",1);
    frase=frase.replaceAll("e",2);
    frase=frase.replaceAll("i",3);
    frase=frase.replaceAll("o",4);
    frase=frase.replaceAll("u",5);
    return(frase);
}
function decode(frase) {
    frase=frase.replaceAll("1","a");
    frase=frase.replaceAll("2","e");
    frase=frase.replaceAll("3","i");
    frase=frase.replaceAll("4","o");
    frase=frase.replaceAll("5","u");
    return(frase);
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
