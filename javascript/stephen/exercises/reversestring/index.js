
function reverse(str) { 
  return str.split('').reduce((reversed, character) => {
    return character + reversed;   
  }, '');
}


function reversed(str) {
  debugger; // make sure to invoke the function and then run with node inspect index.js | enter repl mode and cont
  return str.split('').reduce((rev, char) => char + rev, ''); 
}

reversed('asdf')
module.exports = reverse; 
