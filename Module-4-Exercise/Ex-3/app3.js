/*
    3) Write a function called calculateSalePriceAndTotals() which returns an array with new two new keys (salePrice and total).
The key 'salePrice' equals the calculated sale price based on the original price and the discount. The key 'total' equals
the computed total based on stock, the original price and the discount.
Note: must use object Destructuring in function calculateSalePriceAndTotals() and default discount is 0.0

products = [
  { name: 'Mobile', stock: 3, original: 4000 },
  { name: 'Laptop', stock: 1, original: 10000, discount: 0.1 },
  { name: 'Mouse', stock: 4, original: 299.99 },
  { name: 'Keyboard', stock: 1, original: 299.99, discount: 0.8 },
  { name: 'Headphone', stock: 2, original: 199.99, discount: 0.65 }
];

output:
[
  {
    name: ""Mobile"",
    original: 4000,
    sale: 4000,
    stock: 3,
    total: 12000
  },
  {
    discount: 0.1,
    name: ""Laptop"",
    original: 10000,
    sale: 9000,
    stock: 1,
    total: 9000
  },
  {
    name: ""Mouse"",
    original: 299.99,
    sale: 299.99,
    stock: 4,
    total: 1199.96
  },
  {
    discount: 0.8,
    name: ""Keyboard"",
    original: 299.99,
    sale: 59.99799999999999,
    stock: 1,
    total: 59.99799999999999
  },
  {
    discount: 0.65,
    name: ""Headphone"",
    original: 199.99,
    sale: 69.9965,
    stock: 2,
    total: 139.993
  }
]"



*/
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var products = [
    { name: "Mobile", stock: 3, original: 4000 },
    { name: "Laptop", stock: 1, original: 10000, discount: 0.1 },
    { name: "Mouse", stock: 4, original: 299.99 },
    { name: "Keyboard", stock: 1, original: 299.99, discount: 0.8 },
    { name: "Headphone", stock: 2, original: 199.99, discount: 0.65 },
];
function calculateSalePriceAndTotals() {
    return products.map(function (product) {
        var _a = __assign({}, product), stock = _a.stock, original = _a.original, discount = _a.discount, sale = _a.sale, total = _a.total;
        if (!discount) {
            product.sale = original;
            product.total = original * stock;
        }
        else {
            product.sale = original - original * discount;
            product.total = product.sale * stock;
        }
        return product;
    });
}
console.log("Products : ", calculateSalePriceAndTotals());
