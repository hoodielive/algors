// a function that calculates the sum of all numbers from 1 up to (and including) some number n

function addUpTo(n) {
	let total = 0; 
	for (let i = 1; i <= n; i++) {
		total += i; 
	}
	return console.log(total);
}

addUpTo(900) 
