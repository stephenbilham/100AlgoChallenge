export function arrayConversion(inputArray: number[]): number {
	let isOdd = true;

	while (inputArray.length > 1) {
		console.log(inputArray);
		inputArray = helper(inputArray, isOdd);
		isOdd = !isOdd;
	}

	return inputArray[0];
}

function helper(inputArray: number[], isOdd: boolean): number[] {
	const result: number[] = [];

	if (isOdd) {
		for (let i = 0; i < inputArray.length; i += 2) {
			result.push(inputArray[i] + inputArray[i + 1]);
		}
	} else {
		for (let i = 0; i < inputArray.length; i += 2) {
			result.push(inputArray[i] * inputArray[i + 1]);
		}
	}

	return result;
}

// Example usage
console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8])); // Output: 186
