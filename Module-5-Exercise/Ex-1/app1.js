/*
    1)  Create one class named Product with id, name, amount, stock as private properties, and getters, setter and
        create one method named two methods increaseStock(quantity), decreaseStock(quantity).
        increaseStock method does increase stock with given quantity and decreaseStock method decrese stock with given quantity.
        Create three objects of Product class and, assign values as you want to these objects.  Done
 */
var Product = /** @class */ (function () {
    function Product() {
    }
    Object.defineProperty(Product.prototype, "setId", {
        set: function (v) {
            this.id = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "setName", {
        set: function (v) {
            this.name = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "setAmount", {
        set: function (v) {
            this.amount = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "setStock", {
        set: function (v) {
            this.stock = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "getId", {
        get: function () {
            return this.id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "getName", {
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "getAmount", {
        get: function () {
            return this.amount;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "getStock", {
        get: function () {
            return this.stock;
        },
        enumerable: false,
        configurable: true
    });
    Product.prototype.increaseStock = function (quantity) {
        this.stock += quantity;
    };
    Product.prototype.decreaseStock = function (quantity) {
        if (this.stock > quantity) {
            this.stock -= quantity;
        }
        else {
            alert("Stock is Not Enough For Product '".concat(this.getName, "', Please Check Stock..."));
        }
    };
    return Product;
}());
var prd1 = new Product();
prd1.setId = 1;
prd1.setName = "Laptop";
prd1.setAmount = 40000;
prd1.setStock = 100;
var prd2 = new Product();
prd2.setId = 2;
prd2.setName = "Mobile";
prd2.setAmount = 15000;
prd2.setStock = 100;
var prd3 = new Product();
prd3.setId = 1;
prd3.setName = "Refrigerator";
prd3.setAmount = 20000;
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
