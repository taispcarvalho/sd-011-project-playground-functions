// Desafio 1
function compareTrue(b1, b2) {
  return b1 && b2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(str) {
  return str.split(' ');
}

// Desafio 4
function concatName(arr) {
  return `${arr[arr.length - 1]}, ${arr[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(arr) {
  let highest = 0;
  let count = 0;
  for (const num of arr) {
    if (num > highest) {
      highest = num;
    }
    if (num === highest) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1m = cat1 >= mouse ? cat1 - mouse : mouse - cat1;
  let cat2m = cat2 >= mouse ? cat2 - mouse : mouse - cat2;

  if (cat1m < cat2m) {
    return 'cat1';
  }
  if (cat2m < cat1) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    let n = arr[i];
    arr[i] = '';
    if (n % 3 === 0) {
      arr[i] += 'fizz';
    } else if (n % 5 === 0) {
      arr[i] += 'buzz';
    } else {
      arr[i] += 'bug!';
    }
    arr[i] = arr[i].replace('fizzbuzz', 'fizzBuzz');
  }
  return arr;
}

// Desafio 9
function encode(str) {
  let vol = { a: 1, e: 2, i: 3, o: 4, u: 5 };

  for (const key in vol) {
    if (Object.hasOwnProperty.call(vol, key)) {
      let re = new RegExp(key, 'g');
      str = str.replace(re, vol[key]);
    }
  }

  return str;
}

function decode(str) {
  let vol = { a: 1, e: 2, i: 3, o: 4, u: 5 };

  for (const key in vol) {
    if (Object.hasOwnProperty.call(vol, key)) {
      let re = new RegExp(vol[key], 'g');
      str = str.replace(re, key);
    }
  }

  return str;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
