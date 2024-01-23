export function addTwoDigits(n: any): number {
	const [a, b] = n.toString().split("");
	return parseInt(a) + parseInt(b);
}

// console.log(addTwoDigits(29));
