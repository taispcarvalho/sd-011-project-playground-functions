function hydrate(string) {
  let numeroCopos = string.match(/\d+/g).map(Number);
  let somaCopos = 0;
  let resultado = '';
  for (let index = 0; index < numeroCopos.length; index += 1) {
    somaCopos += numeroCopos[index];
  }
  if(somaCopos > 1) {
    resultado = (somaCopos + ' copos de água');
  } else {
    resultado = (somaCopos + ' copo de água');
  }
  return resultado;
}
console.log(hydrate('1 cerveja'));