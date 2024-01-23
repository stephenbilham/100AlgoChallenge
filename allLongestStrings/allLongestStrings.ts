export function allLongestStrings(inputArray: string[]): string[] {
	const maxLength = inputArray.reduce((acc, str) => {
		return (acc = Math.max(acc, str.length));
	}, 0);

	return inputArray.filter((item) => item.length === maxLength);
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));
