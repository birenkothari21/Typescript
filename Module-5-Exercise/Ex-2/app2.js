/*
    2)  Create two interfaces named Readable and Writable. Readable contains read() method with return type string and Writable contains write() method which takes string type parameter.
        Writable interface extends Readable interface.
        Create one class named Book which implements Writable interface.
        Book class have one property named data which type is string. delcare Writable interface methods in Book class.
        read() method returns data(string). and write method takes string as parameter and add that parameter's value in data.
        Create one object of Book class and perform read() and write() on it. Done
 */
var Book = /** @class */ (function () {
    function Book() {
        this.data = "";
    }
    Book.prototype.write = function (data) {
        this.data += data;
    };
    Book.prototype.read = function () {
        return this.data;
    };
    return Book;
}());
var b1 = new Book();
b1.write("Hello, this is typescript course which you are watching...");
console.log(b1.read());
b1.write("I think that you are learning concepts deeper...");
console.log(b1.read());
