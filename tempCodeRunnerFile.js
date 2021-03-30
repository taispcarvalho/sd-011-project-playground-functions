let pessoas = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];
function concatName(pessoas) {
for (let i = 0; i < concatName.length; i+=1) {
    if (concatName[i] === concatName[concatName.length - 1]) {
      let ultimoNome = concatName[i];
    }
    if (concatName[i] === concatName[0]) {
      let primeiroNome = concatName[0];
    }
  return (console.log(ultimoNome, ', ',primeiroNome));
    } 
  }