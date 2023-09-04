// @experimentalDecorators
function sealed(constructor: Function) {
	Object.seal(constructor);
	Object.seal(constructor.prototype);
}
// ---cut---
@sealed
class BugReport {
	type = "report";
	title: string;

	constructor(t: string) {
		this.title = t;
	}
}

// @experimentalDecorators
function enumerable() {
	return function (
		target: any,
		propertyKey: string,
		descriptor: PropertyDescriptor
	) {
		descriptor.enumerable = true;
	};
}
// ---cut---
class Greeter {
	greeting: string;
	constructor(message: string) {
		this.greeting = message;
	}

	@enumerable
	greet() {
		return "Hello, " + this.greeting;
	}
}

// @experimentalDecorators
function configurable(value: boolean) {
	return function (
		target: any,
		propertyKey: string,
		descriptor: PropertyDescriptor
	) {
		descriptor.configurable = value;
	};
}
// ---cut---
class Point {
	private _x: number;
	private _y: number;
	constructor(x: number, y: number) {
		this._x = x;
		this._y = y;
	}

	@configurable(false)
	get x() {
		return this._x;
	}

	@configurable(false)
	get y() {
		return this._y;
	}
}
