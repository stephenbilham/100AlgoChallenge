export function alphabetSubsequence(s: string): boolean {
	let largestNum = s.charCodeAt(0);
	for (let i = 1; i < s.length; i++) {
		let current = s.charCodeAt(i);
		if (current <= largestNum) {
			return false;
		}
		largestNum = current;
	}
	return true;
}

console.log(alphabetSubsequence("zab"));
console.log(alphabetSubsequence("effg"));
console.log(alphabetSubsequence("cdce"));
console.log(alphabetSubsequence("ace"));
console.log(alphabetSubsequence("bxz"));
