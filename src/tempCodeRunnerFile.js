function techList(array, name) {
  let test = [];
  array.sort();
  for (let index = 0; index < array.length; index += 1) {
    test.push({
      tech: array[index],
      nome: name,
    });
  }
  if (array.length === 0) {
    return 'Vazio!';
  }
  return test;
}
console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));