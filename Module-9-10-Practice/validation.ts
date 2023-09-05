export function validate(input: string | number): boolean {
	if (typeof input === "string") {
		if (input.length <= 0) {
			return false;
		} else {
			return true;
		}
	}
	if (typeof input === "number") {
		if (input <= 0 || input > 5) {
			return false;
		} else {
			return true;
		}
	}
	return false;
}
