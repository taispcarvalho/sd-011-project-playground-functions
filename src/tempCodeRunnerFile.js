function techList(array, name) {
  let test = [];
  let crescente = array.sort();
  if (array !== null || array === null) {
    for (let index of array) {
      test.push({
        tech: crescente,
        nome: name,
      }); return (test);
    }
  } return 'Vazio!';
}
let teste = ['CSS', 'JS'];
console.log(techList(teste, 'Lucas'));