export function alternatingSums(a: number[]): number[] {
	const first = a.reduce((acc, curr, i) => {
		if (i % 2 === 0) {
			return acc + curr;
		}
		return acc;
	}, 0);

	const second = a.reduce((acc, curr, i) => {
		if (i % 2 !== 0) {
			return acc + curr;
		}
		return acc;
	}, 0);

	return [first, second];
}

console.log(alternatingSums([50, 60, 60, 45, 70]));
