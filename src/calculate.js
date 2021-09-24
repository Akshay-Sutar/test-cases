const axios = require("axios");
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

  testPromise = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(3);
      }, 3000);
    }).then((res) => res * 2);
  };

  testAPI = () => {
    return new Promise((resolve, reject) => {
      axios.get("https://jsonplaceholder.typicode.com/users/1").then((res) => {
        return resolve(res.data);
      });
    }).then(res => res);
  };
}

module.exports = new Calculator();
