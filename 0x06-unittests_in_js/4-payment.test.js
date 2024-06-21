const { expect } = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function () {
    let calculateNumberStub;
    let consoleLogSpy;

    beforeEach(function () {
        // Stub the calculateNumber method
        calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
        // Spy on console.log
        consoleLogSpy = sinon.spy(console, 'log');
    });

    afterEach(function () {
        // Restore the stub and spy
        calculateNumberStub.restore();
        consoleLogSpy.restore();
    });

    it('should call calculateNumber with SUM, 100, and 20 and log the correct total', function () {
        sendPaymentRequestToApi(100, 20);

        expect(calculateNumberStub.calledOnce).to.be.true;
        expect(calculateNumberStub.calledWith('SUM', 100, 20)).to.be.true;
        expect(consoleLogSpy.calledOnce).to.be.true;
        expect(consoleLogSpy.calledWith('The total is: 10')).to.be.true;
    });
});
