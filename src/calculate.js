class Calculator {
  add = (x, y) => x + y;
  subtract = (x, y) => x - y;
  multiply = (x, y) => x * y;
  divide = (x, y) => {
    if (y == 0) {
      throw new Error("Divide by zero");
    }
    return x / y;
  };
  addTwoNumbers = (x, y) => {
    this.sayHello("Hello");
    return this.add(x, y);
  };

  sayHello = (str) => console.log(str);
}

module.exports = new Calculator();
