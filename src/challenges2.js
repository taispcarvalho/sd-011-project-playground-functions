// Desafio 10
// References
// Sort(): https://www.w3schools.com/jsref/jsref_sort.asp
// Objects: https://www.w3schools.com/js/js_objects.asp
function techList(tech, name) {
  let result = [];
  let list = tech.sort(); // 'list' recieve 'tech sorted', I don't know if this works yet

  if (list.length !== 0) { // if list.length diffent from zero, it's ok to continue
    for (let i = 0; i < list.length; i += 1) {
      result.push({ tech: list[i], name }); // just print the object
    }
  } else result = 'Vazio!';

  return result;
}

// D11 Auxiliary Functions
function phoneVerification(phone) {
  phone = [];
  if (phone.length > 11 || phone.length < 11) return true;
}

// Desafio 11
// References:
function generatePhoneNumber(phone) {
  let result = '';
  let pVer = phoneVerification();
  if (pVer) {
    result = `(${phone[0]}${phone[1]}) ${phone[2]}${phone[3]}${phone[4]}${phone[5]}${phone[6]}-${phone[7]}${phone[8]}${phone[9]}${phone[10]}`;
  } else console.log('error');
  return result;
}

console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
