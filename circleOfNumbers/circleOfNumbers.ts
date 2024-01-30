export function circleOfNumbers(n: number, firstNumber: number): number {
	let halfCircle = n / 2;
	if (firstNumber > halfCircle) {
		return firstNumber - halfCircle;
	} else {
		return firstNumber + halfCircle;
	}
}

// console.log(circleOfNumbers(10, 2));
