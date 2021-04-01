function encode(sentence) {
  let objectVowels = {
    a: '1', 
    e: '2',
    i: '3',
    o: '4',
    u: '5',
  }

  let arrayVowels = Object.keys(objectVowels);

  for (let index = 0; index < sentence.length; index += 1) {
    for (let vowel of arrayVowels) {
      if (sentence[index] === vowel) {
        sentence = sentence.replace(vowel, objectVowels[vowel])
        break
      }
    } 
  }

  return sentence;
}

console.log(encode('ahi there!'));