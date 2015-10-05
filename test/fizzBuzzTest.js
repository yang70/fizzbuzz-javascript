var expect = require('chai').expect;
var fizzBuzz = require('../lib/fizzBuzz');

describe("FizzBuzz program", function(){
  it('should give output correctly', function(){
    var output = "1\n2\nfizz\n4\nbuzz\nfizz\n7\n8\nfizz\nbuzz\n11\nfizz\n13\n14\nfizzbuzz\n";
    expect(fizzBuzz(15)).to.equal(output);
  });
})
