export function adjacentElementsProduct(inputArray: number[]): number {
	let largestProduct = inputArray[0] * inputArray[1];
	// the - 1 in the for loop is so when it gets to 3 it doens't iterate to NaN or undefined
	for (let i = 1; i < inputArray.length - 1; i++) {
		const currentProduct = inputArray[i] * inputArray[i + 1];
		if (currentProduct > largestProduct) {
			largestProduct = currentProduct;
		}
	}
	return largestProduct;
}

//console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));
