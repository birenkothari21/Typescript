/* 
    1)  Create one class named Product with id, name, amount, stock as private properties, and getters, setter and
        create one method named two methods increaseStock(quantity), decreaseStock(quantity).
        increaseStock method does increase stock with given quantity and decreaseStock method decrese stock with given quantity.
        Create three objects of Product class and, assign values as you want to these objects.  Done
 */

class Product {
	private id: number;
	private name: string;
	private amount: number;
	private stock: number;

	public set setId(v: number) {
		this.id = v;
	}

	public set setName(v: string) {
		this.name = v;
	}

	public set setAmount(v: number) {
		this.amount = v;
	}

	public set setStock(v: number) {
		this.stock = v;
	}

	public get getId(): number {
		return this.id;
	}

	public get getName(): string {
		return this.name;
	}

	public get getAmount(): number {
		return this.amount;
	}

	public get getStock(): number {
		return this.stock;
	}

	increaseStock(quantity: number): void {
		this.stock += quantity;
	}

	decreaseStock(quantity: number): void {
		if (this.stock > quantity) {
			this.stock -= quantity;
		} else {
			alert(
				`Stock is Not Enough For Product '${this.getName}', Please Check Stock...`
			);
		}
	}
}

const prd1 = new Product();

prd1.setId = 1;
prd1.setName = "Laptop";
prd1.setAmount = 40_000;
prd1.setStock = 100;

const prd2 = new Product();

prd2.setId = 2;
prd2.setName = "Mobile";
prd2.setAmount = 15_000;
prd2.setStock = 100;

const prd3 = new Product();

prd3.setId = 1;
prd3.setName = "Refrigerator";
prd3.setAmount = 20_000;
prd3.setStock = 100;

console.log(prd1);
console.log(prd2);
console.log(prd3);

prd1.increaseStock(10);
prd2.increaseStock(10);
prd3.increaseStock(12);

console.log(prd1);
console.log(prd2);
console.log(prd3);

prd1.decreaseStock(100);
prd2.decreaseStock(100);
prd3.decreaseStock(120);

console.log(prd1);
console.log(prd2);
console.log(prd3);
