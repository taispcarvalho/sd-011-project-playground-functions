function decode(frase) {
  for (let index = 0; index < frase.length; index += 1){
    frase = frase.replace('1', 'a');
    frase = frase.replace('2', 'e');
    frase = frase.replace('3', 'i');
    frase = frase.replace('4', 'o');
    frase = frase.replace('5', 'u');
  }
  return frase
}
console.log(decode('h3 th2r2!'))