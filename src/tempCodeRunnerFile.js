function techList(array, name) {
  for (let index = 0; index < array.length; index += 1) {
    if (array.length === []) {
      return 'Vazio!';
    }
  }
  if (array.length !== 0) {
    for (let tec of array) {
      array.push({
        tech: tec,
        nome: name,
      });
    }
  }
  return array;
}
let n = [];
console.log(techList(n, 'Lucas'));