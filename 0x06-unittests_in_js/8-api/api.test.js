const request = require('request');
const { expect } = require('chai');

describe('Index page', () => {
  const url = 'http://localhost:7865';

  it('should return the correct status code', (done) => {
    request(url, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return the correct result', (done) => {
    request(url, (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});
