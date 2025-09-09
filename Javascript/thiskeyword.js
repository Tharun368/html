const person = {
  name: "Alice",
  greet() {
    return "Hello, " + this.name;
  }
};
person.greet(); // "Hello, Alice"


function globalFunction() {
  console.log(this);
}
globalFunction(); // window (or undefined in strict mode)