// Desafio 1
function compareTrue(valor1, valor2) {
  return valor1 && valor2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(str) {
  stringConvert = [];
  stringConvert = str.split(" ");
  return stringConvert;
}

// Desafio 4
function concatName(anyStr) {
  let lastName = anyStr[anyStr.length - 1];
  let firstName = anyStr[0];
  let fullName = lastName.concat(', ', firstName);
  return fullName;
}

// Desafio 5
function footballPoints(wins, ties) {
  totalPoints = (wins * 3) + ties;
  return totalPoints;
}

// Desafio 6
function highestCount(numberArray) {
  let maior = 0;
  let count = 0;
  for (let index = 0; index < numberArray.length; index += 1) {
    if (numberArray[index] > maior) {
      maior = numberArray[index];
    } 
  }
  for (n in numberArray) {
    if (maior === numberArray[n]) { count += 1 }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let catOne = Math.abs(cat1 - mouse);
  let catTwo = Math.abs(cat2 - mouse);
  if (catOne < catTwo) {
    return 'cat1';
  } else if (catTwo < catOne) {
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(fizzArray) {
  fizzList = [];
  for (n in fizzArray) {
    if ((fizzArray[n] % 3) === 0 && (fizzArray[n] % 5) === 0) {
      fizzList.push("fizzBuzz");
    } else if ((fizzArray[n] % 3) === 0) {
      fizzList.push("fizz");
    } else if ((fizzArray[n] % 5) === 0) {
      fizzList.push("buzz");
    } else {
      fizzList.push("bug!");
    }
  }
  return fizzList;
}

// Desafio 9
function encode(strCode) {
  let listSub = {
    a: "1",
    e: "2",
    i: "3",
    o: "4",
    u: "5"
  };
  encoded = strCode.replace(/a|e|i|o|u/gi, function (letra) {
    let lt = listSub[letra];
    let letraList = lt.replace(/(?:^|\s)\S/g, function (element) { return element; });
    return letraList;
  });
  return encoded;
}

function decode(numCode) {
  let listSub = {
    "1": "a",
    "2": "e",
    "3": "i",
    "4": "o",
    "5": "u"
  };
  decoded = numCode.replace(/1|2|3|4|5/gi, function (num) {
    let n = listSub[num];
    let numList = n.replace(/(?:^|\s)\S/g, function (element) { return element; });
    return numList;
  });
  return decoded;
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
