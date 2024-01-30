export function containsDuplicates(a: number[]): boolean {
	const map = {};

	for (const num of a) {
		if (map[num]) {
			return true;
		}
		map[num] = num;
	}
	return false;
}

// console.log(containsDuplicates([1, 2, 3, 1]));
// console.log(containsDuplicates([3, 1]));
