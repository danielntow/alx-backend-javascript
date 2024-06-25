const request = require('request');
const { expect } = require('chai');
const app = require('./api');  // Import the app to start the server

describe('Index page', () => {
  let server;

  before((done) => {
    server = app.listen(7865, done);  // Ensure server is running before tests
  });

  after((done) => {
    server.close(done);  // Close the server after tests
  });

  it('should return the correct status code for the index page', (done) => {
    request('http://localhost:7865', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return the correct result for the index page', (done) => {
    request('http://localhost:7865', (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  describe('Cart page', () => {
    it('should return the correct status code when :id is a number', (done) => {
      request('http://localhost:7865/cart/12', (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });

    it('should return the correct result when :id is a number', (done) => {
      request('http://localhost:7865/cart/12', (error, response, body) => {
        expect(body).to.equal('Payment methods for cart 12');
        done();
      });
    });

    it('should return 404 status code when :id is NOT a number', (done) => {
      request('http://localhost:7865/cart/hello', (error, response, body) => {
        expect(response.statusCode).to.equal(404);
        done();
      });
    });
  });
});
