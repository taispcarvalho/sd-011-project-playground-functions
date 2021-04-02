function techList(array, name) {
  if (array.length !== 0) {
    for (let tec of array) {
      array.push({
        tech: tec,
        nome: name,
      });
    }
  } else return 'Vazio!';
  return array;
}
let arr = [1, 20, 5];
console.log(techList(arr, 'Lucas'));
