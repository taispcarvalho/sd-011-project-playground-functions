function hydrate(string) {
  let numeroCopos = string.match(/\d+/g).map(Number);
  let somaCopos = 0;
  let resultado = '';
  for (let index = 0; index < numeroCopos.length; index += 1) {
    somaCopos += numeroCopos[index];
  }
  if(somaCopos > 1) {
    return (somaCopos + ' copos de água');
  } else {
    return (somaCopos + ' copo de água');
  }
}
console.log(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho'));