// api.test.js

const chai = require('chai');
const expect = chai.expect;
const request = require('request');

describe('Index page', function() {
  const url = 'http://localhost:7865';

  it('Correct status code?', function(done) {
    request.get(url, function(error, response, body) {
      if (error) {
        done(error); // Pass any error to Mocha
      } else {
        expect(response && response.statusCode).to.equal(200);
        done(); // Finish the test
      }
    });
  });

  it('Correct result?', function(done) {
    request.get(url, function(error, response, body) {
      if (error) {
        done(error); // Pass any error to Mocha
      } else {
        expect(body).to.equal('Welcome to the payment system');
        done(); // Finish the test
      }
    });
  });

});
