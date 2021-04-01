function hydrate(string) {
  let numeroCopos = string.match(/\d+/g).map(Number);
  let somaCopos = 0;
  for (let index = 0; index < numeroCopos.length; index += 1) {
    somaCopos += numeroCopos[index];
  }
  if (somaCopos > 1) {
    return (somaCopos + ' copos de água');
  } if (somaCopos >= 0 || somaCopos < 1) {
    return (somaCopos + ' copo de água');
  }
  return hydrate;
}
console.log(hydrate('cachaça'));