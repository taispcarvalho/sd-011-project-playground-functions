let pessoa = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];
function concatName(pessoa) {
for (let i = 0; i < pessoa.length; i+=1) {
    if (pessoa[i] === pessoa[pessoa.length - 1]) {
      let ultimoNome = pessoa[i];
    }
    if (pessoa[i] === pessoa[0]) {
      let primeiroNome = pessoa[i];
    }
  return (ultimoNome + ', ' + primeiroNome)
  }
  concatName(ultimoNome + ', ' + primeiroNome);
  console.log(ultimoNome + ', ' + primeiroNome);
}