export function almostIncreasingSequence(sequence: number[]): boolean {
	let firstMistake = false;
	let largest = sequence[0];
	for (let i = 1; i < sequence.length; i++) {
		console.log(sequence, sequence[i], sequence[i - 1]);
		if (sequence[i] < largest) {
			if (firstMistake) {
				return false;
			}
			firstMistake = true;
		} else {
			largest = sequence[i];
		}
	}
	return true;
}

// console.log(almostIncreasingSequence([1, 3, 2, 1]));
// console.log(almostIncreasingSequence([1, 3, 2]));
