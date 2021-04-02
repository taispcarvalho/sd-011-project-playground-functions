function techList(array, name) {
  let test = [];
  for (let index = 0; index < array.length; index += 1) {
    test.push({
      tech: array[index],
      nome: name,
    });
  } test.sort();
  if (array.length === 0) {
    return 'Vazio!';
  }
  return test;
}
let array = ['CSS', 'JS', 'Node'];
console.log(techList(array, 'Lucas'));