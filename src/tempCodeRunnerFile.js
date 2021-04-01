 string = '1 cachaça, 5 cervejas e 1 copo de vinho'
  let numeroCopos = string.match(/\d+/g).map(Number); //me gera um array com os números
  let somaCopos = 0;
  for (let index = 0; index < numeroCopos.length; index += 1){
    somaCopos += numeroCopos[index];
  }
  console.log(somaCopos, 'copos de água')