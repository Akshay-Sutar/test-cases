const chai = require('chai');
const sinon = require('sinon');
const calculator = require('../src/calculate');

const expect = chai.expect;

describe("calculator ", () => {
    it ("test add method", ()=>{
        expect(calculator.add(1,2)).to.be.equal(3);
    });

    it("check add is called once", ()=>{
        const spy = sinon.spy(calculator,'add');
        calculator.addTwoNumbers(1,2);
        sinon.assert.calledOnce(spy);

        expect(spy.calledOnce).to.be.true;
    });

    it("mock say hello", ()=>{
        const mock = sinon.mock(calculator);
        const expectation = mock.expects('sayHello');
        expectation.exactly(1);
        expectation.withArgs('Hello');
        calculator.addTwoNumbers(1,2);
        mock.verify();

    });
});