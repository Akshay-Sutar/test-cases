const chai = require("chai");
const sinon = require("sinon");
const calculator = require("../src/calculate");
const chaiaspromise = require("chai-as-promised");
const nock = require('nock');

chai.use(chaiaspromise);

const expect = chai.expect;

describe("calculator ", () => {
  it("test add method", () => {
    expect(calculator.add(1, 2)).to.be.equal(3);
  });

  it("check add is called once", () => {
    const spy = sinon.spy(calculator, "add");
    calculator.addTwoNumbers(1, 2);
    sinon.assert.calledOnce(spy);

    expect(spy.calledOnce).to.be.true;
  });
});

describe.skip("mock function add", () => {
  it("mock say hello", () => {
    const mock = sinon.mock(calculator);
    const expectation = mock.expects("sayHello");
    expectation.exactly(1);
    expectation.withArgs("Hello");
    calculator.addTwoNumbers(1, 2);
    mock.verify();
  });
});

describe.skip("test a stub", () => {
  it("stub add", () => {
    const stub = sinon.stub(calculator, "add");
    stub.withArgs(10, 20).returns(30);
    expect(calculator.addTwoNumbers(10, 20)).to.be.equal(30);
  });
});

describe.skip("test a promise", () => {
  it("test a promise", function () {
    this.timeout(5000);
    return expect(calculator.testPromise()).to.eventually.equal(6);
  });
});

describe("test a XHR call", () => {
  it("test a XHR call", function (done) {
    const scope = nock("https://jsonplaceholder.typicode.com")
      .get("/users/1")
      .reply(200, { id: 1 });

    calculator.testAPI().then(data => {
        console.log(data);
        done();
    }).catch(err => {
        console.error(err);
    });
  });
});
