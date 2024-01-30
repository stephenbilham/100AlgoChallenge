export function areEquallyStrong(
	yourLeft: number,
	yourRight: number,
	friendsLeft: number,
	friendsRight: number
): boolean {
	// this tackles the same weight. if they need to see if left is equal parter left make varaibles and use ternaries to see if left is larger or equal to your and their right and left and compare
	return yourLeft + yourRight === friendsLeft + friendsRight;
}

// console.log(areEquallyStrong(10, 15, 15, 10))
// console.log(areEquallyStrong(15, 10, 15, 10))
// console.log(areEquallyStrong(15, 10, 15, 9))
