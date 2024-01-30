export function areSimilar(a: number[], b: number[]): boolean {
	return a.sort((a, b) => a - b).join() === b.sort((a, b) => a - b).join();
}

// console.log(areSimilar([1, 2, 3], [1, 2, 3]));
// console.log(areSimilar([1, 2, 3], [2, 1, 3]));
// console.log(areSimilar([1, 2, 2], [2, 1, 1]));
