// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'
    // let stringArray = str.split(""); // stringArray = stringArray.reverse() // return stringArray.join(""); 
    // or 
    // let reversed = ''; 
    // for (let character of str ) {
    //   reversed = character + reversed; 
    // }
    // return reversed; 


function reverse(str) {
  return str.split('').reduce((rev, char) => char + rev, ''); 
};

reverse("apple");

module.exports = reverse;
