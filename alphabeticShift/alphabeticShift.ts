export function alphabeticShift(inputString: string): string {
	let alphabet = "abcdefghijklmnoqrstuvwxyz".split("");
	let word = "";

	for (let i = 0; i < inputString.length; i++) {
		let index = 0;
		if (inputString[i] !== "z") {
			index = alphabet.indexOf(inputString[i]) + 1;
		}
		word += alphabet[index];
	}
	return word;
}

console.log(alphabeticShift("crazy"));
