// In global scope
console.log(this); // In browsers, refers to the window object

// Inside a function (non-strict mode)
function showThis() {
    console.log(this);
}
showThis(); // In browsers, refers to the window object

// Inside an object method
const person = {
    name: "Alice",
    greet: function() {
        console.log("Hello, " + this.name);
    }
};
person.greet(); // "Hello, Alice"

// Using `this` in a constructor
function Car(make) {
    this.make = make;
}
const myCar = new Car("Toyota");
console.log(myCar.make); // "Toyota"

// Arrow functions and `this`
const obj = {
    value: 42,
    show: function() {
        const arrow = () => {
            console.log(this.value);
        };
        arrow();
    }
};
obj.show(); // 42

// Losing `this` context
const greet = person.greet;
greet(); // In browsers, undefined or window.name