// Desafio 10
function techList(tecnologias, name) {
  // seu código aqui
  let retorno = [];
  let ordem = tecnologias.sort();
  if (ordem.length != 0){
    for (let index in ordem){
      retorno[index]={
        tech: ordem[index],
        name: name
      }
    }
    return retorno;
  }else{
    return 'Vazio!';
  }
}

// Desafio 11-ficou por fazer

function generatePhoneNumber(numero) {
  // seu código aqui
  let check =true;
  if (numero.length!=11){
    check=false;
    return 'Array com tamanho incorreto';
  }else{
    for (let index in numero){
      let contador = 0;
      if(numero[index]<0 || numero[index]>9){
        check=false;
        return 'não é possível gerar um número de telefone com esses valores';
      }
      for (index2 in numero){
        if (numero[index] === numero[index2]){
          contador +=1;
        }
      }
      if (contador>=3){
        check=false;
        return 'não é possível gerar um número de telefone com esses valores';
      }
    }
    if (check){
      let telefone =[];
      telefone[0]='(';
      telefone[1]=numero[0];
      telefone[2]=numero[1];
      telefone[3]=') '
      telefone[4]=numero[2];
      telefone[5]=numero[3];
      telefone[6]=numero[4];
      telefone[7]=numero[5];
      telefone[8]=numero[6];
      telefone[9]='-';
      telefone[10]=numero[7];
      telefone[11]=numero[8];
      telefone[12]=numero[9];
      telefone[13]=numero[10];
      let retorno = '';
      for (let index in telefone){
        retorno = retorno + telefone[index];
      }
      return retorno;
    }
  }
}
console.log(generatePhoneNumber([1,2,3,4,5,2,7,8,9,0,1]));


// Desafio 12
function triangleCheck(lineA,lineB,lineC) {
  // seu código aqui
  let somaA = lineB+lineC; //teste com A
  let somaB = lineA+lineC; //teste com B
  let somaC = lineB+lineA; //teste com C

  let testeA = Math.abs(lineB-lineC); //teste com A
  let testeB = Math.abs(lineA-lineC); //teste com B
  let testeC = Math.abs(lineB-lineA); //teste com C

  if (lineA>somaA || lineB>somaB || lineC>somaC){
    return false;
  }else{
    if (lineA>testeA && lineB>testeB && lineC>testeC){
      return true;
    }else{
      return false;
    }
  }
}


// Desafio 13
function hydrate(frase) {
  // seu código aqui
  let agua=0;
  for (let index in frase){
    if (frase[index]==='1' || frase[index]==='2' || frase[index]==='3' || frase[index]==='4' || frase[index]==='5' || frase[index]==='6' || frase[index]==='7' || frase[index]==='8' || frase[index]==='9'){
      agua = agua + parseInt(frase[index]);
    }
  }
  if (agua===1){
    return agua + ' copo de água';  
  }else{
    return agua + ' copos de água';
  }
}


module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
