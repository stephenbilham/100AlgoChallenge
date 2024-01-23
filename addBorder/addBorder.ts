export function addBorder(picture: string[]): string[] {
	let arr: string[] = [];
	const wall = "*****";
	arr.push(wall);
	picture.map((el) => {
		el = el.replace(",", "");
		el.split(" ").forEach((item) => {
			arr.push(`*${item}*`);
		});
	});
	arr.push(wall);
	console.log(arr);
	return arr;
}

// console.log(addBorder(["abc", "ded"]));
