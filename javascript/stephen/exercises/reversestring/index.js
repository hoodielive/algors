
function reverse(str) { 
  return str.split('').reduce((reversed, character) => {
    return character + reversed;   
  }, '');
}


function reversed(str) {
  debugger; 
  return str.split('').reduce((rev, char) => char + rev, ''); 
}
module.exports = reverse; 
